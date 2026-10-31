import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import Reveal from "../components/Reveal.jsx";
import FaqList from "../components/FaqList.jsx";
import { useReveal } from "../lib/reveal.js";

const PAYMENTS_URL = "https://payments.kluzar.com/?return=https://kluzar.com/";

const services = [
  {
    pill: "Design",
    title: "UI/UX Design",
    image: "/assets/images/service-uiux.jpg",
    alt: "User experience and interface design work",
    points: ["User experience and interface design", "User flows and interface systems"],
    link: "/contact/",
    linkLabel: "Discuss a design project"
  },
  {
    pill: "Websites",
    title: "Website Design & Development",
    image: "/assets/images/service-website.jpg",
    alt: "Professional business website on screen",
    points: ["Professional business websites", "Responsive website development"],
    link: "/contact/",
    linkLabel: "Start a website project"
  },
  {
    pill: "Dashboards",
    title: "Company Dashboards",
    image: "/assets/images/service-dashboard.jpg",
    alt: "Business management dashboard interface",
    points: ["Business management dashboards", "Employee and company management systems"],
    link: "https://dash.kluzar.com",
    linkLabel: "Open the dashboard"
  },
  {
    pill: "Interactive",
    title: "3D & Digital Experiences",
    image: "/assets/images/service-3d.png",
    alt: "Interactive three-dimensional digital experience",
    points: ["Appropriate 3D web experiences", "Interactive visual experiences"],
    link: "/contact/",
    linkLabel: "Ask about an experience"
  },
  {
    pill: "Applications",
    title: "Web Applications",
    image: "/assets/images/service-webapp.jpg",
    alt: "Custom web application interface",
    points: ["Custom web applications", "Business-focused digital tools"],
    link: "/contact/",
    linkLabel: "Discuss a web application"
  }
];

const marqueeWords = [
  "Business websites",
  "Company dashboards",
  "Web applications",
  "Search visibility",
  "Social visibility",
  "Review analysis",
  "AI-assisted management"
];

const homeFaq = [
  {
    q: "What does Kluzar build?",
    a: "Kluzar builds websites, company dashboards, web applications and business-focused digital tools for companies worldwide. Every project is planned around the business it serves, not around a fixed template."
  },
  {
    q: "How does website pricing work?",
    a: "Website builds are priced on requirements: you describe the project through the contact page, and Kluzar prepares a custom quote for it. No fixed website build price is published, because scope differs from one business to another."
  },
  {
    q: "What do the subscription plans cover?",
    a: "Starter covers the basics, including limited SEO, basic website security and limited reputation analysis. Growth adds the company management dashboard, social management and shorts growth, and unlimited SEO, security and reputation analysis. Max adds uptime monitoring, a more focused social and shorts strategy, and unlimited accessibility and performance monitoring. Full plan details and subscription processing live on the payments subdomain."
  },
  {
    q: "How do I get support?",
    a: "Use the contact page to send an enquiry, or email info@kluzar.com directly. Support requests are reviewed by the Kluzar team, who reply to the address you provide."
  },
  {
    q: "How does Kluzar approach security?",
    a: "Kluzar builds with a security-conscious approach: inputs are validated, server-side checks back up what the interface shows, and access is verified before protected data is served. No security certification is claimed, and the specifics of a project are discussed with the client directly."
  },
  {
    q: "Do I need a Kluzar account to enquire?",
    a: "No. The contact form works without an account. A Kluzar account at accounts.kluzar.com is used for Kluzar services such as the dashboard, and is separate from sending a website enquiry."
  }
];

