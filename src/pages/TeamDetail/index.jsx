import { useParams, Link } from 'react-router-dom';
import { team } from '../../constants/team';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

export const TeamDetail = () => {
    const { id } = useParams();
    const member = team.find(m => m.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!member) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-[#002b55] mb-4">Member Not Found</h2>
                    <Link to="/" className="text-[#2b7fff] font-bold hover:underline flex items-center justify-center gap-2">
                        <ArrowLeft size={20} /> Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-24">
            <div className="container mx-auto px-6 md:px-16 lg:px-24">
                <Link to="/" className="inline-flex items-center text-[#2b7fff] font-bold mb-12 hover:gap-3 transition-all">
                    <ArrowLeft size={20} className="mr-2" /> Back to Home
                </Link>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                        {/* Image Section */}
                        <div className="lg:w-1/3 h-[400px] lg:h-auto relative overflow-hidden">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#002b55]/40 to-transparent"></div>
                        </div>

                        {/* Content Section */}
                        <div className="lg:w-2/3 p-8 lg:p-16 flex flex-col justify-center">
                            <div className="mb-8">
                                <h1 className="text-3xl md:text-5xl font-bold text-[#002b55] mt-2 leading-tight">
                                    {member.name}
                                </h1>
                                <div className="w-20 h-1 bg-[#f0b100] mt-6"></div>
                            </div>

                            <div className="prose prose-lg max-w-none">
                                {member.bio ? (
                                    <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                                        {member.bio}
                                    </p>
                                ) : (
                                    <p className="text-gray-400 italic">No biography available for this member.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
