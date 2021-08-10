import React from "react";
import "./contact.css";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

function Contact() {
  return (
    <div className="contact-wrapper " id="contact">
      <h1 className="text-center">Get in touch with us</h1>
      <PhoneIcon className="contact-icon" />
      <MailOutlineIcon className="contact-icon" />
      <div className="contact">
        <div className="contact-form" id="contact">
          <input type="text" placeholder="Enter your name" />
          <input type="text" placeholder="Enter your email" />
          <textarea placeholder="Write your message please"></textarea>
          <button>Submit</button>
        </div>
        <div className="contact-info" id="contact">
          <h1>Contact us</h1>
          <h2>1(809)456-6544</h2>
          <h2>1(829)931-6544</h2>
        </div>
      </div>
    </div>
  );
}

export default Contact;
