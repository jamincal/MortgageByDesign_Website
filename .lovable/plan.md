## Why your contact form isn't sending emails

Here's what's actually happening behind the scenes — there are two separate email systems on this project, and they're crossed:

1. **Lovable Emails (working ✅)** — Your verified sender domain `notify.mortgagebydesign.net` is fully set up. The DNS delegation to Lovable's nameservers (`ns3.lovable.cloud`, `ns4.lovable.cloud`) at Squarespace is correct, and the `_lovable-email` TXT verification record is in place. This system is ready to send.

2. **Old Resend function (broken ❌)** — Your contact form is still calling an older edge function (`send-contact-email`) that tries to send through **Resend**, not Lovable. That function:
   - Uses the test address `onboarding@resend.dev` (Resend's sandbox sender, which only delivers to the Resend account owner's email — not to Erika).
   - Requires a `RESEND_API_KEY` that almost certainly isn't configured.
   - Has zero invocation logs and zero rows in the email send log, meaning either the call is failing silently in the browser or Resend is rejecting it.

So the form *looks* like it works (you see the success toast), but no email is actually being delivered to `erobinson@adaxahome.com`.

**On Squarespace specifically:** Nothing is wrong with your DNS. Squarespace is correctly serving the NS delegation records. You do not need to change anything at Squarespace for this fix.

## The fix

Migrate the contact form off Resend and onto Lovable Emails, which is already verified for `notify.mortgagebydesign.net`.

### Steps

1. **Set up the Lovable Emails infrastructure** (queue, send log, suppression list, retry/cron job). One-time setup tied to your verified domain.

2. **Scaffold the transactional email sender** — creates the `send-transactional-email` edge function and a templates folder, all configured to send from `notify.mortgagebydesign.net`.

3. **Create a branded "Contact form confirmation/notification" email template** — styled in your navy/gold/cream palette with Cormorant Garamond + DM Sans, matching the site.

4. **Update `ContactForm.tsx`** to call `send-transactional-email` instead of `send-contact-email`. The email goes to Erika at `erobinson@adaxahome.com` with the visitor's name, email, phone, and message — exactly the same content as today.

5. **Delete the old `send-contact-email` function** and remove its config block from `supabase/config.toml` so there's no leftover Resend code in the project.

6. **Test end-to-end** by submitting the form and confirming the email arrives in Erika's inbox (and checking the send log if it doesn't).

### What you'll see after

- Form submissions send a real email from `notify@mortgagebydesign.net` (or similar branded sender) to Erika.
- The success toast on the form will mean the email is actually queued and on its way.
- Built-in retry handling — if delivery hits a transient error, it retries automatically instead of being lost.
- A send log you can inspect if anything ever fails again.

### What stays the same

- Your form fields, layout, validation, and toast messages — no UI changes.
- Squarespace DNS — no edits needed there.
- The `notify.mortgagebydesign.net` setup you already completed.

Approve this and I'll switch into build mode and implement it.