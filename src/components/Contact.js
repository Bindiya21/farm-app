import React from "react";

const Contact = () => {
  return (
    <main>
      <div className="contact">
      <h1>Contact Us</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
    </main>
  );
};

export default Contact;