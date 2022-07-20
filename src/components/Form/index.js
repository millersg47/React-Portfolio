import React, { useState } from "react";
import validateEmail from "./utils/helpers";
import "./style/form.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    setName("");
    setMessage("");
    setEmail("");
  };

  const handleError = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name" && inputValue.length === 0) {
      setError("Name is too short");
    } else if (inputType === "message" && inputValue.length === 0) {
      setError("No message included");
    } else if (!validateEmail(email)) {
      setError("Email is invalid");
    } else {
      setError("");
    }
  };

  return (
    <div className="contact-page">
      <h1 className="contact-header">Get In Touch</h1>
      <form className="form custom-form">
        <input
          className="custom-input"
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={handleError}
          type="email"
          placeholder="email"
        />
        <input
          className="custom-input"
          value={name}
          name="name"
          onChange={handleInputChange}
          onBlur={handleError}
          type="text"
          placeholder="name"
        />
        <input
          className="custom-input"
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={handleError}
          type="text"
          placeholder="drop a line"
        />
        <button
          className="custom-button"
          disabled={error.length}
          type="button"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
        {error.length ? <p>{error}</p> : null}
      </form>
    </div>
  );
}

export default Contact;
