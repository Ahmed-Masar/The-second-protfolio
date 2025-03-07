import "./contact.css";
import { useState } from "react";
import Lottie from "lottie-react";
import doneAnmiation from "../..//aniamtion/done.json";
import contactAnmiation from "../..//aniamtion/contact.json";
const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending");
    const formData = new FormData(event.target);

    formData.append("access_key", "92ceabfc-8359-4ad1-9717-f3f8059119d4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="contact-us" id="contact">
      <h1 className="title">
        <span className="icon-envelope" />
        Contact Us
      </h1>

      <p className="sub-title">
        Your vision deserves to be built with passion — Let’s bring it to life.
      </p>

      <div className="flex  ">
        <form className="" onSubmit={onSubmit}>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
              style={{ textTransform: "none" }}
            />
          </div>

          <div className="flex" style={{ marginTop: "14px" }}>
            <label htmlFor="message">Your Message</label>
            <textarea
              required
              name="message"
              id="message"
              style={{ textTransform: "none" }}
            ></textarea>
          </div>

          <button className="submit">Submit</button>
          {result === "Successfully" ? (
            <div className="done">
              <Lottie
                loop={false}
                animationData={doneAnmiation}
                className="lottie-done"
                style={{ height: 37 }}
              />
              <span>your message has been sent Successfully</span>
            </div>
          ) : (
            result
          )}
        </form>

        <div className="animation">
          <Lottie
            animationData={contactAnmiation}
            className="contact-aniamtion"
            style={{ height: 355 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
