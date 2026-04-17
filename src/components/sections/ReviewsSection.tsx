import AdaxaTestimonials, { Testimonial } from "@/components/AdaxaTestimonials";

// Helper to convert dates to Phoenix time (handles CDT/CST conversion)
const phoenixDate = (dateStr: string) => {
  // Parse the input date and convert to Phoenix timezone
  return new Date(dateStr).toISOString();
};

const testimonials: Testimonial[] = [
  {
    author: "Brian",
    text: "Erika helped us with our loan and we couldn't be happier. She was super responsive, helpful, knowledgeable and awesome to work with, we will definitely use this company again!",
    url: "https://maps.app.goo.gl/nAnfbELTh75TXoZM7",
    date: phoenixDate("2025-11-25T13:42:00-07:00"),
  },
  {
    author: "J'nut Coin",
    text: "Erika was very professional, timely and such a pleasure to work with. We would highly recommend her to our family and friends for their mortgage needs.",
    url: "https://maps.app.goo.gl/QnmaVhZ5QnbJpPhj8",
    date: phoenixDate("2025-11-06T18:22:00-07:00"),
  },
  {
    author: "Randall Cohee",
    text: "Working with Erika Robinson was an absolute delight and I would recommend her over all the brokers I have ever worked with. I can't say enough good things about her. She kept me completely informed all the way through the process and stayed on top of everything. She was always easy to contact and ready to answer my questions or quickly find out the answer and then get back to me. I plan to use her again when the time is right.",
    url: "https://maps.app.goo.gl/2Qqq3kMN6QVtTf4Z9",
    date: phoenixDate("2025-10-17T11:34:00-07:00"),
  },
  {
    author: "Denise Ortego",
    text: "Just closed on our refi. The process was very easy and Erika Robinson did a superb job! She was informative, very responsive and made the process painless. The remote closing process was awesome and quick as well! thank you!",
    url: "https://maps.app.goo.gl/7meCRFb8Jq87kh7R8",
    date: phoenixDate("2025-10-09T09:59:00-07:00"),
  },
  {
    author: "Theodore Shea",
    text: "Erika Robinson went above and beyond helping us get our loan funded. Available for questions at almost all hours, very helpful for those of us that have to work. Highly recommend!",
    url: "https://maps.app.goo.gl/Yqp3Wpdxf5WXYXma6",
    date: phoenixDate("2025-09-17T18:54:00-07:00"),
  },
  {
    author: "Ana de la Noval",
    text: "I could not be happier with the assistance I received from Erika Robinson for my mortgage deal. She is amazingly smart, accessible and delivered exactly on time! Erika was incredibly organized and proactive, helping me get through the application process at lightning speed. I grew to trust her because I believed she truly cared about me and as a single, retired woman, her assistance was not only one I could trust, but very significant to me. She was always available and the deal closed exactly when she predicted it would! Erika, thank you for being such an outstanding, fun broker. Both you and Adaxa are a class act and I highly recommend you to anyone who wants to be treated professionally and exceptionally. Thank you again!",
    url: "https://maps.app.goo.gl/Rd7eaxtyNuucSi4q8",
    date: phoenixDate("2025-06-11T14:18:00-07:00"),
  },
  {
    author: "Virginia Burzotta",
    text: "Adaxa is one of the best discount brokerage firms I've worked with and I have worked with a lot.\nErika was especially helpful and knowledgeable. She went the extra mile for us. Erika got us the best deal.",
    url: "https://maps.app.goo.gl/cfviC4j66fW58oN69",
    date: phoenixDate("2025-06-06T07:39:00-07:00"),
  },
  {
    author: "Jim Kenyon",
    text: "Erika made the entire process seem simple, relaxed and quick. If you want effortless Erika is the best.",
    url: "https://maps.app.goo.gl/BefUK1yixeEYWSfY8",
    date: phoenixDate("2026-02-13T09:04:00-07:00"), // 9:04 AM MST = UTC-7
  },
  {
    author: "Antonio Pandolfi",
    text: "Moving and purchasing a home are very stressful times. Things can become overwhelming, especially when life also happens. Erika Robinson made the entire mortgage process incredibly easy and stress-free. She was always responsive, explained everything clearly, and stayed on top of every detail from start to finish. What could have been an overwhelming process felt smooth and manageable because of her professionalism and guidance. I couldn't have asked for a better experience and would highly recommend her to anyone looking for a mortgage professional who truly knows what they're doing.",
    url: "https://maps.app.goo.gl/BefUK1yixeEYWSfY8",
    date: phoenixDate("2026-02-28T05:23:00-07:00"), // 5:23 AM MST = UTC-7
  },
  {
    author: "Trent Beaver",
    text: "I have worked with Erika Robinson With Adaxa for two separate refinances now. She has always been straight forward and worked diligently to get my loans funded ASAP. She has gone above and beyond to make the process easy and pain free.",
    url: "https://www.google.com/maps/reviews/@36.6993761,-102.41164,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT25CdFIxRkxWMTlOUkZKbGJWRjFUamQwYjFWWVJVRRAB!2m1!1s0x0:0x9a12cd5799563bf0",
    date: phoenixDate("2026-04-15T10:26:00-05:00"), // 10:26 AM CDT = UTC-5
  },
  {
    author: "Beth Chitwood",
    text: "Erika was so personable and easy to work with. I appreciate that she explained things step by step and I felt totally comfortable asking her any questions that came up. She really went above and beyond working untraditional hours to meet our busy schedules.",
    url: "https://maps.app.goo.gl/Q5JaBHbBXjdzyngKA",
    date: phoenixDate("2026-03-29T21:00:00-05:00"), // 9:00 PM CDT = UTC-5
  },
  {
    author: "Cooper Bowman",
    text: "Erika was incredible to work with. She made the entire process of getting approved simple and seamless. I typically view the process of getting a home loan of any sort very cumbersome but with Erika and her consistent communication it was effortless. I travel for a living so simplicity and getting the best rate was my highest priority that she achieved in flying colors! All the best words for Erika!",
    url: "https://www.google.com/maps/reviews/@36.6993761,-102.41164,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2poTFJGaFBaa0ZCV0UxR2IxbGpaa1IyWlhsMk0xRRAB!2m1!1s0x0:0x9a12cd5799563bf0",
    date: phoenixDate("2026-03-18T13:15:00-05:00"), // 1:15 PM CDT = UTC-5
  },
  {
    author: "Mitch Snyder",
    text: "Erika Robinson was a complete champion working through the lending process with me. She keeps constant communication, clearly explains the process, and assists as much as possible with obtaining and uploading necessary documentation.\nErika makes the process short and seamless through to closing. She even followed up once the loan was closed to ensure that everything went well from my perspective.\nI highly recommend reaching out to Erika should you have any loan or lending needs.",
    url: "https://www.google.com/maps/reviews/@36.6993761,-102.41164,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT25SRlZtOXBVbGxyYkZaU1NVdHhibGhKU213dFJIYxAB!2m1!1s0x0:0x9a12cd5799563bf0",
    date: phoenixDate("2026-03-04T08:04:00-06:00"), // 8:04 AM CST = UTC-6
  },
  {
    author: "Arlinda Holland",
    text: "I cannot say enough great things about Erika Robinson as my mortgage broker. From start to finish, she was always available to answer my calls, explain every step of the process, and make sure I fully understood what was happening with my refinance. She truly took the time to break things down in a way that made me feel confident and informed.\n\nErika worked hard to secure the best interest rate possible and made sure I received the maximum cash back from my refinance. I never felt like just another client — she would even check in with me if she hadn't heard from me for a day, which showed me how much she genuinely cared about getting me the best outcome.\n\nHer professionalism, responsiveness, and dedication made what could have been a stressful process feel smooth and manageable. I would absolutely choose Erika again and again for any of my home loan needs and highly recommend her to anyone looking for someone who truly has their clients' best interests at heart.",
    url: "https://www.google.com/maps/reviews/@36.6993761,-102.41164,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2s0eE1rUm9iRXhFVWtoelRWTTRaRGxUV2pWcWVuYxAB!2m1!1s0x0:0x9a12cd5799563bf0",
    date: phoenixDate("2026-02-16T19:21:00-06:00"), // 7:21 PM CST = UTC-6
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
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
