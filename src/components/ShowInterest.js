import React from 'react';
import './ShowInterest.css'; 
import Footer from './Footer';
function ShowInterest() {
  const clientFormUrl = "https://forms.gle/vDHKJAuXohtzEory8";
  const familyFormUrl = "https://forms.gle/vDHKJAuXohtzEory8";

  return (
    <div>
    <div className="show-interest-container">
      <div className="address-and-contacts">
        <p>Contact Us:</p>
        <p>123 Main Street</p>
        <p>City, Country</p>
        <p>Email: contact@example.com</p>
        <p>Phone: +123-456-7890</p>
      </div>

      <div className="button-container">
        <div className="description">
          <p>Are you a patient seeking our services?</p>
          <button className="client-button" onClick={() => window.location.href = clientFormUrl}>
            Fill out the Patient Form
          </button>
        </div>
        <div className="description">
          <p>Interested in joining our family? Apply here.</p>
          <button className="family-button" onClick={() => window.location.href = familyFormUrl}>
            Apply to Join Us
          </button>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ShowInterest;
