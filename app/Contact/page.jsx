"use client";

import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      phone,
      first: firstName,
      last: lastName,
      message,
    };
    console.log(data);
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto w-11/12 ">
      <form className="container" onSubmit={handleSubmit}>
        <h1 className="text-red-500">Contact us</h1>
        <p className="text-white">
          You can send us your wishes and proposals, or contact us for another
          issue related to the “Bildilçin” project by using the form below.
        </p>

        <div className="py-5 name">
          <div>
            <input
              className="w-full p-3.5 rounded-md"
              id="frm-first"
              type="text"
              name="first"
              autoComplete="given-name"
              required
              value={firstName}
              placeholder="Your name and surname *"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
        </div>

        <div className="py-5 email">
          <input
            className="w-full p-3.5 rounded-md"
            id="frm-email"
            type="email"
            name="email"
            autoComplete="email"
            required
            value={email}
            placeholder="Your e-mail address *"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="py-5 email">
          <input
            className="w-full p-3.5 rounded-md"
            id="frm-email"
            type="email"
            name="email"
            autoComplete="email"
            required
            value={email}
            placeholder="Institution, which you represent"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="py-5 message">
          <textarea
            className="w-full h-44 rounded-md"
            id="frm-message"
            rows="6"
            name="message"
            value={message}
            placeholder="Your message *"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <p className="text-red-500">
          The mandatory fields are marked with the “ * ” symbol.
        </p>

        <div className="py-5 button flex justify-end" >
          <button className="bg-red-500 py-2 px-7 rounded-md" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
