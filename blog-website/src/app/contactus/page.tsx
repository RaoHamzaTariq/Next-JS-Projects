import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";

const ContactUS = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.34em] text-muted-foreground">
            Contact
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Ask a question, suggest a topic, or send a note.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground">
            The contact page now matches the rest of the site with a quieter
            surface, clearer labels, and a form that reads cleanly on mobile.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: CiLocationOn,
                title: "Address",
                text: "123 Business Street\nNew York, NY 10001",
              },
              {
                icon: CiPhone,
                title: "Phone",
                text: "+1 (555) 123-4567",
              },
              {
                icon: CiMail,
                title: "Email",
                text: "contact@example.com",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-border bg-card p-5 shadow-sm"
                >
                  <Icon className="h-7 w-7 text-custom" />
                  <h2 className="mt-4 text-sm font-semibold uppercase tracking-[0.28em] text-foreground">
                    {item.title}
                  </h2>
                  <p className="mt-2 whitespace-pre-line text-sm leading-7 text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-[2.5rem] border border-border bg-card p-6 shadow-sm sm:p-8">
          <form className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="your@email.com" />
            </div>
            <div className="space-y-2">
              <label htmlFor="subject">Subject</label>
              <input id="subject" type="text" placeholder="Message subject" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={7}
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-custom px-6 py-3 text-sm font-medium text-custom-foreground shadow-sm transition hover:-translate-y-px hover:bg-custom/90"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUS;
