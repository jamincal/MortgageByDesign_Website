import AdaxaTestimonials, { Testimonial } from "@/components/AdaxaTestimonials";

const testimonials: Testimonial[] = [
  {
    author: "Beth Chitwood",
    text: "Erika was so personable and easy to work with. I appreciate that she explained things step by step and I felt totally comfortable asking her any questions that came up. She really went above and beyond working untraditional hours to meet our busy schedules.",
    url: "https://maps.app.goo.gl/Q5JaBHbBXjdzyngKA",
  },
  {
    author: "Trent Beaver",
    text: "I have worked with Erika Robinson With Adaxa for two separate refinances now. She has always been straight forward and worked diligently to get my loans funded ASAP. She has gone above and beyond to make the process easy and pain free.",
    url: "https://www.google.com/maps/reviews/@36.6993761,-102.41164,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT25CdFIxRkxWMTlOUkZKbGJWRjFUamQwYjFWWVJVRRAB!2m1!1s0x0:0x9a12cd5799563bf0",
  },
  {
    author: "Cooper Bowman",
    text: "Erika was incredible to work with. She made the entire process of getting approved simple and seamless. I typically view the process of getting a home loan of any sort very cumbersome but with Erika and her consistent communication it was effortless. I travel for a living so simplicity and getting the best rate was my highest priority that she achieved in flying colors! All the best words for Erika!",
    url: "https://www.google.com/maps/reviews/@36.6993761,-102.41164,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2poTFJGaFBaa0ZCV0UxR2IxbGpaa1IyWlhsMk0xRRAB!2m1!1s0x0:0x9a12cd5799563bf0",
  },
  {
    author: "Mitch Snyder",
    text: "Erika Robinson was a complete champion working through the lending process with me. She keeps constant communication, clearly explains the process, and assists as much as possible with obtaining and uploading necessary documentation.\nErika makes the process short and seamless through to closing. She even followed up once the loan was closed to ensure that everything went well from my perspective.\nI highly recommend reaching out to Erika should you have any loan or lending needs.",
    url: "https://www.google.com/maps/reviews/@36.6993761,-102.41164,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT25SRlZtOXBVbGxyYkZaU1NVdHhibGhKU213dFJIYxAB!2m1!1s0x0:0x9a12cd5799563bf0",
  },
  {
    author: "Arlinda Holland",
    text: "I cannot say enough great things about Erika Robinson as my mortgage broker. From start to finish, she was always available to answer my calls, explain every step of the process, and make sure I fully understood what was happening with my refinance. She truly took the time to break things down in a way that made me feel confident and informed.\n\nErika worked hard to secure the best interest rate possible and made sure I received the maximum cash back from my refinance. I never felt like just another client — she would even check in with me if she hadn't heard from me for a day, which showed me how much she genuinely cared about getting me the best outcome.\n\nHer professionalism, responsiveness, and dedication made what could have been a stressful process feel smooth and manageable. I would absolutely choose Erika again and again for any of my home loan needs and highly recommend her to anyone looking for someone who truly has their clients' best interests at heart.",
    url: "https://www.google.com/maps/reviews/@36.6993761,-102.41164,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2s0eE1rUm9iRXhFVWtoelRWTTRaRGxUV2pWcWVuYxAB!2m1!1s0x0:0x9a12cd5799563bf0",
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
            testimonials={testimonials}
            brandUrl="https://adaxahome.com"
          />
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
