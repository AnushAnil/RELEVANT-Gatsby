import React from "react"
import { FaPaperclip } from "@react-icons/all-files/fa/FaPaperclip"

function ContactCard() {
  return (
    <div className="container contactCardWrapper">
      <div className="contactCardWrapper-contactCard">
        <div className="d-flex flex-column contactCardWrapper-contactCard-form">
          <h1>Contact us to build the right product with the right team</h1>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Company" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Message" />
          <div className="d-flex contactCardWrapper-contactCard-form-file">
            <input type="file" id="attach-file" />
            <label for="attach-file">
              Attach file <FaPaperclip />
            </label>
          </div>
          <small>
            By sending a message you agree with your information being stored by
            us in relation to dealing with your enquiry. Please have a look at
            our Privacy Policy.
          </small>
          <div className="d-flex contactCardWrapper-contactCard-form-NDA">
            <input type="checkbox" id="sign-nda" />
            <small>I'd like to sign an NDA with Relevant Software</small>
          </div>
          <button>Get in touch</button>
        </div>
        <div className="contactCardWrapper-contactCard-content">
          <h1>Top-rated software development company</h1>
          <div className="contactCardWrapper-contactCard-content-feedback">
            <div className="contactCardWrapper-contactCard-content-feedback-card">
              <h1>200+</h1>
              <p>projects delivered</p>
            </div>
            <div className="d-flex flex-column contactCardWrapper-contactCard-content-feedback-card">
              <h1>200+</h1>
              <p>projects delivered</p>
            </div>
            <div className="contactCardWrapper-contactCard-content-feedback-card">
              <h1>200+</h1>
              <p>projects delivered</p>
            </div>
            <div className="contactCardWrapper-contactCard-content-feedback-card">
              <h1>200+</h1>
              <p>projects delivered</p>
            </div>
          </div>
          <div className="contactCardWrapper-contactCard-content-achievements"></div>
        </div>
      </div>
    </div>
  )
}

export default ContactCard
