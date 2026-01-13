import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, Mail, ChevronDown, ChevronRight, Menu, X } from 'lucide-react' // Added ChevronRight
import { imagePaths } from '../../constants/imagePaths'
import { navigationPaths } from '../../constants/navigationPath'

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const [activeMobileDropdown, setActiveMobileDropdown] = useState(null)
    const [activeMobileSubDropdown, setActiveMobileSubDropdown] = useState(null) // New state for mobile nested
    const location = useLocation()

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/'
        return location.pathname.startsWith(path)
    }

    const formatTitle = (key) => key.replace(/_/g, ' ')

    const DropdownItem = ({ title, path }) => (
        <Link
            to={path}
            className="block px-4 py-2 text-gray-700 hover:text-[#2b7fff] hover:bg-gray-50 transition-colors whitespace-nowrap"
            onClick={() => setActiveDropdown(null)}
        >
            {title}
        </Link>
    )

    const getLeafPath = (item) => {
        if (!item || typeof item !== 'object') return item;
        const keys = Object.keys(item).filter(k => k !== 'Root');
        if (keys.length === 0) return item.Root || '#';

        const firstKey = keys[0];
        const firstValue = item[firstKey];

        const childPath = getLeafPath(firstValue);
        const root = item.Root || '';

        // If childPath is absolute, return it as is
        if (childPath && childPath.toString().startsWith('/')) return childPath;

        // Clean join
        return root ? `${root}/${childPath}` : childPath;
    }

    const NavItem = ({ title, path, dropdownItems = null }) => {
        const isDropdown = !!dropdownItems
        const active = isActive(path)
        const [openSubDropdown, setOpenSubDropdown] = useState(null) // Track open submenu on desktop

        let targetPath = path
        if (isDropdown) {
            targetPath = getLeafPath(dropdownItems);
        }

        return (
            <div
                className="relative group h-full flex items-center"
                onMouseEnter={() => isDropdown && setActiveDropdown(title)}
                onMouseLeave={() => {
                    if (isDropdown) {
                        setActiveDropdown(null)
                        setOpenSubDropdown(null)
                    }
                }}
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
                    <div className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-b-md py-2 border-t-2 border-[#2b7fff] z-50 transform transition-all duration-300 ease-in-out origin-top ${activeDropdown === title
                        ? 'opacity-100 translate-y-0 visible'
                        : 'opacity-0 -translate-y-2 invisible'
                        }`}>
                        {Object.entries(dropdownItems).map(([key, value]) => {
                            if (key === 'Root') return null;

                            // Handle Nested Dropdown (Sub-menu)
                            if (typeof value === 'object') {
                                const subPath = `${dropdownItems.Root}/${getLeafPath(value)}`;
                                return (
                                    <div
                                        key={key}
                                        className="relative group/submenu"
                                        onMouseEnter={() => setOpenSubDropdown(key)}
                                        onMouseLeave={() => setOpenSubDropdown(null)}
                                    >
                                        <Link
                                            to={subPath}
                                            className="flex items-center justify-between px-4 py-2 text-gray-700 hover:text-[#2b7fff] hover:bg-gray-50 transition-colors cursor-pointer"
                                            onClick={() => {
                                                setActiveDropdown(null)
                                                setOpenSubDropdown(null)
                                            }}
                                        >
                                            <span>{formatTitle(key)}</span>
                                            <ChevronRight className="w-4 h-4" />
                                        </Link>

                                        {/* Sub-menu Flyout */}
                                        <div className={`absolute top-0 right-full w-64 bg-white shadow-lg rounded-md py-2 border border-gray-100 -mr-1 ${openSubDropdown === key ? 'block' : 'hidden'}`}>
                                            {Object.entries(value).map(([subKey, subValue]) => {
                                                if (subKey === 'Root') return null;
                                                // Construct absolute path for sub-item
                                                const parentRoot = dropdownItems.Root;
                                                const subRoot = value.Root;
                                                const fullPath = `${parentRoot}/${subRoot}/${subValue}`;

                                                return <DropdownItem key={subKey} title={formatTitle(subKey)} path={fullPath} />
                                            })}
                                        </div>
                                    </div>
                                )
                            }

                            // Handle Standard Link
                            const absolutePath = value.startsWith('/') ? value : `${dropdownItems.Root}/${value}`;
                            return <DropdownItem key={key} title={formatTitle(key)} path={absolutePath} />
                        })}
                    </div>
                )}
            </div>
        )
    }

    const MobileNavItem = ({ title, path, dropdownItems = null }) => {
        const isDropdown = !!dropdownItems
        const isOpen = activeMobileDropdown === title
        const active = isActive(path)

        const handleToggle = (e) => {
            if (isDropdown) {
                e.preventDefault()
                setActiveMobileDropdown(isOpen ? null : title)
                setActiveMobileSubDropdown(null) // Reset sub-dropdown on parent toggle
            } else {
                setIsMobileMenuOpen(false)
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
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out bg-gray-50 ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="flex flex-col py-1">
                            {Object.entries(dropdownItems).map(([key, value]) => {
                                if (key === 'Root') return null;

                                // Handle Nested Mobile Item
                                if (typeof value === 'object') {
                                    const isSubOpen = activeMobileSubDropdown === key;
                                    return (
                                        <div key={key}>
                                            <button
                                                onClick={() => setActiveMobileSubDropdown(isSubOpen ? null : key)}
                                                className="w-full flex justify-between items-center pl-10 pr-6 py-2 text-sm text-700 hover:text-[#2b7fff] hover:bg-gray-100 transition-colors"
                                            >
                                                {formatTitle(key)}
                                                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isSubOpen ? 'rotate-180' : ''}`} />
                                            </button>

                                            <div className={`overflow-hidden transition-all duration-300 bg-gray-100 ${isSubOpen ? 'max-h-96' : 'max-h-0'}`}>
                                                {Object.entries(value).map(([subKey, subValue]) => {
                                                    if (subKey === 'Root') return null;
                                                    const parentRoot = dropdownItems.Root;
                                                    const subRoot = value.Root;
                                                    const fullPath = `${parentRoot}/${subRoot}/${subValue}`;

                                                    return (
                                                        <Link
                                                            key={subKey}
                                                            to={fullPath}
                                                            className="pl-14 pr-6 py-2 text-sm text-gray-500 hover:text-[#2b7fff] block transition-colors"
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                        >
                                                            {formatTitle(subKey)}
                                                        </Link>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    )
                                }

                                // Handle Standard Mobile Link
                                const absolutePath = value.startsWith('/') ? value : `${dropdownItems.Root}/${value}`;
                                return (
                                    <Link
                                        key={key}
                                        to={absolutePath}
                                        className="pl-10 pr-6 py-2 text-sm text-gray-600 hover:text-[#2b7fff] hover:bg-gray-100 block transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {formatTitle(key)}
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
                    {/* Decorative Background Wrapper */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {/* Decorative Background for Menu */}
                        <div className="absolute top-0 right-0 h-full w-[58%] bg-[#fff8e1] skew-x-[-20deg] origin-bottom-right z-0 hidden lg:block transform translate-x-10"></div>
                        <div className="absolute top-0 right-[55%] h-full w-4 bg-[#f0b100] skew-x-[-20deg] origin-bottom-right z-0 hidden lg:block"></div>
                    </div>

                    <div className="container mx-auto h-full px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-24 flex items-center justify-between relative z-10">

                        {/* Logo Section */}
                        <div className="flex items-center h-full relative z-20 pr-4 lg:pr-6">
                            <Link to={navigationPaths.Home} className="flex items-center gap-2 lg:gap-3">
                                <img src={imagePaths.caLogo} alt="Company Logo" className="h-10 lg:h-12 w-auto object-contain" />
                                <div className="flex flex-col">
                                    <span className="text-lg lg:text-xl xl:text-2xl font-bold text-[#2b7fff] leading-tight text-nowrap">CA FIRM NAME</span>
                                    <span className="text-[10px] lg:text-xs text-gray-500 font-medium tracking-wider text-nowrap">CHARTERED ACCOUNTANTS</span>
                                </div>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center h-full space-x-1 pl-2 relative z-20">
                            <NavItem title="Home" path={navigationPaths.Home} />
                            <NavItem title="About Us" path={navigationPaths.About} />
                            <NavItem title="Services" path={navigationPaths.Services.Root} dropdownItems={navigationPaths.Services} />
                            {/* <NavItem title="GST" path={navigationPaths.GST.Root} dropdownItems={navigationPaths.GST} /> */}
                            {/* <NavItem title="Knowledge Base" path={navigationPaths.KnowledgeBase.Root} dropdownItems={navigationPaths.KnowledgeBase} /> */}
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
                        {/* <MobileNavItem title="GST" path={navigationPaths.GST.Root} dropdownItems={navigationPaths.GST} /> */}
                        {/* <MobileNavItem title="Knowledge Base" path={navigationPaths.KnowledgeBase.Root} dropdownItems={navigationPaths.KnowledgeBase} /> */}
                        <MobileNavItem title="Contact Us" path={navigationPaths.ContactUs} />
                    </div>
                </div>
            </header>
        </>
    )
}