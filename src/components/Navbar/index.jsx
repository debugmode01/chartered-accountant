import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, Mail, ChevronDown, Menu, X } from 'lucide-react'
import { imagePaths } from '../../constants/imagePaths'
import { navigationPaths } from '../../constants/navigationPath'

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const [activeMobileDropdown, setActiveMobileDropdown] = useState(null) // Track active mobile dropdown
    const location = useLocation()

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

    // Helper to check if a path is active
    const isActive = (path) => {
        if (path === '/') return location.pathname === '/'
        return location.pathname.startsWith(path)
    }

    // Helper for dropdowns to keep code clean
    const DropdownItem = ({ title, path }) => (
        <Link
            to={path}
            className="block px-4 py-2 text-gray-700 hover:text-[#2b7fff] hover:bg-gray-50 transition-colors"
        >
            {title}
        </Link>
    )

    const NavItem = ({ title, path, dropdownItems = null }) => {
        const isDropdown = !!dropdownItems
        const active = isActive(path)

        let targetPath = path
        if (isDropdown) {
            const firstChildEntry = Object.entries(dropdownItems).find(([key]) => key !== 'Root')
            if (firstChildEntry) {
                const [key, value] = firstChildEntry;
                targetPath = value.startsWith('/') ? value : `${dropdownItems.Root}/${value}`;
            }
        }

        return (
            <div
                className="relative group h-full flex items-center"
                onMouseEnter={() => isDropdown && setActiveDropdown(title)}
                onMouseLeave={() => isDropdown && setActiveDropdown(null)}
            >
                <Link
                    to={targetPath}
                    className={`px-3 py-2 font-medium hover:text-[#2b7fff] transition-colors flex items-center h-full gap-1 ${active ? 'text-[#2b7fff]' : 'text-gray-700'}`}
                >
                    {title}
                    {isDropdown && (
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === title ? 'rotate-180' : ''}`} />
                    )}
                </Link>

                {/* Desktop Dropdown */}
                {isDropdown && (
                    <div className={`absolute top-full left-0 w-48 bg-white shadow-lg rounded-b-md py-2 border-t-2 border-[#2b7fff] z-50 transform transition-all duration-300 ease-in-out origin-top ${activeDropdown === title
                        ? 'opacity-100 translate-y-0 visible'
                        : 'opacity-0 -translate-y-2 invisible'
                        }`}>
                        {Object.entries(dropdownItems).map(([key, value]) => {
                            if (key === 'Root') return null;
                            // Construct absolute path
                            const absolutePath = value.startsWith('/') ? value : `${dropdownItems.Root}/${value}`;
                            return <DropdownItem key={key} title={key} path={absolutePath} />
                        })}
                    </div>
                )}
            </div>
        )
    }

    // New Mobile Nav Item with Accordion support
    const MobileNavItem = ({ title, path, dropdownItems = null }) => {
        const isDropdown = !!dropdownItems
        const isOpen = activeMobileDropdown === title
        const active = isActive(path)

        const handleToggle = (e) => {
            if (isDropdown) {
                e.preventDefault()
                setActiveMobileDropdown(isOpen ? null : title)
            } else {
                setIsMobileMenuOpen(false) // Close menu if it's a regular link
            }
        }

        return (
            <div className={`border-l-4 hover:border-[#2b7fff] ${active ? 'border-[#2b7fff] bg-gray-50' : 'border-transparent'}`}>
                <Link
                    to={path}
                    onClick={handleToggle}
                    className={`flex justify-between items-center px-6 py-3 hover:bg-gray-50 font-medium transition-colors w-full ${active ? 'text-[#2b7fff]' : 'text-gray-700'}`}
                >
                    {title}
                    {isDropdown && (
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    )}
                </Link>

                {isDropdown && (
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out bg-gray-50 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="flex flex-col py-1">
                            {Object.entries(dropdownItems).map(([key, value]) => {
                                if (key === 'Root') return null;
                                const absolutePath = value.startsWith('/') ? value : `${dropdownItems.Root}/${value}`;
                                return (
                                    <Link
                                        key={key}
                                        to={absolutePath}
                                        className="pl-10 pr-6 py-2 text-sm text-gray-600 hover:text-[#2b7fff] hover:bg-gray-100 block transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {key}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                )}
            </div>
        )
    }

    return (
        <>
            {/* Top Utility Bar */}
            <div className="bg-[#2b7fff] text-white h-10 px-6 md:px-16 lg:px-24 flex items-center justify-between text-sm font-sans">
                <div className="flex items-center space-x-4">
                    <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 123 456 7890</span>
                    <span className="hidden sm:flex items-center gap-2"><Mail className="w-4 h-4" /> info@company.com</span>
                </div>
                <div className="flex items-center space-x-4">
                    <span>Monday - Saturday, 10am - 7pm</span>
                </div>
            </div>

            {/* Sticky Main Navbar */}
            <header className="sticky top-0 z-50 w-full shadow-md font-sans bg-white">
                <div className="h-20 relative">
                    <div className="container mx-auto h-full px-6 md:px-16 lg:px-24 flex items-center justify-between">

                        {/* Logo Section */}
                        <div className="flex items-center h-full relative z-20 pr-12">
                            <Link to={navigationPaths.Home} className="flex items-center gap-3">
                                <img src={imagePaths.caLogo} alt="Company Logo" className="h-12 w-auto object-contain" />
                                <div className="flex flex-col">
                                    <span className="text-xl font-bold text-[#2b7fff] leading-tight">CA FIRM NAME</span>
                                    <span className="text-xs text-gray-500 font-medium tracking-wider">CHARTERED ACCOUNTANTS</span>
                                </div>
                            </Link>

                            {/* Diagonal Accent */}
                            <div className="absolute -right-4 top-0 h-full w-20 bg-[#f0b100] transform skew-x-[-20deg] hidden md:block opacity-20 pointer-events-none"></div>
                            <div className="absolute -right-8 top-0 h-full w-4 bg-[#f0b100] transform skew-x-[-20deg] hidden md:block"></div>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center h-full space-x-1 pl-8">
                            <NavItem title="Home" path={navigationPaths.Home} />
                            <NavItem title="About Us" path={navigationPaths.About} />
                            <NavItem title="Services" path={navigationPaths.Services.Root} dropdownItems={navigationPaths.Services} />
                            <NavItem title="GST" path={navigationPaths.GST.Root} dropdownItems={navigationPaths.GST} />
                            <NavItem title="Knowledge Base" path={navigationPaths.KnowledgeBase.Root} dropdownItems={navigationPaths.KnowledgeBase} />
                            <NavItem title="Contact" path={navigationPaths.ContactUs} />
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-2 text-gray-600 hover:text-[#2b7fff] focus:outline-none"
                            onClick={toggleMobileMenu}
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-8 h-8" />
                            ) : (
                                <Menu className="w-8 h-8" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Drawer */}
                <div className={`lg:hidden bg-white border-t border-gray-100 absolute w-full z-40 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100 shadow-xl' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <div className="flex flex-col py-2 overflow-y-auto max-h-[calc(100vh-120px)]">
                        <MobileNavItem title="Home" path={navigationPaths.Home} />
                        <MobileNavItem title="About Us" path={navigationPaths.About} />
                        <MobileNavItem title="Services" path={navigationPaths.Services.Root} dropdownItems={navigationPaths.Services} />
                        <MobileNavItem title="GST" path={navigationPaths.GST.Root} dropdownItems={navigationPaths.GST} />
                        <MobileNavItem title="Knowledge Base" path={navigationPaths.KnowledgeBase.Root} dropdownItems={navigationPaths.KnowledgeBase} />
                        <MobileNavItem title="Contact Us" path={navigationPaths.ContactUs} />
                    </div>
                </div>
            </header>
        </>
    )
}