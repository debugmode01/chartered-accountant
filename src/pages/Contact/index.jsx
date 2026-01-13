import { MapPin, Phone, Mail } from 'lucide-react';

export const Contact = () => {
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

            <div className="container mx-auto px-6 md:px-16 lg:px-24 py-20">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Left Side: Google Map */}
                        <div className="h-[400px] md:h-full min-h-[500px] w-full bg-gray-200 relative">
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

                        {/* Right Side: Contact Details */}
                        <div className="p-10 md:p-16 flex flex-col justify-center">
                            <h2 className="text-3xl font-bold text-[#002b55] mb-2">Get in Touch</h2>
                            <p className="text-gray-500 mb-10">We are always ready to help you.</p>

                            <div className="space-y-8">
                                {/* Address Card */}
                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#2b7fff] group-hover:bg-[#2b7fff] group-hover:text-white transition-colors duration-300 shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#002b55] mb-1">Office Address</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            201 - B, 2nd Floor, Praksh Deep Building, <br />
                                            Near PNB Bank and Delhi Medical Association, Daryaganj <br />
                                            New Delhi - 110002
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#2b7fff] group-hover:bg-[#2b7fff] group-hover:text-white transition-colors duration-300 shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#002b55] mb-1">Registered Address</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Tirath Ram Shah Hospital, <br />
                                            11-A ASHOKA APARTMENT 7 RAJPUR ROAD, Civil Lines <br />
                                            New Delhi, Central Delhi, Delhi, 110054
                                        </p>
                                    </div>
                                </div>

                                {/* Phone Card */}
                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#2b7fff] group-hover:bg-[#2b7fff] group-hover:text-white transition-colors duration-300 shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#002b55] mb-1">Phone Number</h3>
                                        <p className="text-gray-600 font-medium">+91 9899092439</p>
                                        <p className="text-gray-500 text-sm">Mon - Sat: 10:00 AM - 6:30 PM</p>
                                    </div>
                                </div>

                                {/* Email Card */}
                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#2b7fff] group-hover:bg-[#2b7fff] group-hover:text-white transition-colors duration-300 shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#002b55] mb-1">Email Address</h3>
                                        <p className="text-gray-600 font-medium">ganshulassociates@gmail.com</p>
                                        <p className="text-gray-500 text-sm">We reply within 24 hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}