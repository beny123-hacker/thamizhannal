"use client";

import "./contact.css";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = (
      form.elements.namedItem("name") as HTMLInputElement
    ).value;

    const email = (
      form.elements.namedItem("email") as HTMLInputElement
    ).value;

    const message = (
      form.elements.namedItem("message") as HTMLTextAreaElement
    ).value;

    const subject = encodeURIComponent(
      `தமிழண்ணல் அறக்கட்டளை - Contact from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\n\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:thamizhannalfoundation@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="contact-page">
      <section className="contact-section">
        <div className="contact-container">

          {/* HEADER */}
          <div className="contact-header">
            <p className="contact-eyebrow">
              Get in Touch
            </p>

            <h1 className="contact-title">
              தொடர்புகொள்ள
            </h1>

            <p className="contact-subtitle">
              Contact Us
            </p>
          </div>

          {/* DESCRIPTION */}
          <p className="contact-description">
            தமிழண்ணல் அறக்கட்டளையை தொடர்பு கொள்ள கீழேயுள்ள படிவத்தை
            நிரப்பவும். நாங்கள் விரைவில் உங்களை தொடர்பு கொள்வோம்.
          </p>

          {/* CONTACT FORM */}
          <div className="contact-form-wrapper">
            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              {/* NAME */}
              <div className="contact-field">
                <label htmlFor="name">
                  பெயர் <span>*</span>
                  <span className="contact-english">
                    / Name
                  </span>
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                />
              </div>

              {/* EMAIL */}
              <div className="contact-field">
                <label htmlFor="email">
                  மின்னஞ்சல் <span>*</span>
                  <span className="contact-english">
                    / Email
                  </span>
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                />
              </div>

              {/* MESSAGE */}
              <div className="contact-field">
                <label htmlFor="message">
                  செய்தி <span>*</span>
                  <span className="contact-english">
                    / Message
                  </span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  required
                />
              </div>

              {/* SEND */}
              <button
                type="submit"
                className="contact-submit"
              >
                அனுப்பவும் — Send
              </button>

            </form>
          </div>

          {/* FACEBOOK — BELOW THE FORM */}
         <div className="contact-facebook text-center">
  <p className="contact-facebook-label">
    Or connect on
  </p>

  <a
    href="https://www.facebook.com/%E0%AE%A4%E0%AE%AE%E0%AE%BF%E0%AE%B4%E0%AE%A3%E0%AF%8D%E0%AE%A3%E0%AE%B2%E0%AF%8D-1268233926536749/"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-facebook-button inline-flex"
  >
    Facebook →
  </a>
</div>

        </div>
      </section>
    </main>
  );
}