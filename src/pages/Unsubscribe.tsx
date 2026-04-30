import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

type Status =
  | "validating"
  | "valid"
  | "already_used"
  | "invalid"
  | "submitting"
  | "success"
  | "error";

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [status, setStatus] = useState<Status>("validating");
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const validate = async () => {
      if (!token) {
        setStatus("invalid");
        return;
      }
      try {
        const res = await fetch(
          `${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(
            token
          )}`,
          { headers: { apikey: SUPABASE_ANON_KEY } }
        );
        const data = await res.json();
        if (data?.alreadyUnsubscribed || data?.already_unsubscribed) {
          setEmail(data.email ?? null);
          setStatus("already_used");
        } else if (res.ok && (data?.valid ?? true)) {
          setEmail(data.email ?? null);
          setStatus("valid");
        } else {
          setStatus("invalid");
        }
      } catch {
        setStatus("invalid");
      }
    };
    validate();
  }, [token]);

  const handleConfirm = async () => {
    if (!token) return;
    setStatus("submitting");
    try {
      const { error } = await supabase.functions.invoke(
        "handle-email-unsubscribe",
        { body: { token } }
      );
      if (error) throw error;
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6 py-16">
      <div className="max-w-md w-full bg-secondary rounded-sm shadow-elegant p-10 text-center">
        <p className="text-gold font-body text-xs tracking-[0.25em] uppercase mb-4">
          Mortgage By Design, LLC
        </p>

        {status === "validating" && (
          <>
            <Loader2 className="w-8 h-8 mx-auto mb-4 text-gold animate-spin" />
            <h1 className="font-heading text-2xl text-foreground mb-2">
              Checking your link…
            </h1>
          </>
        )}

        {status === "valid" && (
          <>
            <h1 className="font-heading text-3xl text-foreground mb-3">
              Unsubscribe?
            </h1>
            <p className="text-muted-foreground font-body mb-6">
              {email ? (
                <>
                  Stop sending emails to <strong>{email}</strong>?
                </>
              ) : (
                "Are you sure you want to unsubscribe from these emails?"
              )}
            </p>
            <button
              onClick={handleConfirm}
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-primary font-body font-medium px-8 py-3 rounded-sm transition-colors"
            >
              Confirm Unsubscribe
            </button>
          </>
        )}

        {status === "submitting" && (
          <>
            <Loader2 className="w-8 h-8 mx-auto mb-4 text-gold animate-spin" />
            <h1 className="font-heading text-2xl text-foreground">
              Unsubscribing…
            </h1>
          </>
        )}

        {status === "success" && (
          <>
            <CheckCircle2 className="w-10 h-10 mx-auto mb-4 text-gold" />
            <h1 className="font-heading text-3xl text-foreground mb-3">
              You've been unsubscribed
            </h1>
            <p className="text-muted-foreground font-body">
              {email
                ? `${email} will no longer receive these emails.`
                : "You will no longer receive these emails."}
            </p>
          </>
        )}

        {status === "already_used" && (
          <>
            <CheckCircle2 className="w-10 h-10 mx-auto mb-4 text-gold" />
            <h1 className="font-heading text-3xl text-foreground mb-3">
              Already unsubscribed
            </h1>
            <p className="text-muted-foreground font-body">
              {email
                ? `${email} is already unsubscribed.`
                : "This address is already unsubscribed."}
            </p>
          </>
        )}

        {(status === "invalid" || status === "error") && (
          <>
            <AlertCircle className="w-10 h-10 mx-auto mb-4 text-destructive" />
            <h1 className="font-heading text-3xl text-foreground mb-3">
              Link not valid
            </h1>
            <p className="text-muted-foreground font-body">
              This unsubscribe link is invalid or has expired. Please contact us
              directly if you'd like to stop receiving emails.
            </p>
          </>
        )}
      </div>
    </main>
  );
};

export default Unsubscribe;
