export default function WhatsAppButton() {
  return (
    <a
      className="wa-float"
      href="https://wa.me/923285049744?text=Hello%20Kluzar%2C%20I%20would%20like%20to%20discuss%20your%20services."
      aria-label="Chat with Kluzar on WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm5.2 13.9c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5s.8 1.9.8 2c.1.1.1.3 0 .5l-.4.6c-.1.2-.3.4-.1.7.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1l.8-.9c.2-.3.4-.2.7-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.2z" />
      </svg>
      <span>Chat on WhatsApp</span>
    </a>
  );
}
