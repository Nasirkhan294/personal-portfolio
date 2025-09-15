import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { useTheme } from "../../Context";
import { Col, Row } from "react-bootstrap";

const Contact = () => {
  const { state } = useTheme();
  const { darkMode } = state;
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
    <Row
      className="contact-form gap-4 gap-lg-0"
      id="contact"
      style={{marginTop: "8rem"}}
    >
      {/* left side */}
      <Col lg={6} className="px-0">
        <div className="text-center text-lg-start">
          <h2
            className="fw-bold"
            style={{ color: darkMode ? "white" : "", fontSize: "2.5rem" }}
          >
            Get in Touch
          </h2>
          <h3
            className="fw-bold"
            style={{ color: "var(--orange)", fontSize: "2rem" }}
          >
            Contact me
          </h3>
          <div
            className="blur c-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </Col>

      {/* right side form */}
      <Col lg={6} className="position-relative">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="d-flex flex-column align-items-center gap-4 px-3"
        >
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
          <textarea name="message" className="user" placeholder="Message" style={{height: "6rem"}} />
          <input
            type="submit"
            value={loading ? "Sending..." : "Send"}
            className="button mb-5"
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
      </Col>
    </Row>
  );
};

export default Contact;
