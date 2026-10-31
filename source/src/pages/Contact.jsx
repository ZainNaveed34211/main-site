import { useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import Reveal from "../components/Reveal.jsx";
import { useReveal } from "../lib/reveal.js";

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "";
const configured = ACCESS_KEY.length > 0;

export default function Contact() {
  const ref = useReveal();
  const [status, setStatus] = useState("");
  const [statusKind, setStatusKind] = useState("info");
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState({});

  async function handleSubmit(event) {
    event.preventDefault();
    if (!configured || sending) return;
    const form = event.target;
    const data = new FormData(form);
    const nextErrors = {};
    const name = (data.get("name") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();
    const website = (data.get("website") || "").toString().trim();
    if (!name) nextErrors.name = "Please enter your name.";
    if (!email) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!message) nextErrors.message = "Please write a few details about your project.";
    if (website) {
      try {
        const parsed = new URL(website);
        if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
          nextErrors.website = "Please enter a valid website address starting with http or https.";
        }
      } catch {
        nextErrors.website = "Please enter a valid website address.";
      }
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatusKind("error");
      setStatus("Please check the highlighted fields and try again.");
      return;
    }
    data.append("access_key", ACCESS_KEY);
    data.append("subject", "New enquiry from Kluzar website");
    data.append("from_name", "Kluzar Website");
    data.append("replyto", email);
    setSending(true);
    setStatusKind("info");
    setStatus("Sending...");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data
      });
      const result = await response.json();
      if (result && result.success) {
        setStatusKind("success");
        setStatus(
          "Thank you. Your enquiry has been sent. The Kluzar team will review it and reply to your email address."
        );
        form.reset();
        setErrors({});
      } else {
        setStatusKind("error");
        setStatus(
          "Sorry, your enquiry could not be sent right now. Please try again, or email info@kluzar.com directly."
        );
      }
    } catch {
      setStatusKind("error");
      setStatus(
        "Sorry, your enquiry could not be sent right now. Please check your connection and try again, or email info@kluzar.com directly."
      );
    }
    setSending(false);
  }

  return (
    <div ref={ref}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <section className="page-hero">
          <div className="wrap">
            <Reveal>
              <span className="pill">Contact</span>
              <h1>Let’s talk about your project</h1>
              <p>
                Tell Kluzar about your business and the website or tool you need. The team
                reviews every enquiry and replies to the address you provide.
              </p>
            </Reveal>
          </div>
        </section>
        <section className="section">
          <div className="wrap contact-grid">
            <Reveal>
              <div className="contact-info">
                <h2>Contact details</h2>
                <p>
                  Prefer email? Write to the address below, or use the form and the team will
                  get back to you.
                </p>
                <dl>
                  <div>
                    <dt>Email</dt>
                    <dd>
                      <a href="mailto:info@kluzar.com">info@kluzar.com</a>
                    </dd>
                  </div>
                  <div>
                    <dt>Support</dt>
                    <dd>
                      <a href="https://support.kluzar.com">support.kluzar.com</a>
                    </dd>
                  </div>
                  <div>
                    <dt>Location</dt>
                    <dd>Sialkot, Pakistan</dd>
                  </div>
                  <div>
                    <dt>Service availability</dt>
                    <dd>Serving businesses worldwide</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
            <Reveal>
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                {!configured && (
                  <div className="form-status info" role="status">
                    The contact form is not configured yet. Please email info@kluzar.com
                    directly for now.
                  </div>
                )}
                {configured && status && (
                  <div className={"form-status " + statusKind} role="status">
                    {status}
                  </div>
                )}
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" autoComplete="name" required />
                    <span className="field-error">{errors.name || ""}</span>
                  </div>
                  <div className="field">
                    <label htmlFor="company">Business / company name</label>
                    <input id="company" name="company" type="text" autoComplete="organization" />
                    <span className="field-error" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="email">Email address</label>
                    <input id="email" name="email" type="email" autoComplete="email" required />
                    <span className="field-error">{errors.email || ""}</span>
                  </div>
                  <div className="field">
                    <label htmlFor="website">Website URL</label>
                    <input id="website" name="website" type="url" placeholder="https://" />
                    <span className="field-error">{errors.website || ""}</span>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="service">Service of interest</label>
                  <select id="service" name="service" defaultValue="Website Design & Development">
                    <option>Website Design & Development</option>
                    <option>UI/UX Design</option>
                    <option>Company Dashboard</option>
                    <option>3D & Digital Experience</option>
                    <option>Web Application</option>
                    <option>Support</option>
                    <option>Other</option>
                  </select>
                  <span className="field-error" />
                </div>
                <div className="field">
                  <label htmlFor="message">Project details</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Tell us about your business, your goals and what you need."
                  />
                  <span className="field-error">{errors.message || ""}</span>
                </div>
                <div className="hp-field" aria-hidden="true">
                  <label htmlFor="botcheck">Leave this unchecked</label>
                  <input id="botcheck" name="botcheck" type="checkbox" tabIndex="-1" />
                </div>
                <button className="btn btn-dark" type="submit" disabled={!configured || sending}>
                  {sending ? "Sending..." : "Send enquiry"}
                </button>
                <p className="privacy-note">
                  Your enquiry is used only so the Kluzar team can review it and reply to you.
                  Nothing else is collected through this form.
                </p>
              </form>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
