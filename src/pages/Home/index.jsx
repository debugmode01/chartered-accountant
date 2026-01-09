import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navigationPaths } from '../../constants/navigationPath';
import { Modal } from '../../components/Modal';

export const Home = () => {
    const [selectedFeature, setSelectedFeature] = useState(null)
    const [selectedService, setSelectedService] = useState(null)

    const features = [
        {
            id: 1,
            title: "Professional",
            description: "Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.",
            details: "Our professional services are designed to meet the highest standards of the industry. We employ a team of dedicated experts who understand the nuances of finance and business management. Whether you need auditing, tax consultancy, or strategic financial planning, we provide comprehensive solutions tailored to your specific needs. We believe in building long-term relationships based on trust and integrity."
        },
        {
            id: 2,
            title: "Expert Advice",
            description: "We provide expert advice to help you navigate through complex financial landscapes and make informed decisions for your business.",
            details: "Navigating the complex world of finance requires more than just basic knowledge; it demands expertise. Our consultants bring decades of experience to the table, offering insights that can transform your business operations. From regulatory compliance to investment strategies, we guide you every step of the way to ensure your business thrives in a competitive market."
        },
        {
            id: 3,
            title: "Business Growth",
            description: "Our goal is to help your business grow by providing strategic insights and practical solutions that drive results.",
            details: "Growth is the lifeblood of any business. We focus on identifying opportunities for expansion and efficiency. Our strategic planning services analyze your current position and chart a clear path forward. We help you optimize resources, reduce costs, and maximize profitability, ensuring sustainable growth for years to come."
        }
    ]

    const services = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
            category: "Finance",
            title: "Financial Planning",
            details: "Comprehensive financial planning services to secure your company's future. We analyze your current assets, liabilities, and investment strategies to create a robust roadmap for sustainable growth."
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
            category: "Strategy",
            title: "Business Growth",
            details: "Strategic consulting to help your business expand into new markets. We provide market analysis, competitor research, and actionable strategies to scale your operations effectively."
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
            category: "Audit",
            title: "Tax & Compliance",
            details: "Ensure your business remains compliant with all tax regulations. Our experts handle tax filing, auditing, and regulatory compliance so you can focus on running your business."
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
            category: "Analysis",
            title: "Risk Management",
            details: "Identify and mitigate potential business risks before they impact your bottom line. We use advanced analytics to forecast trends and develop safeguards for your assets."
        }
    ]

    const team = [
        {
            id: 1,
            name: "Rosalina D. William",
            role: "Founder",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
            bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore."
        },
        {
            id: 2,
            name: "Velavos H. DesuJa",
            role: "CEO",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
            bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore."
        },
        {
            id: 3,
            name: "Abdur Rahman J.",
            role: "Developer",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
            bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore."
        }
    ]

    return (
        <div>
            {/* Hero Section */}
            <div className="relative w-full min-h-[600px] flex items-center bg-gray-50 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1932"
                        alt="Financial Solutions Team"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay: White gradient to make text readable on the left */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-6 md:px-16 lg:px-24 h-full">
                    <div className="max-w-3xl py-20">
                        <h2 className="text-[#002b55] font-bold tracking-wider uppercase text-sm md:text-base mb-2">
                            WE PROVIDE BEST FINANCIAL SOLUTIONS
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-[#2b7fff] uppercase leading-tight mb-6">
                            FOR YOUR <br />
                            <span className="text-[#002b55]">BUSINESS</span>
                        </h1>
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
                            We have over 25 year's of experience in Finance and Business management so we can make your business more successful you can trust us.
                        </p>

                        <Link
                            to={navigationPaths.Services.Root}
                            className="inline-block bg-[#002b55] hover:bg-[#2b7fff] text-white font-bold py-4 px-10 rounded shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                        >
                            VIEW SERVICES
                        </Link>
                    </div>
                </div>
            </div>

            {/* What We Do Section */}
            <div className="py-24 relative bg-gray-50 overflow-hidden">
                {/* Dotted Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-70"></div>

                <div className="container mx-auto px-6 md:px-16 lg:px-24 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-[#2b7fff] font-bold tracking-wider uppercase text-sm">WHAT WE DO</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002b55] mt-2">We offer professional services</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {/* Feature Cards */}
                        {features.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => setSelectedFeature(item)}
                                className="bg-white p-6 lg:p-10 rounded-lg shadow-sm hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100 h-full flex flex-col items-start"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-full border-2 border-gray-50 bg-white flex items-center justify-center text-[#2b7fff] group-hover:bg-[#2b7fff] group-hover:text-white group-hover:border-[#2b7fff] transition-all duration-300 shadow-sm shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-text"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><path d="M13 8H7" /><path d="M17 12H7" /></svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#002b55]">{item.title}</h3>
                                </div>

                                <p className="text-gray-500 leading-relaxed mb-8 flex-grow">
                                    {item.description}
                                </p>

                                <div className="flex items-center mt-auto">
                                    <div
                                        onClick={() => setSelectedFeature(item)}
                                        className="flex items-center text-[#2b7fff] font-bold uppercase text-sm tracking-wider opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300"
                                    >
                                        <span>Read More</span>
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* What We Serve Section */}
            <div className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-24">
                    <div className="text-center mb-16">
                        <span className="text-[#2b7fff] font-bold tracking-wider uppercase text-sm">WHAT WE SERVE</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002b55] mt-2">We provide best services</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="group relative h-80 overflow-hidden cursor-pointer"
                                onClick={() => {
                                    setSelectedService(service)
                                    setIsModalOpen(true)
                                }}
                            >
                                {/* Background Image */}
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Desktop Overlay (Hover Only) */}
                                <div className="hidden lg:flex absolute inset-0 bg-[#002b55]/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex-col items-center justify-center p-6 text-white text-center">
                                    <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <span className="text-2xl font-light">+</span>
                                    </div>
                                    <h3 className="text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{service.title}</h3>
                                    <p className="mt-2 text-sm text-gray-200 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{service.category}</p>
                                </div>

                                {/* Mobile/Tablet View (Always Visible Bottom Bar) */}
                                <div className="lg:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 flex items-end justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{service.title}</h3>
                                        <p className="text-[#f0b100] text-sm font-medium mt-1 uppercase tracking-wide">{service.category}</p>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-[#f0b100] flex items-center justify-center text-white shrink-0 shadow-lg transform transition-transform active:scale-95">
                                        <span className="text-2xl font-light leading-none mb-1">+</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div >
            </div >

            {/* Our Team Section */}
            < div className="py-24 bg-gray-50 relative" >
                {/* Dotted Background Pattern - Reuse for consistency */}
                < div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-70 pointer-events-none" ></div >

                <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-24 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-[#2b7fff] font-bold tracking-wider uppercase text-sm">OUR TEAM</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002b55] mt-2">Meet our professional team</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                        {team.map((member) => (
                            <div key={member.id} className="group relative mb-12 lg:mb-0">
                                {/* Image Container */}
                                <div className="h-[400px] lg:h-[480px] w-full overflow-hidden rounded-lg shadow-sm">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                </div>

                                {/* Content Box */}
                                <div className="relative mx-4 -mt-12 bg-white p-6 shadow-xl rounded-sm text-center z-10 lg:absolute lg:mx-0 lg:mt-0 lg:bottom-6 lg:left-6 lg:right-6 transition-all duration-300">
                                    <h4 className="text-[#f0b100] font-bold uppercase text-sm tracking-wider mb-2">{member.role}</h4>
                                    <h3 className="text-2xl font-bold text-[#002b55] mb-2">{member.name}</h3>

                                    {/* Bio - Hidden on Desktop default, Visible on Hover. Visible on Mobile. */}
                                    <div className="lg:grid lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                                        <div className="overflow-hidden">
                                            <div className="w-12 h-[2px] bg-gray-200 mx-auto my-3 opacity-50"></div>
                                            <p className="text-gray-500 text-sm leading-relaxed pb-2">
                                                {member.bio}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div >

            {/* Feature Modal */}
            < Modal
                isOpen={!!selectedFeature}
                onClose={() => setSelectedFeature(null)}
                title={selectedFeature?.title}
            >
                <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                        {selectedFeature?.details}
                    </p>
                </div>
            </Modal >

            {/* Service Modal */}
            < Modal
                isOpen={!!selectedService}
                onClose={() => setSelectedService(null)}
                title={selectedService?.title}
            >
                <div className="space-y-4">
                    <img
                        src={selectedService?.image}
                        alt={selectedService?.title}
                        className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-[#2b7fff] font-bold uppercase text-sm tracking-wider">{selectedService?.category}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                        {selectedService?.details}
                    </p>
                </div>
            </Modal >
        </div >
    )
}