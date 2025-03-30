import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactSection.scss';
import axios from 'axios';

const ContactSection: React.FC = () => {
    const [data, setData] = useState({ firstName: '', lastName: '', email: '', text: '' });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const validateField = (name: string, value: string) => {
        let error = '';
        if (name === 'firstName') {
            if (!value.trim()) {
                error = 'First name is required.';
            } else if (value.length > 30) {
                error = 'First name should not exceed 30 characters.';
            }
        } else if (name === 'email') {
            if (!value.trim()) {
                error = 'Email is required.';
            } else if (!/^[\w-.]+@[\w-]+\.[a-z]{2,}$/i.test(value)) {
                error = 'Enter a valid email address.';
            }
        } else if (name === 'text') {
            if (!value.trim()) {
                error = 'Message is required.';
            } else if (value.length > 500) {
                error = 'Message should not exceed 500 characters.';
            }
        }
        return error;
    };

    const validateForm = () => {
        let newErrors: { [key: string]: string } = {};
        Object.keys(data).forEach((key) => {
            if (key !== 'lastName') {
                const error = validateField(key, data[key as keyof typeof data]);
                if (error) {
                    newErrors[key] = error;
                }
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTouched({ firstName: true, email: true, text: true });
        if (!validateForm()) {
            setErrorMessage('Fill all required fields correctly!');
            return;
        }
        setErrorMessage('');
        try {
            await axios.post('https://api.stublab.in/stublab-be/contactUs', data);
            setSuccessMessage("Message sent successfully!");
            setData({ firstName: '', lastName: '', email: '', text: '' });
            setTouched({});
            setErrors({});
            setTimeout(() => setSuccessMessage(''), 5000);
        } catch (error) {
            console.error("Error sending data:", error);
            alert("Failed to send message!");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTouched({ ...touched, [e.target.name]: true });
        const error = validateField(e.target.name, e.target.value);
        setErrors({ ...errors, [e.target.name]: error });
    };

    return (
        <div className="container d-flex justify-content-center align-items-center mt-5">
            <div className="row w-100" style={{ maxWidth: '1200px' }}>
                <div className="col-md-6 p-4 bg-transparent rounded-2xl shadow-lg">
                    <h2 className="text-center mb-4">Contact Information</h2>
                    <p className="text-center mb-4">Building real solutions starts with mock ideas. Reach out — let’s refine, test, and create together.</p>
                    <ul className="list-unstyled">
                        <li className="d-flex align-items-center mb-3">📍 Dindigul - 624 002</li>
                        <li className="d-flex align-items-center mb-3">📞 +91 78069 24524</li>
                        <li className="d-flex align-items-center mb-3">🌐 hello@stublab.com</li>
                    </ul>
                </div>
                <div className="col-md-6 p-4 bg-transparent rounded-2xl shadow-lg">
                    <h2 className="text-center mb-4">Reach Out to Us</h2>
                    {errorMessage && <div className="alert alert-danger text-center">{errorMessage}</div>}
                    {successMessage && <div className="alert alert-success text-center">{successMessage}</div>}
                    <form onSubmit={handleSubmit} className="d-grid gap-3">
                        <div className="row">
                            <div className="col-md-6">
                                <input type="text" placeholder="First Name" name='firstName' className="form-control" value={data.firstName} onChange={handleChange} onBlur={handleBlur} />
                                {touched.firstName && errors.firstName && <p className="text-danger small">{errors.firstName}</p>}
                            </div>
                            <div className="col-md-6">
                                <input type="text" placeholder="Last Name (optional)" name='lastName' className="form-control" value={data.lastName} onChange={handleChange} />
                            </div>
                        </div>
                        <input type="email" placeholder="Email" name='email' className="form-control" value={data.email} onChange={handleChange} onBlur={handleBlur} />
                        {touched.email && errors.email && <p className="text-danger small">{errors.email}</p>}
                        <textarea placeholder="Message" rows={5} name='text' className="form-control" value={data.text} onChange={handleChange} onBlur={handleBlur}></textarea>
                        {touched.text && errors.text && <p className="text-danger small">{errors.text}</p>}
                        <button type="submit" className="btn btn-dark w-100">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;