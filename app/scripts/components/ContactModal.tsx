import React, { useState } from 'react';

interface ContactModalProps {
  show: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ show, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  if (!show) return null;

  const handleSend = (): void => {
    onClose();
  };

  return (
    <div className="modal fade show d-block" tabIndex={-1} role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title text-center w-100" id="modal-title">Contact me</h2>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className="modal-body" id="modal-body">
            <div className="modal-profile-img">
              <img src="/images/CircleHead.png" alt="Brian Harney" />
            </div>
            <section className="no-padding" id="contact">
              <div className="text-center">
                <h4>
                  Feel free to contacting me with any questions, full-time opportunities or contract work.<br />
                  <a href="mailto:bharney0@gmail.com">bharney0@gmail.com</a>
                </h4>
              </div>
              <form>
                <div className="form-group">
                  <input
                    required
                    type="text"
                    className="form-control form-group"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <input
                    type="email"
                    className="form-control form-group"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  <input
                    type="text"
                    className="form-control form-group"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  <textarea
                    style={{ width: '100%' }}
                    className="form-control form-group"
                    rows={4}
                    placeholder="Your message here.."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
              </form>
            </section>
          </div>
          <div className="modal-footer">
            <div className="col-xs-offset-2 col-xs-8">
              <button className="btn btn-success btn-lg btn-block center-block" type="button" onClick={handleSend}>
                <span>Send</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
