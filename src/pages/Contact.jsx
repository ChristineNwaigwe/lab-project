// src/pages/Contact.jsx
import "./Contact.css";
import "./Dashboard.css"; // Make sure this is the correct path

export default function Contact() {
  return (
    <div className="main-content">
      <div className="contact-container">
        <h2 className="contact-heading">Contact the Lab</h2>

        <div className="contact-content">
          <div className="contact-info">
            <p><strong>Address:</strong><br />4559 Scott Ave<br />St. Louis, MO 63110<br />USA</p>
            <p><strong>Email:</strong> <a href="mailto:sayaka@wustl.edu">sayaka@wustl.edu</a></p>
            <p><strong>Phone:</strong> (314) 362-3142</p>
          </div>

          <div className="map-embed">
            <iframe
              title="Lab Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.3601057430367!2d-90.26378778465046!3d38.633476379613105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8b5b268477b37%3A0xf31ae9cdccf60c86!2s4559%20Scott%20Ave%2C%20St.%20Louis%2C%20MO%2063110!5e0!3m2!1sen!2sus!4v1717000000000!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