const plans = [
  {
    name: "Starter",
    amount: "FREE",
    features: [
      "Limited SEO",
      "Basic Website Security",
      "Limited Reputation Analysis",
      "Very low-cost website changes for Kluzar-built websites"
    ]
  },
  {
    name: "Growth",
    amount: "$10",
    featured: true,
    features: [
      "Unlimited SEO",
      "Unlimited Website Security",
      "Company Management Dashboard",
      "Fast Support",
      "Social Management & Shorts Growth",
      "Unlimited Reputation Analysis",
      "Free website changes with a monthly limit for Kluzar-built websites",
      "Advanced Accessibility Checker",
      "Advanced Performance Monitor"
    ]
  },
  {
    name: "Max",
    amount: "$25",
    features: [
      "Everything included in Growth",
      "Uptime Monitoring",
      "More focused and personalized Social & Shorts Strategy",
      "Unlimited website changes for Kluzar-built websites, subject to fair-use safeguards",
      "Unlimited Accessibility Checker",
      "Unlimited Performance Monitor"
    ]
  }
];

export default function Home() {
  const ref = useReveal();
  return (
    <div ref={ref}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <section className="hero">
          <div className="wrap">
            <Reveal>
              <span className="hero-eyebrow">Kluzar — Digital products for business</span>
              <h1>
                Crafting
                <br />
                Digital Products
              </h1>
              <p className="hero-sub">
                Kluzar creates digital products, websites and business-focused digital solutions
                for companies worldwide, designed to look premium and work hard for the business
                behind them.
              </p>
              <div className="hero-cta">
                <a className="btn btn-dark" href="/contact/">
                  Get Your Website
                </a>
                <a className="btn btn-outline" href="/#services">
                  Explore services
                </a>
              </div>
            </Reveal>
            <Reveal>
              <div className="hero-media">
                <img
                  src="/assets/images/hero.jpg"
                  alt="A premium Kluzar website presented on screen"
                  width="1024"
                  height="472"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="marquee-band" aria-label="What Kluzar helps businesses create">
          <div className="wrap">
            <Reveal>
              <h2>Digital foundations for ambitious businesses</h2>
              <p>
                Kluzar helps businesses build the digital pieces they run on: a website that
                presents them well, dashboards that organise their work, and ongoing visibility
                through search, social content and reputation care.
              </p>
            </Reveal>
          </div>
          <div className="marquee" aria-hidden="true">
            <div className="marquee-track">
              {marqueeWords.concat(marqueeWords).map((word, index) => (
                <span className="marquee-item" key={index}>
                  {word}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="wrap">
            <Reveal>
              <div className="section-head">
                <span className="pill">Services</span>
                <h2>What Kluzar can build for you</h2>
                <p>
                  Web-focused services for businesses that need a strong digital presence and
                  tools that support their daily work.
                </p>
              </div>
            </Reveal>
            <div className="services-grid">
              {services.map((service) => (
                <Reveal key={service.title} className="service-card-wrap">
                  <a className="service-card" href={service.link}>
                    <img
                      src={service.image}
                      alt={service.alt}
                      width="640"
                      height="427"
                      loading="lazy"
                    />
                    <div className="service-card-body">
                      <span>
                        <span className="pill">{service.pill}</span>
                      </span>
                      <h3>{service.title}</h3>
                      <ul>
                        {service.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                      <span className="service-link">{service.linkLabel} →</span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap split">
            <Reveal>
              <img
                src="/assets/images/why.jpg"
                alt="Modern, responsive website design work"
                width="824"
                height="547"
                loading="lazy"
              />
            </Reveal>
            <Reveal>
              <h2>Why brands choose us</h2>
              <p>
                Kluzar combines design and development so a website is more than a good-looking
                page: it presents the business clearly, loads fast, and supports real enquiries
                and customers.
              </p>
              <ul className="check-list">
                <li>
                  <span>✓</span>Business-focused digital solutions, planned around your goals
                </li>
                <li>
                  <span>✓</span>Thoughtful design and user experience, built for visitors
                </li>
                <li>
                  <span>✓</span>Reliable website development, with practical technology choices
                </li>
                <li>
                  <span>✓</span>Security-conscious implementation on every project
                </li>
                <li>
                  <span>✓</span>Worldwide service availability, from Sialkot, Pakistan
                </li>
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <Reveal>
              <div className="section-head">
                <span className="pill">How it works</span>
                <h2>From an idea to a website that works</h2>
                <p>
                  A straightforward process: you describe the business and the goal, and Kluzar
                  designs, builds and launches the result with you.
                </p>
              </div>
            </Reveal>
            <div className="story-row">
              <Reveal>
                <article className="story-card">
                  <img
                    src="/assets/images/story-1.png"
                    alt="Website design presentation"
                    width="1356"
                    height="840"
                    loading="lazy"
                  />
                  <div className="story-card-body">
                    <h3>Premium websites designed to be credible</h3>
                    <p>
                      Clean, fast and strategic websites that help a business attract attention,
                      explain its value and turn visitors into enquiries.
                    </p>
                  </div>
                </article>
              </Reveal>
              <Reveal>
                <article className="story-card">
                  <img
                    src="/assets/images/story-2.png"
                    alt="Dashboard and website presentation"
                    width="1358"
                    height="900"
                    loading="lazy"
                  />
                  <div className="story-card-body">
                    <h3>Dashboards that organise the business</h3>
                    <p>
                      Company dashboards bring employees, work and customers into one clear
                      place, so daily management stays visible and under control.
                    </p>
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <Reveal>
              <div className="section-head">
                <span className="pill">Process</span>
                <h2>Four steps, no guesswork</h2>
              </div>
            </Reveal>
            <div className="steps">
              <Reveal>
                <div className="step">
                  <div className="step-num">01</div>
                  <h3>Share your idea</h3>
                  <p>
                    Tell Kluzar about your business, your goals and the website or tool you need.
                  </p>
                </div>
              </Reveal>
              <Reveal>
                <div className="step">
                  <div className="step-num">02</div>
                  <h3>Design</h3>
                  <p>
                    The layout, content structure and experience are designed around your
                    customers.
                  </p>
                </div>
              </Reveal>
              <Reveal>
                <div className="step">
                  <div className="step-num">03</div>
                  <h3>Build</h3>
                  <p>
                    The design is developed into a responsive website or application, ready to
                    review.
                  </p>
                </div>
              </Reveal>
              <Reveal>
                <div className="step">
                  <div className="step-num">04</div>
                  <h3>Launch and manage</h3>
                  <p>
                    After launch, Kluzar can keep managing the site with ongoing services such as
                    SEO and social visibility.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section" id="pricing">
          <div className="wrap">
            <Reveal>
              <div className="section-head">
                <span className="pill">Pricing</span>
                <h2>Pick a plan and get started</h2>
                <p>
                  A clear summary of the plans. The payment subdomain handles plan details and
                  subscription processing.
                </p>
              </div>
            </Reveal>
            <div className="pricing-grid">
              {plans.map((plan) => (
                <Reveal key={plan.name}>
                  <article className={plan.featured ? "price-card featured" : "price-card"}>
                    <span className="price-name">{plan.name}</span>
                    <div className="price-amount">{plan.amount}</div>
                    <ul className="price-features">
                      {plan.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                    <a className={plan.featured ? "btn btn-violet" : "btn btn-dark"} href={PAYMENTS_URL}>
                      Choose {plan.name}
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
            <p className="price-note">
              Plan details and subscription processing are handled on the payments subdomain.
            </p>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="wrap">
            <Reveal>
              <div className="section-head">
                <span className="pill">FAQ</span>
                <h2>Frequently asked questions</h2>
                <p>
                  Short answers to common questions. More detail is on the dedicated FAQ page.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <FaqList items={homeFaq} />
              <div className="cta-actions">
                <a className="btn btn-outline" href="/faq/">
                  Read the full FAQ
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <Reveal>
              <div className="cta-band">
                <h2>We’re excited to collaborate with you.</h2>
                <p>
                  Tell Kluzar about your business and the website you need, and the team will
                  review your enquiry and get back to you.
                </p>
                <div className="cta-actions">
                  <a className="btn btn-violet" href="/contact/">
                    Contact us
                  </a>
                  <a className="btn btn-light" href="mailto:info@kluzar.com">
                    info@kluzar.com
                  </a>
                </div>
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
