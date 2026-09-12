"use client";

import React, { useState } from "react";
import "./contact.css";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    const form = e.currentTarget;
    const nameInput = form.elements.namedItem("name") as HTMLInputElement;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    const messageInput = form.elements.namedItem("message") as HTMLTextAreaElement;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !email || !message) {
      setStatusMessage({
        type: "error",
        text: "Unable to send your message. Please fill in all required fields.",
      });
      return;
    }

    setLoading(true);
    setStatusMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.success) {
        setStatusMessage({
          type: "success",
          text: data.message || "Your message has been sent successfully.",
        });
        form.reset();
      } else {
        setStatusMessage({
          type: "error",
          text: data?.error || "Unable to send your message.",
        });
      }
    } catch {
      setStatusMessage({
        type: "error",
        text: "Unable to send your message.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="contact-page relative overflow-hidden">
      <section className="contact-section relative">
        <div className="parchment-texture-layer" />
        <div className="contact-container relative z-10">

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

              {/* STATUS FEEDBACK MESSAGE */}
              {statusMessage && (
                <div
                  role="alert"
                  className={`contact-status-message ${
                    statusMessage.type === "success"
                      ? "contact-status-success"
                      : "contact-status-error"
                  }`}
                >
                  {statusMessage.text}
                </div>
              )}

              {/* SEND */}
              <button
                type="submit"
                className="contact-submit"
                disabled={loading}
              >
                {loading ? "அனுப்பப்படுகிறது... — Sending..." : "அனுப்பவும் — Send"}
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