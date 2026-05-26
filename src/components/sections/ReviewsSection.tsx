import AdaxaTestimonials, { Testimonial } from "@/components/AdaxaTestimonials";

// Helper to convert dates to Phoenix time (handles CDT/CST conversion)
const phoenixDate = (dateStr: string) => {
  // Parse the input date and convert to Phoenix timezone
  return new Date(dateStr).toISOString();
};

const testimonials: Testimonial[] = [
  {
    author: "Skip",
    text: "Erika was excellent to work with. Great and timely communication, very knowledgeable and up to date with facts. Great personality and very thorough through the entire process. Would recommend requesting to work with her. Quick and easy process to the end.",
    url: "https://maps.app.goo.gl/rJBeBuiQmbSgKDXB7",
    date: phoenixDate("2026-05-21T12:00:00-07:00"),
  },
  {
    author: "Kelly Nine",
    text: "I have worked with Erika Robinson on two occasions now, and I have been extremely happy with her work. She is always very helpful. You can hear the smile in her voice, and she is willing to help you any time off day and even weekends. She is a very valuable asset to Adaxa. I will highly recommend her to anyone needing financial services. Thank you Erika :)",
    url: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tSbFlYVTVSbGt4T0hSWFgxVkhORmR2ZFc0d1VVRRAB!2m1!1s0x0:0x9a12cd5799563bf0!3m1!1s2@1:CAIQACodChtycF9oOkRlYXU5RlkxOHRXX1VHNFdvdW4wUUE%7C%7C",
    date: phoenixDate("2026-04-20T13:12:00-07:00"),
  },
  {
    author: "Angel Mason",
    text: "Erika was amazing. She worked so quickly and got things done !!! We had a lot going on and she literally helped us out so much! She told me not worry and she was right . Thank you for everything you did for us!",
    url: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tWZmRYTnlTRlZPU0RaZlltZG1hbVI1YWxabVMzYxAB!2m1!1s0x0:0x9a12cd5799563bf0!3m1!1s2@1:CAIQACodChtycF9oOkVfdXNySFVOSDZfYmdmamR5alZmS3c%7C0dYGLK_vFkj%7C",
    date: phoenixDate("2026-02-11T16:49:00-07:00"),
  },
  {
    author: "Jim Ball",
    text: "Erika and Brandon are a great team. They stay on top of everything and explain the steps and procedures very well.\nI will definitely use them again and I recommend you do too!",
    url: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25SeGQzWk5iRFJ2U2tSclZVWmhibkIwVkc1QlVuYxAB!2m1!1s0x0:0x9a12cd5799563bf0!3m1!1s2@1:CAIQACodChtycF9oOnRxd3ZNbDRvSkRrVUZhbnB0VG5BUnc%7C0dPkzIkZzBz%7C",
    date: phoenixDate("2026-01-16T21:28:00-07:00"),
  },
  {
    author: "Jeanette Wong",
    text: "Erika Robinson was wonderful throughout our loan process. Every loan comes with its own unique obstacles, but Erika closed out our loan in 12 business days, while juggling the pre-holiday season. She is responsive and will send frequent morning updates, in the manner that makes you believe—your case is the first thing on her mind. She is professional, with a balance of interpersonal, and based on our conversations, I believe she can relate to any client's walk of life. Our family are likely customers for the duration of her mortgage broker career.",
    url: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tWNExWUXhSMjg1ZG14R1NEUnNiMUYxU1haeGRIYxAB!2m1!1s0x0:0x9a12cd5799563bf0!3m1!1s2@1:CAIQACodChtycF9oOkV4LVQxR285dmxGSDRsb1F1SXZxdHc%7C0dAlgCW4y29%7C",
    date: phoenixDate("2025-12-02T09:59:00-07:00"),
  },
  {
    author: "Brian",
    text: "Erika helped us with our loan and we couldn't be happier. She was super responsive, helpful, knowledgeable and awesome to work with, we will definitely use this company again!",
    url: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tsTmVWUm1NalpYVW5SbGJHaHpOVE5IZDNvdFUyYxAB!2m1!1s0x0:0x9a12cd5799563bf0!3m1!1s2@1:CAIQACodChtycF9oOklNeVRmMjZXUnRlbGhzNTNHd3otU2c%7C0d8WIFhQKfo%7C",
    date: phoenixDate("2025-11-25T13:42:00-07:00"),
  },
  {
    author: "J'nut Coin",
    text: "Erika was very professional, timely and such a pleasure to work with. We would highly recommend her to our family and friends for their mortgage needs.",
    url: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25Sc1p6UXhibVkyWVU1T2RVSlFWM05vY1RNd1JWRRAB!2m1!1s0x0:0x9a12cd5799563bf0!3m1!1s2@1:CAIQACodChtycF9oOnRsZzQxbmY2YU5OdUJQV3NocTMwRVE%7C0d2JbBklOTa%7C",
    date: phoenixDate("2025-11-06T18:22:00-07:00"),
  },
  {
    author: "Randall Cohee",
    text: "Working with Erika Robinson was an absolute delight and I would recommend her over all the brokers I have ever worked with. I can't say enough good things about her. She kept me completely informed all the way through the process and stayed on top of everything. She was always easy to contact and ready to answer my questions or quickly find out the answer and then get back to me. I plan to use her again when the time is right.",
    url: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pFM05EUjRVR0Z0ZGxCdWMwOUlWRVpmVmtaSFNYYxAB!2m1!1s0x0:0x9a12cd5799563bf0!3m1!1s2@1:CAIQACodChtycF9oOjE3NDR4UGFtdlBuc09IVEZfVkZHSXc%7C0cwcl8JizPP%7C",
    date: phoenixDate("2025-10-17T11:34:00-07:00"),
  },
  {
    author: "Denise Ortego",
    text: "Just closed on our refi. The process was very easy and Erika Robinson did a superb job! She was informative, very responsive and made the process painless. The remote closing process was awesome and quick as well! thank you!",
    url: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25Gd1ZHbGtaV3hDVlMxVFJFZFRkRjlVTTB0YWIyYxAB!2m1!1s0x0:0x9a12cd5799563bf0!3m1!1s2@1:CAIQACodChtycF9oOnFwVGlkZWxCVS1TREdTdF9UM0tab2c%7C0ctyc2JKcqK%7C",
    date: phoenixDate("2025-10-09T09:59:00-07:00"),
  },
  {
    author: "Theodore Shea",
    text: "Erika Robinson went above and beyond helping us get our loan funded. Available for questions at almost all hours, very helpful for those of us that have to work. Highly recommend!",
    url: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xaS1ZrdDBTMjAzYWtWRVJFSTRMVWRhZEdabWExRRAB!2m1!1s0x0:0x9a12cd5799563bf0!3m1!1s2@1:CAIQACodChtycF9oOlZKVkt0S203akVEREI4LUdadGZma1E%7C0cmqOBORdQ4%7C",
    date: phoenixDate("2025-09-17T18:54:00-07:00"),
  },
  {
    author: "Ana de la Noval",
    text: "I could not be happier with the assistance I received from Erika Robinson for my mortgage deal. She is amazingly smart, accessible and delivered exactly on time! Erika was incredibly organized and proactive, helping me get through the application process at lightning speed. I grew to trust her because I believed she truly cared about me and as a single, retired woman, her assistance was not only one I could trust, but very significant to me. She was always available and the deal closed exactly when she predicted it would! Erika, thank you for being such an outstanding, fun broker. Both you and Adaxa are a class act and I highly recommend you to anyone who wants to be treated professionally and exceptionally. Thank you again!",
    url: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VOMmltOU9CMVlieHhRRRAB!2m1!1s0x0:0x9a12cd5799563bf0!3m1!1s2@1:CIHM0ogKEN2im9OB1YbxxQE%7CCgsIreWnwgYQkK6FcQ%7C",
    date: phoenixDate("2025-06-11T14:18:00-07:00"),
  },
  {
    author: "Virginia Burzotta",
    text: "Adaxa is one of the best discount brokerage firms I've worked with and I have worked with a lot.\nErika was especially helpful and knowledgeable. She went the extra mile for us. Erika got us the best deal.",
    url: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VPajNpUGJyMWFhc0V3EAE!2m1!1s0x0:0x9a12cd5799563bf0!3m1!1s2@1:CIHM0ogKEOj3iPbr1aasEw%7CCgwIsfuLwgYQgMSmygE%7C",
    date: phoenixDate("2025-06-06T07:39:00-07:00"),
  },
  {
    author: "Jim Kenyon",
    text: "Erika made the entire process seem simple, relaxed and quick. If you want effortless Erika is the best.",
    url: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT20xa2NWVnFXRlZaVEVkclduWmpkM2hzVm1ONVVXYxAB!2m1!1s0x0:0x9a12cd5799563bf0!3m1!1s2@1:CAIQACodChtycF9oOm1kcVVqWFVZTEdrWnZjd3hsVmN5UWc%7C0dYoiAWyHZj%7C",
    date: phoenixDate("2026-02-13T09:04:00-07:00"),
  },
  {
    author: "Antonio Pandolfi",
    text: "Moving and purchasing a home are very stressful times. Things can become overwhelming, especially when life also happens. Erika Robinson made the entire mortgage process incredibly easy and stress-free. She was always responsive, explained everything clearly, and stayed on top of every detail from start to finish. What could have been an overwhelming process felt smooth and manageable because of her professionalism and guidance. I couldn't have asked for a better experience and would highly recommend her to anyone looking for a mortgage professional who truly knows what they're doing.",
    url: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tzNFkybFZRMFF4UW5CRWFYcHNUMnR0YjBaNVUyYxAB!2m1!1s0x0:0x9a12cd5799563bf0!3m1!1s2@1:CAIQACodChtycF9oOks4Y2lVQ0QxQnBEaXpsT2ttb0Z5U2c%7C%7C",
    date: phoenixDate("2026-02-28T05:23:00-07:00"),
  },
  {
    author: "Trent Beaver",
    text: "I have worked with Erika Robinson With Adaxa for two separate refinances now. She has always been straight forward and worked diligently to get my loans funded ASAP. She has gone above and beyond to make the process easy and pain free.",
    url: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25CdFIxRkxWMTlOUkZKbGJWRjFUamQwYjFWWVJVRRAB!2m1!1s0x0:0x9a12cd5799563bf0!3m1!1s2@1:CAIQACodChtycF9oOnBtR1FLV19NRFJlbVF1Tjd0b1VYRUE%7C%7C",
    date: phoenixDate("2026-04-15T10:26:00-05:00"),
  },
  {
    author: "Beth Chitwood",
    text: "Erika was so personable and easy to work with. I appreciate that she explained things step by step and I felt totally comfortable asking her any questions that came up. She really went above and beyond working untraditional hours to meet our busy schedules.",
    url: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2twd2F6VklYMkZGZFVJd2JUUnRSME5yYlVkNGNuYxAB!2m1!1s0x0:0x9a12cd5799563bf0!3m1!1s2@1:CAIQACodChtycF9oOkpwazVIX2FFdUIwbTRtR0NrbUd4cnc%7C%7C",
    date: phoenixDate("2026-03-29T21:00:00-05:00"),
  },
  {
    author: "Cooper Bowman",
    text: "Erika was incredible to work with. She made the entire process of getting approved simple and seamless. I typically view the process of getting a home loan of any sort very cumbersome but with Erika and her consistent communication it was effortless. I travel for a living so simplicity and getting the best rate was my highest priority that she achieved in flying colors! All the best words for Erika!",
    url: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2poTFJGaFBaa0ZCV0UxR2IxbGpaa1IyWlhsMk0xRRAB!2m1!1s0x0:0x9a12cd5799563bf0!3m1!1s2@1:CAIQACodChtycF9oOjhLRFhPZkFBWE1Gb1ljZkR2ZXl2M1E%7C%7C",
    date: phoenixDate("2026-03-18T13:15:00-05:00"),
  },
  {
    author: "Mitch Snyder",
    text: "Erika Robinson was a complete champion working through the lending process with me. She keeps constant communication, clearly explains the process, and assists as much as possible with obtaining and uploading necessary documentation.\nErika makes the process short and seamless through to closing. She even followed up once the loan was closed to ensure that everything went well from my perspective.\nI highly recommend reaching out to Erika should you have any loan or lending needs.",
    url: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25SRlZtOXBVbGxyYkZaU1NVdHhibGhKU213dFJIYxAB!2m1!1s0x0:0x9a12cd5799563bf0!3m1!1s2@1:CAIQACodChtycF9oOnRFVm9pUllrbFZSSUtxblhJSmwtRHc%7C%7C",
    date: phoenixDate("2026-03-04T08:04:00-06:00"),
  },
  {
    author: "Arlinda Holland",
    text: "I cannot say enough great things about Erika Robinson as my mortgage broker. From start to finish, she was always available to answer my calls, explain every step of the process, and make sure I fully understood what was happening with my refinance. She truly took the time to break things down in a way that made me feel confident and informed.\n\nErika worked hard to secure the best interest rate possible and made sure I received the maximum cash back from my refinance. I never felt like just another client — she would even check in with me if she hadn't heard from me for a day, which showed me how much she genuinely cared about getting me the best outcome.\n\nHer professionalism, responsiveness, and dedication made what could have been a stressful process feel smooth and manageable. I would absolutely choose Erika again and again for any of my home loan needs and highly recommend her to anyone looking for someone who truly has their clients' best interests at heart.",
    url: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2s0eE1rUm9iRXhFVWtoelRWTTRaRGxUV2pWcWVuYxAB!2m1!1s0x0:0x9a12cd5799563bf0!3m1!1s2@1:CAIQACodChtycF9oOk4xMkRobExEUkhzTVM4ZDlTWjVqenc%7C0dZw9cFc_bA%7C",
    date: phoenixDate("2026-02-16T19:21:00-06:00"),
  },
];

const ReviewsSection = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-4">
            Testimonials
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground font-semibold">
            Client Testimonials
          </h2>
          <p className="font-heading italic text-xl md:text-2xl text-muted-foreground mt-3">
            Real words from real clients
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <AdaxaTestimonials
            testimonials={[...testimonials].sort(
              (a, b) => new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime()
            )}
            brandUrl="https://adaxahome.com"
          />
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
