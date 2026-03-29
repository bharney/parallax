import React, { useState, FormEvent } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
  };

  return (
    <section className="no-padding-top" id="Questions">
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="margin-top-0 text-primary wow flipInX" data-wow-delay="0.2s">Contact</h2>
          <hr className="primary" />
          <p className="mb-2">email: bharney0@gmail.com</p>
          <h3 className="text-center mb-4">Have questions for Brian?</h3>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <form onSubmit={handleSubmit} className="row g-3 text-start">
            <div className="col-12 col-md-4">
              <label htmlFor="contact-name" className="form-label">Name</label>
              <input
                id="contact-name"
                required
                type="text"
                className="form-control"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="col-12 col-md-4">
              <label htmlFor="contact-email" className="form-label">Email</label>
              <input
                id="contact-email"
                type="email"
                className="form-control"
                placeholder="you@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="col-12 col-md-4">
              <label htmlFor="contact-phone" className="form-label">Phone</label>
              <input
                id="contact-phone"
                type="text"
                className="form-control"
                placeholder="(555) 123-4567"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="col-12">
              <label htmlFor="contact-message" className="form-label">Message</label>
              <textarea
                id="contact-message"
                className="form-control"
                rows={8}
                placeholder="Your message here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <div className="col-12 col-md-4 ms-md-auto">
              <button className="btn btn-success btn-lg w-100" type="submit">
                <span>Send</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
