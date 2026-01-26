import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationPaths } from '../../constants/navigationPath';
import { Modal } from '../../components/Modal';
import { services } from '../../constants/services';

export const Home = () => {
    const [selectedFeature, setSelectedFeature] = useState(null)
    const [selectedService, setSelectedService] = useState(null)
    const location = useLocation()

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    const team = [
        {
            id: 1,
            name: "CA Sanjay Kumar Gupta",
            role: "",
            image: "/sanjay.jpeg",
            bio: ``
        },
        {
            id: 2,
            name: "CA Anshul Gupta",
            role: "",
            image: "/anshul.png",
            bio: `G Anshul & Associates is having a post-qualification
                  experience of 11 years in bookkeeping,
                  consultancy and advisory. His mission is to help
                  businesses across the world create a hassle free
                  work environment where businesses can solely
                  focus on what they do best while G Anshul & Associates
                  delivers quality accounting, finance and reporting
                  backbone.
                  His vision is a world where businesses are
                  realising their full potential through reduced internal
                  friction and are achieving a high state of delight. He
                  brings a skilled, knowledge-driven and a world
                  class approach to reach accounting, finance,
                  compliance and reporting related goals of any
                  organisation.`
        },
        {
            id: 2,
            name: "Mihir Ranjan Samal",
            role: "",
            image: "/mihir-ranjan-samal.jpeg",
            bio: ""
        },
        {
            id: 3,
            name: "Golekha Nayak",
            role: "",
            image: "/happy.jpeg",
            bio: ""
        },
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
                    <h1 className="text-3xl md:text-5xl font-bold text-[#2b7fff] uppercase leading-tight mb-6">
                        About US
                    </h1>
                    <div className="max-w-2xl">
                        <h2 className="text-[#002b55] font-bold tracking-wider uppercase text-sm md:text-base mb-2">
                            Established in 2019, our firm is built on a foundation of Trust, Transparency, and Timeliness. We provide a full suite of professional services—including financial book-keeping, management consultancy, taxation and financial auditing. Our goal is to handle the complexities of your finances so you can focus on what you do best: running your business.
                        </h2>
                        <h2 className="text-[#002b55] font-bold tracking-wider uppercase text-sm md:text-base mb-2">
                            Our approach is rooted in the understanding that no two businesses are the same. We take the time to understand your challenges, tailoring our services to meet your specific requirements. By fostering a culture of accessibility and open communication, we ensure that our financial advice is always within your reach. Our commitment to excellence is reflected in the success of our clients and we measure our achievements by the strength of the trust they place in us.
                        </h2>
                    </div>
                </div>
            </div>

            {/* What We Serve Section */}
            {/* What We Serve Section */}
            <div id="services-section" className="py-24 relative bg-gray-50 overflow-hidden scroll-mt-28">
                {/* Dotted Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-70"></div>

                <div className="container mx-auto px-6 md:px-16 lg:px-24 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-[#2b7fff] font-bold tracking-wider uppercase text-sm">WHAT WE SERVE</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002b55] mt-2">We offer professional services</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {/* Feature Cards */}
                        {services.map((item) => (
                            <div
                                key={item.id}
                                id={`service-${item.id}`} // Added ID for scroll targeting
                                onClick={() => setSelectedFeature(item)}
                                className="animated-border-container group cursor-pointer scroll-mt-28"
                            >
                                <div className="inner-card p-6 lg:p-10 flex flex-col items-start h-full">
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
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Our Team Section */}
            <div id="team-section" className="py-24 bg-gray-50 relative scroll-mt-28">
                {/* Dotted Background Pattern - Reuse for consistency */}
                < div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-70 pointer-events-none" ></div >

                <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-24 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-[#2b7fff] font-bold tracking-wider uppercase text-sm">OUR TEAM</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002b55] mt-2">Meet our professional team</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
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
                                    <h3 className="text-lg font-bold text-[#002b55] mb-2">{member.name}</h3>

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
                    <ul className="list-disc pl-5">
                        {selectedFeature?.details.map((detail, index) => (
                            <li
                                key={index}
                                className="text-gray-600 leading-relaxed"
                            >
                                {detail}
                            </li>
                        ))}
                    </ul>
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