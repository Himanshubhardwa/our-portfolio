import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: 'success', message: 'Message sent successfully (Offline Mode).' });
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <section className="contact section" id="contact">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Let’s Connect</span>
                    <h2 className="section-title">Have a project, idea, or question? Feel free to reach out.</h2>
                    <div className="section-line"></div>
                </div>
                <div className="contact-grid">
                    <div className="contact-info">
                        <h3>Let’s Talk About Data & Projects</h3>
                        <p>Click here email and phone number to get in touch.</p>
                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div>
                                    <span className="contact-label">Email</span>
                                    <a href="mailto:bhardwajhimanshu7686@gmail.com">bhardwajhimanshu7686@gmail.com</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div>
                                    <span className="contact-label">Phone</span>
                                    <a href="tel:+917668214746">+91 7668214746</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <span className="contact-label">Location</span>
                                    <span>Jaipur, Rajasthan</span>
                                </div>
                            </div>
                        </div>
                        <div className="social-links">
                            <a href="https://github.com/himanshubhardwa" className="social-link"><i className="fab fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/himanshu-bhardwaj7668/" className="social-link"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
                        {status && (
                            <div style={{ padding: '10px', marginBottom: '15px', borderRadius: '5px', backgroundColor: status.type === 'success' ? '#d4edda' : '#f8d7da', color: status.type === 'success' ? '#155724' : '#721c24' }}>
                                {status.message}
                            </div>
                        )}
                        <div className="form-row">
                            <div className="form-group">
                                <input type="text" name="name" id="contactName" required placeholder=" " value={formData.name} onChange={handleChange} />
                                <label htmlFor="contactName">Your Name</label>
                                <span className="form-icon"><i className="fas fa-user"></i></span>
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" id="contactEmail" required placeholder=" " value={formData.email} onChange={handleChange} />
                                <label htmlFor="contactEmail">Your Email</label>
                                <span className="form-icon"><i className="fas fa-envelope"></i></span>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="text" name="subject" id="contactSubject" required placeholder=" " value={formData.subject} onChange={handleChange} />
                            <label htmlFor="contactSubject">Subject</label>
                            <span className="form-icon"><i className="fas fa-tag"></i></span>
                        </div>
                        <div className="form-group">
                            <textarea name="message" id="contactMessage" rows="5" required placeholder=" " value={formData.message} onChange={handleChange}></textarea>
                            <label htmlFor="contactMessage">Your Message</label>
                            <span className="form-icon"><i className="fas fa-comment-dots"></i></span>
                        </div>
                        <button type="submit" className="btn btn-primary btn-full">
                            <span>Send Message</span>
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
