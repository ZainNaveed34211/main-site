import { useEffect } from "react";

const TARGET = "https://contact.kluzar.com/";

export default function Contact() {
  useEffect(() => {
    window.location.replace(TARGET);
  }, []);

  return (
    <div>
      <meta httpEquiv="refresh" content={`0; url=${TARGET}`} />
      <link rel="canonical" href={TARGET} />
      <main>
        <h1>Redirecting to Contact Kluzar</h1>
        <p>
          The Kluzar contact page has moved. You are being redirected to the contact
          subdomain, where you can send an enquiry about a website, a dashboard, or
          ongoing management for your business.
        </p>
        <p>
          If you are not redirected automatically, please visit{" "}
          <a href={TARGET}>contact.kluzar.com</a>. You can also write directly to{" "}
          <a href="mailto:info@kluzar.com">info@kluzar.com</a>, or visit{" "}
          <a href="https://support.kluzar.com/">support.kluzar.com</a> for help with
          an existing service.
        </p>
      </main>
    </div>
  );
}
