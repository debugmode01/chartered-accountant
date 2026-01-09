import { Link } from 'react-router-dom';
import { Briefcase, Phone, Mail, Facebook, Twitter, Linkedin, Monitor } from 'lucide-react'; // Using Monitor as a placeholder for the generic web/graph icon if needed
import { navigationPaths } from '../../constants/navigationPath';

export const Footer = () => {
    return (
        <footer className="bg-[#161616] text-gray-400 font-sans">
            {/* Main Footer Section */}
            <div className="container mx-auto px-6 md:px-16 lg:px-24 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Column 1: Useful Links */}
                    <div>
                        <h3 className="text-white text-xl font-bold mb-6 relative inline-block">
                            Usefull Links
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gray-600"></span>
                        </h3>
                        <ul className="space-y-3">
                            <li><Link to={navigationPaths.About} className="hover:text-[#2b7fff] transition-colors">About Us</Link></li>
                            <li><Link to={navigationPaths.Services.Root} className="hover:text-[#2b7fff] transition-colors">Our Services</Link></li>
                            <li><Link to={navigationPaths.NewsFeed} className="hover:text-[#2b7fff] transition-colors">Latest News</Link></li>
                            <li><Link to={navigationPaths.Testimonials} className="hover:text-[#2b7fff] transition-colors">Testimonials</Link></li>
                            <li><Link to={navigationPaths.Projects} className="hover:text-[#2b7fff] transition-colors">Our Projects</Link></li>
                            <li><Link to={navigationPaths.ContactUs} className="hover:text-[#2b7fff] transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 2: Free Resources */}
                    <div>
                        <h3 className="text-white text-xl font-bold mb-6 relative inline-block">
                            Free Resources
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gray-600"></span>
                        </h3>
                        <ul className="space-y-3">
                            <li><a href={navigationPaths.Resources.FDI_Policy} className="hover:text-[#2b7fff] transition-colors">Latest Consolidated Policy on FDI</a></li>
                            <li><a href={navigationPaths.Resources.TradeMarks} className="hover:text-[#2b7fff] transition-colors">Public Search of Trade Marks</a></li>
                            <li><a href={navigationPaths.Resources.CompanyName} className="hover:text-[#2b7fff] transition-colors">Company Name Availability</a></li>
                            <li><a href={navigationPaths.Resources.ICAI} className="hover:text-[#2b7fff] transition-colors">ICAI Publications</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Details */}
                    <div>
                        <h3 className="text-white text-xl font-bold mb-6 relative inline-block">
                            Contact Details
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gray-600"></span>
                        </h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-white p-2 rounded-sm text-black shrink-0">
                                    <Briefcase className="w-5 h-5" />
                                </div>
                                <p className="leading-relaxed">
                                    B-9, Second Floor, Mahalaxmi Nagar,<br />
                                    Behind WTP South Block, Malviya<br />
                                    Nagar, Jaipur - 302017 (Raj.)
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-white p-2 rounded-sm text-black shrink-0">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <p>+0141-4072000</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-white p-2 rounded-sm text-black shrink-0">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <p>caportal@sagipl.com</p>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4 mt-8">
                            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-500 hover:text-white transition-colors"><span className="font-bold text-lg">G+</span></a>
                            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                        </div>
                    </div>

                </div>
            </div>

            {/* Copyright Bar */}
            <div className="bg-[#1c1c1c] py-4 text-white text-sm">
                <div className="container mx-auto px-6 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-2">
                    <p>© 2023 <span className="font-bold">Chartered Accountants</span>. All Rights Reserved</p>
                    <p>Design By SAG Infotech Pvt. Ltd.</p>
                </div>
            </div>
        </footer>
    );
};