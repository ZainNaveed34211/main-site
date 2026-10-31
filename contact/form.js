const ACCESS_KEY = "__WEB3FORMS_ACCESS_KEY__";
const form = document.getElementById("contact-form");
const msg = document.getElementById("form-msg");
const btn = document.getElementById("submit-btn");
function setMsg(text, ok) {
  msg.textContent = text;
  msg.className = "msg" + (ok === true ? " ok" : ok === false ? " err" : "");
}
function validEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}
function normalizeUrl(v) {
  if (!v) return "";
  if (/^[a-z][a-z0-9+.-]*:\/\//i.test(v)) return v;
  return "https://" + v;
}
function validUrl(v) {
  if (!v) return true;
  try {
    const u = new URL(normalizeUrl(v));
    return (u.protocol === "http:" || u.protocol === "https:") && u.hostname.indexOf(".") !== -1;
  } catch (e) {
    return false;
  }
}
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const website = normalizeUrl(document.getElementById("website").value.trim());
  const message = document.getElementById("message").value.trim();
  if (!name) { setMsg("Please enter your name.", false); return; }
  if (!validEmail(email)) { setMsg("Please enter a valid email address.", false); return; }
  if (!validUrl(website)) { setMsg("Please enter a valid website address, or leave it blank.", false); return; }
  if (!message) { setMsg("Please tell us about your project.", false); return; }
  if (ACCESS_KEY === "__WEB3FORMS_ACCESS_KEY__") {
    setMsg("The contact form is not configured yet. Please email us at info@kluzar.com instead.", false);
    return;
  }
  btn.disabled = true;
  btn.textContent = "Sending...";
  setMsg("", null);
  const data = new FormData();
  data.append("access_key", ACCESS_KEY);
  data.append("name", name);
  data.append("company", document.getElementById("company").value.trim());
  data.append("email", email);
  data.append("website", website);
  data.append("service", document.getElementById("service").value);
  data.append("message", message);
  data.append("subject", "New enquiry from Kluzar website");
  data.append("from_name", "Kluzar Website");
  data.append("replyto", email);
  data.append("botcheck", document.querySelector('input[name="botcheck"]').checked ? "1" : "");
  try {
    const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
    const out = await res.json();
    if (res.ok && out && out.success) {
      setMsg("Thank you. Your enquiry has been sent. The Kluzar team will reply to you.", true);
      form.reset();
    } else {
      setMsg("Sorry, your enquiry could not be sent. Please try again or email us at info@kluzar.com.", false);
    }
  } catch (err) {
    setMsg("Sorry, your enquiry could not be sent. Please check your connection and try again, or email us at info@kluzar.com.", false);
  }
  btn.disabled = false;
  btn.textContent = "Send enquiry";
});
