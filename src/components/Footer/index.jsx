import { Link } from 'react-router-dom';
import { Briefcase, Phone, Mail, Facebook, Twitter, Linkedin, Monitor } from 'lucide-react'; // Using Monitor as a placeholder for the generic web/graph icon if needed
import { navigationPaths } from '../../constants/navigationPath';

export const Footer = () => {
    return (
        <footer className="bg-[#161616] text-gray-400 font-sans">
            {/* Main Footer Section */}
            <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-24 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Column 1: Useful Links */}
                    <div>
                        <h3 className="text-white text-xl font-bold mb-6 relative inline-block">
                            Useful Links
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gray-600"></span>
                        </h3>
                        <ul className="space-y-3">
                            <li><Link to={navigationPaths.About} className="hover:text-[#2b7fff] transition-colors">About Us</Link></li>
                            <li><Link to="/#services-section" className="hover:text-[#2b7fff] transition-colors">Our Services</Link></li>
                            <li><Link to={navigationPaths.ContactUs} className="hover:text-[#2b7fff] transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 2: Office Address */}
                    <div>
                        <h3 className="text-white text-xl font-bold mb-6 relative inline-block">
                            Office Address
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gray-600"></span>
                        </h3>
                        <div className='space-y-6'>
                            <div className="flex items-start gap-4">
                                <div className="bg-white p-2 rounded-sm text-black shrink-0">
                                    <Briefcase className="w-5 h-5" />
                                </div>
                                <p className="leading-relaxed">
                                    201 - B, 2nd Floor, Praksh Deep Building, <br />
                                    Near PNB Bank and Delhi Medical Association, Daryaganj <br />
                                    New Delhi - 110002
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-white p-2 rounded-sm text-black shrink-0">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <p>+91 9899092439 <br /> +91 9560876725</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Registered Address & Contact */}
                    <div>
                        <h3 className="text-white text-xl font-bold mb-6 relative inline-block">
                            Registered Address
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gray-600"></span>
                        </h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-white p-2 rounded-sm text-black shrink-0">
                                    <Briefcase className="w-5 h-5" />
                                </div>
                                <p className="leading-relaxed">
                                    Tirath Ram Shah Hospital, <br />
                                    11-A ASHOKA APARTMENT 7 RAJPUR ROAD, Civil Lines <br />
                                    New Delhi, Central Delhi, Delhi, 110054
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-white p-2 rounded-sm text-black shrink-0">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <p>ganshulassociates@gmail.com</p>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4 mt-8">
                            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                        </div>
                    </div>

                </div>
            </div>
            {/* Copyright Bar */}
            <div className="bg-[#1c1c1c] py-4 text-white text-sm">
                <div className="container mx-auto px-6 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-2">
                    <p>© 2023 <span className="font-bold">Chartered Accountants</span>. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};