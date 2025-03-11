import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactSection.scss';

const ContactSection: React.FC = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center mt-5">
            <div className="row w-100" style={{ maxWidth: '1200px' }}>
                
                <div className="col-md-6 p-4 bg-transparent rounded-2xl shadow-lg">
                    <h2 className="text-center mb-4">Contact Information</h2>
                    <p className="text-center mb-4">
                    Building real solutions starts with mock ideas. Reach out — let’s refine, test, and create together.
                    </p>
                    <ul className="list-unstyled">
                        <li className="d-flex align-items-center mb-3">
                            <span className="me-3 fs-4">📍</span>
                            Dindigul - 624 002
                        </li>
                        <li className="d-flex align-items-center mb-3">
                            <span className="me-3 fs-4">📞</span>
                            +91 78069 24524
                        </li>
                        <li className="d-flex align-items-center mb-3">
                            <span className="me-3 fs-4">🌐</span>
                            customer@stublab.com
                        </li>
                    </ul>
                </div>

                <div className="col-md-6 p-4 bg-transparent rounded-2xl shadow-lg">
                    <h2 className="text-center mb-4">Reach Out to Us</h2>
                    <p className="text-center mb-4">
                    Communication is the bridge to innovation — we’d love to hear from you.
                    </p>
                    <form className="d-grid gap-3">
                        <div className="row">
                            <div className="col-md-6">
                                <input type="text" placeholder="First Name" className="form-control" />
                            </div>
                            <div className="col-md-6">
                                <input type="text" placeholder="Last Name" className="form-control" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <input type="text" placeholder="Phone Number" className="form-control" />
                            </div>
                            <div className="col-md-6">
                                <input type="email" placeholder="Email" className="form-control" />
                            </div>
                        </div>
                        <textarea placeholder="Message" rows={5} className="form-control"></textarea>
                        <button
                            type="submit"
                            className="btn btn-dark w-100">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
