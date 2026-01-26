import { useState } from 'react';
import { MapPin, Phone, Send, Loader2 } from 'lucide-react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

// Replace these with your actual EmailJS keys
const EMAILJS_PUBLIC_KEY = "pDdJJOc-D-9cbPlBc";
const EMAILJS_SERVICE_ID = "service_qoufds3";
const EMAILJS_TEMPLATE_ID = "template_2u79zrk";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const validate = () => {
        const newErrors = {};

        // Name Validation
        if (!formData.name.trim()) {
            newErrors.name = 'Full Name is required';
        } else if (formData.name.length < 3) {
            newErrors.name = 'Name must be at least 3 characters';
        }

        // Phone Validation
        if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = 'Phone number must be exactly 10 digits';
        }

        // Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email Address is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Subject Validation
        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        } else if (formData.subject.length < 5) {
            newErrors.subject = 'Subject must be at least 5 characters';
        }

        // Message Validation
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Clear error on change if it exists
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) {
            toast.error("Please fill in all required fields correctly.");
            return;
        }

        setLoading(true);

        const templateParams = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            title: formData.subject,
            message: formData.message,
        };

        try {
            const response = await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams,
                EMAILJS_PUBLIC_KEY
            );

            if (response.status === 200) {
                toast.success("Message sent successfully! We will get back to you soon.");
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
                setErrors({});
            } else {
                throw new Error('Unexpected response status');
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            toast.error("Failed to send message. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header Section */}
            <div className="bg-[#002b55] py-20">
                <div className="container mx-auto px-6 md:px-16 lg:px-24 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        Have questions? We're here to help. Reach out to us for any financial queries or consultation.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-16 lg:px-24 py-16">

                {/* Contact Details Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Office Address */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#2b7fff]">
                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#2b7fff] mb-6">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-[#002b55] mb-4">Office Address</h3>
                        <p className="text-gray-600 leading-relaxed">
                            201 - B, 2nd Floor, Praksh Deep Building, <br />
                            Near PNB Bank and Delhi Medical Association, <br />
                            Daryaganj, New Delhi - 110002
                        </p>
                    </div>

                    {/* Registered Address */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#2b7fff]">
                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#2b7fff] mb-6">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-[#002b55] mb-4">Registered Address</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Tirath Ram Shah Hospital, <br />
                            11-A ASHOKA APARTMENT 7 RAJPUR ROAD, <br />
                            Civil Lines, New Delhi, Central Delhi, Delhi, 110054
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#2b7fff]">
                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#2b7fff] mb-6">
                            <Phone className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-[#002b55] mb-4">Contact Info</h3>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider mb-1">PHONE</p>
                                <p className="text-gray-600 font-medium">+91 9899092439</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider mb-1">EMAIL</p>
                                <p className="text-gray-600 font-medium">ganshulassociates@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form & Map Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

                    {/* Contact Form */}
                    <div className="bg-white p-8 md:p-10 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-[#002b55] mb-6">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name <span className="text-red-500 ml-1">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-md border ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-[#2b7fff]'} focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
                                        placeholder="John Doe"
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-md border ${errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-[#2b7fff]'} focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
                                        placeholder="+91 98765 43210"
                                    />
                                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address <span className="text-red-500 ml-1">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-md border ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-[#2b7fff]'} focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject <span className="text-red-500 ml-1">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-md border ${errors.subject ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-[#2b7fff]'} focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
                                        placeholder="How can we help?"
                                    />
                                    {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Message <span className="text-red-500 ml-1">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-md border ${errors.message ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-[#2b7fff]'} focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none`}
                                    placeholder="Tell us more about your requirements..."
                                ></textarea>
                                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#002b55] text-white font-bold py-4 px-8 rounded-md hover:bg-[#2b7fff] transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Map */}
                    <div className="h-[500px] lg:h-auto w-full bg-gray-200 rounded-lg overflow-hidden shadow-lg border border-gray-200 relative">
                        <iframe
                            src="https://maps.google.com/maps?q=28.6434043,77.2436786&hl=en&z=17&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0"
                            title="Office Location"
                        ></iframe>
                    </div>

                </div>
            </div>
        </div>
    )
}