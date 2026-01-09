import { Outlet } from "react-router";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";

export const AppLayouts = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    )
}