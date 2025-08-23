import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const formEl = form.current;
    const name = formEl.user_name.value.trim();
    const email = formEl.user_email.value.trim();
    const message = formEl.message.value.trim();

    // 🔴 Validation
    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      setDone(false);
      return;
    }

    setLoading(true);
    setError();
    setDone(false);

    emailjs
      .sendForm(
        "service_fkz9vxl", // service ID
        "template_akktkyi", // template ID
        formEl,
        "ujq_G150IphgMc4I-" // public key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setDone(true);
          setError("");
          formEl.reset(); // ✅ clear form after success
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          setError("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>

      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input
            type="submit"
            value={loading ? "Sending..." : "Send"}
            className="button"
            disabled={loading}
          />

          {/* feedback messages */}
          {done && (
            <span style={{ color: "green" }}>✅ Thanks for contacting me!</span>
          )}
          {error && <span style={{ color: "red" }}>⚠️ {error}</span>}

          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
