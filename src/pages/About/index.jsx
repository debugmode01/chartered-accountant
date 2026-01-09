import { imagePaths } from "../../constants/imagePaths"

export const About = () => {
    return (
        <div className="container mx-auto px-6 md:px-16 lg:px-24 py-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
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
        </div>
    )
}