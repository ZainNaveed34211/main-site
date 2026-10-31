import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import Reveal from "../components/Reveal.jsx";
import FaqList from "../components/FaqList.jsx";
import { useReveal } from "../lib/reveal.js";

const faqItems = [
  {
    q: "What services does Kluzar offer?",
    a: "Kluzar is a web-focused studio. It designs and builds business websites, company dashboards, web applications and interactive digital experiences, and offers ongoing services including SEO, social management and shorts growth, reputation analysis, website security monitoring, accessibility checking and performance monitoring. Kluzar does not currently offer mobile app development."
  },
  {
    q: "How does a website project start?",
    a: "It starts with an enquiry through the contact page. You describe your business, your goals and what you need, including your current website address if you have one. The Kluzar team reviews the enquiry and replies to discuss scope. Website builds are quoted individually, because scope differs from one business to another, so no fixed website build price is published."
  },
  {
    q: "What happens after I send an enquiry?",
    a: "Your enquiry is reviewed by the Kluzar team, who reply to the email address you provided. If anything in your project description needs clarification, that is discussed before any work or quote is finalised. Your enquiry details are used only for reviewing and replying to your enquiry."
  },
  {
    q: "What is the Company Management Dashboard?",
    a: "The Company Management Dashboard is Kluzar's business management product at dash.kluzar.com. It is designed for managing a company: employees, departments, projects, tasks, calendars, documents and reports in one place. It is a subscription product, and its availability follows the plan shown on the payments subdomain."
  },
  {
    q: "How do subscriptions and payments work?",
    a: "Subscriptions are handled on the payments subdomain at payments.kluzar.com. The homepage pricing section is only a summary: Starter is free, Growth is $10 and Max is $25, with no billing period shown on this site. Plan details, checkout and subscription processing all happen on the payments subdomain, which is the source for the actual purchase process."
  },
  {
    q: "Can Kluzar manage my website after launch?",
    a: "Yes. Beyond building a website, Kluzar offers ongoing management services such as SEO, social management and shorts growth, reputation analysis, website security monitoring and performance monitoring. Which of these apply to your site depends on your plan, as shown on the payments subdomain."
  },
  {
    q: "How do I get support?",
    a: "For support, visit support.kluzar.com, use the contact page, or email info@kluzar.com. Support requests are reviewed by the Kluzar team, who reply to the address you provide. Response times are not promised on this page; anything time-sensitive should be described clearly in your message."
  },
  {
    q: "How does Kluzar approach security?",
    a: "Kluzar builds with a security-conscious approach: inputs are validated before use, server-side checks back up what the interface shows, access is verified before protected data is served, and entitlements are checked on the server rather than trusted from the browser. No security certification is claimed, and project-specific security questions are discussed directly with the client."
  },
  {
    q: "Do I need a Kluzar account?",
    a: "Not to send an enquiry: the contact form works without an account. A Kluzar account at accounts.kluzar.com is used for Kluzar services such as the dashboard. If you already have an account, you can sign in from the accounts subdomain; if you do not, nothing on this site requires you to create one first."
  },
  {
    q: "Where is Kluzar based, and who can it work with?",
    a: "Kluzar is based in Sialkot, Pakistan, and serves businesses worldwide. Work is delivered remotely, and enquiries from any country can be sent through the contact page."
  }
];

export default function Faq() {
  const ref = useReveal();
  return (
    <div ref={ref}>
      <script type="application/ld+json" src="/faq-ld.json" />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <section className="page-hero">
          <div className="wrap">
            <Reveal>
              <span className="pill">FAQ</span>
              <h1>Frequently asked questions</h1>
              <p>
                Detailed answers about Kluzar services, website development, subscriptions,
                payments, support, security and accounts.
              </p>
            </Reveal>
          </div>
        </section>
        <section className="section">
          <div className="wrap">
            <Reveal>
              <FaqList items={faqItems} />
            </Reveal>
            <Reveal>
              <div className="cta-actions">
                <a className="btn btn-dark" href="/contact/">
                  Ask something else
                </a>
                <a className="btn btn-outline" href="mailto:info@kluzar.com">
                  info@kluzar.com
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
