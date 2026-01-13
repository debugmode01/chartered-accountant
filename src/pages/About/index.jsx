import { imagePaths } from "../../constants/imagePaths"
import { Target, CircleDollarSign, MessageSquare, HeartHandshake, Lightbulb, Settings, Clock, ShieldCheck, Eye } from 'lucide-react'

export const About = () => {
    const values = [
        {
            icon: Target,
            title: "Approach",
            description: "We take ownership on behalf of the client and see through their eyes. It enables us to build credibility and trust hence parent companies directly interact with us."
        },
        {
            icon: CircleDollarSign,
            title: "Cost Effective",
            description: "We are reasonable, economical and affordable. The merit of our professionalism, guidance and solutions is at par with the best."
        },
        {
            icon: MessageSquare,
            title: "Communication",
            description: "We listen, we empathise, we understand and we solve – all with a smile."
        },
        {
            icon: HeartHandshake,
            title: "Personal",
            description: "While staying focused on rigorous work processes, we do not lose sight of the humane touch that every interaction calls for."
        },
        {
            icon: Lightbulb,
            title: "Solution-Driven",
            description: "We focus on the solution regarding the problem."
        },
        {
            icon: Settings,
            title: "Process",
            description: "We ensure that all the tasks follow the system that has been laid out for."
        },
        {
            icon: Clock,
            title: "Time",
            description: "Timeliness is key for tax, audit, accounting and other compliances. We value time as a critical resource and ensure timely delivery of services through efficient planning, clear timelines, and proactive follow-ups, without compromising on quality."
        },
        {
            icon: ShieldCheck,
            title: "Trust",
            description: "We deliver confidentiality not just by name but in the way we work. We work with a limited number of quality clients and give personal care and attention to keep all data secure and safe. Our clients always are in complete control of the sensitive data shared with us."
        },
        {
            icon: Eye,
            title: "Transparency",
            description: "We maintain complete openness in our communication, processes, and fees, ensuring clarity at every stage and enabling informed decision-making for our clients. Great care has been taken with our documentation and record-keeping policy. Further, we deliver transparency by always keeping the client or your appointed liaison officer well-informed at every stage of the work."
        }
    ]

    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-6 md:px-16 lg:px-24 py-12">
                <div className="flex flex-col md:flex-row gap-8 items-center mb-24">
                    <div className="md:w-1/2">
                        <img
                            src={imagePaths.caLogo}
                            alt="About Us"
                            className="rounded-lg shadow-lg w-full h-auto object-cover"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h1 className="text-3xl font-bold text-[#2b7fff] mb-4">About Us</h1>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            We are a leading Chartered Accountancy firm rendering comprehensive professional services which include audit, management consultancy, tax consultancy, accounting services, manpower management, secretarial services etc.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            We are a professionally managed firm. The team consists of distinguished chartered accountants, corporate financial advisors and tax consultants. The firm represents a combination of specialized skills, which are geared to offers sound financial advice and personalized proactive services.
                        </p>
                    </div>
                </div>

                {/* Core Values Section */}
                <div className="py-12">
                    <div className="text-center mb-16">
                        <span className="text-[#2b7fff] font-bold tracking-wider uppercase text-sm">CORE VALUES</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002b55] mt-2">Professional values we follow</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((item, index) => {
                            const Icon = item.icon
                            return (
                                <div
                                    key={index}
                                    className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group"
                                >
                                    <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-[#2b7fff] mb-6 group-hover:bg-[#2b7fff] group-hover:text-white transition-colors duration-300">
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#002b55] mb-3">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}