import { Outlet } from "react-router";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";

export const AppLayouts = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow container mx-auto px-6 md:px-16 lg:px-24 py-8">
                {children}
            </main>
            <Footer />
        </div>
    )
}