import { Route, Routes, Navigate } from 'react-router-dom';
import { navigationPaths } from '../constants/navigationPath';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Services } from '../pages/Services';
import { AppLayouts } from './AppLayouts';
import { Contact } from '../pages/Contact';


const AppRoutes = () => {

    const Placeholder = ({ title }) => <div className="container mx-auto px-6 md:px-16 lg:px-24 py-12 text-2xl font-bold text-center text-gray-500">Page: {title} <br /><span className="text-sm font-normal">Coming Soon</span></div>

    const signleRoutes = [
        { path: navigationPaths.Home, element: <Home /> },
        { path: navigationPaths.About, element: <About /> },
        { path: navigationPaths.ContactUs, element: <Contact /> },
    ]


    const nestedRoutes = [
        {
            path: navigationPaths.Services.Root,
            routes: [
                { path: "", element: <Services /> }, // Default for /services
                { path: navigationPaths.Services.Audit_And_Assurance, element: <Placeholder title="Audit and Assurance Services" /> },
                { path: navigationPaths.Services.Risk_Advisory, element: <Placeholder title="Risk Advisory Services" /> },
                { path: navigationPaths.Services.Direct_Taxation, element: <Placeholder title="Direct Taxation Services" /> },
                { path: navigationPaths.Services.GST_Advisory, element: <Placeholder title="GST Advisory Services" /> },
                { path: navigationPaths.Services.Corporate_Tax_Advisory, element: <Placeholder title="Corporate Tax Advisory Services" /> },
                { path: navigationPaths.Services.Corporate_Law, element: <Placeholder title="Corporate Law & Related Matters" /> },
                { path: navigationPaths.Services.Transaction_Advisory, element: <Placeholder title="Transaction Advisory Services" /> },
                { path: navigationPaths.Services.BPO, element: <Placeholder title="Business Process Outsourcing (BPO) Services" /> },
                { path: navigationPaths.Services.Virtual_CFO, element: <Placeholder title="Virtual CFO & Strategic Financial Advisory" /> },
                { path: navigationPaths.Services.Business_Valuation, element: <Placeholder title="Business Valuation Services" /> },
            ]
        },
        {
            path: navigationPaths.GST.Root,
            routes: [
                { path: "", element: <Placeholder title="GST Overview" /> },
                { path: navigationPaths.GST.GST_Portal, element: <Placeholder title="GST Portal" /> },
                { path: navigationPaths.GST.Acts, element: <Placeholder title="GST Acts" /> },
                { path: navigationPaths.GST.Rules, element: <Placeholder title="GST Rules" /> },
                { path: navigationPaths.GST.Circulars, element: <Placeholder title="GST Circulars" /> },
                { path: navigationPaths.GST.Notifications, element: <Placeholder title="GST Notifications" /> },
                { path: navigationPaths.GST.Forms, element: <Placeholder title="GST Forms" /> },
                { path: navigationPaths.GST.Orders, element: <Placeholder title="GST Orders" /> },
                { path: navigationPaths.GST.Instructions, element: <Placeholder title="GST Instructions" /> },
                { path: navigationPaths.GST.HSN_Code_With_Rate, element: <Placeholder title="HSN Code With Rate" /> },
                { path: navigationPaths.GST.SAC_Code, element: <Placeholder title="SAC Code" /> },
            ]
        },
        {
            path: navigationPaths.KnowledgeBase.Root,
            routes: [
                { path: "", element: <Navigate to={navigationPaths.KnowledgeBase.NewsFeed} replace /> },
                { path: navigationPaths.KnowledgeBase.NewsFeed, element: <Placeholder title="News Feed" /> },

                // Tools
                { path: navigationPaths.KnowledgeBase.Tools.Root, element: <Navigate to={`${navigationPaths.KnowledgeBase.Root}/${navigationPaths.KnowledgeBase.Tools.Root}/${navigationPaths.KnowledgeBase.Tools.Rates_of_Income_Tax}`} replace /> },
                { path: `${navigationPaths.KnowledgeBase.Tools.Root}/${navigationPaths.KnowledgeBase.Tools.Rates_of_Income_Tax}`, element: <Placeholder title="Rates of Income Tax" /> },
                { path: `${navigationPaths.KnowledgeBase.Tools.Root}/${navigationPaths.KnowledgeBase.Tools.TDS_Rates_for_NRI_us_195}`, element: <Placeholder title="TDS Rates for N.R.I u/s 195" /> },
                { path: `${navigationPaths.KnowledgeBase.Tools.Root}/${navigationPaths.KnowledgeBase.Tools.Rates_of_TDS}`, element: <Placeholder title="Rates of TDS" /> },
                { path: `${navigationPaths.KnowledgeBase.Tools.Root}/${navigationPaths.KnowledgeBase.Tools.Rates_of_NSC_Interest}`, element: <Placeholder title="Rates of NSC Interest" /> },
                { path: `${navigationPaths.KnowledgeBase.Tools.Root}/${navigationPaths.KnowledgeBase.Tools.Rates_of_Depreciation_Under_Income_Tax_Act}`, element: <Placeholder title="Rates of Depreciation Under Income Tax Act" /> },
                { path: `${navigationPaths.KnowledgeBase.Tools.Root}/${navigationPaths.KnowledgeBase.Tools.Rates_of_Depreciation_Under_Company_Act}`, element: <Placeholder title="Rates of Depreciation Under Company Act" /> },
                { path: `${navigationPaths.KnowledgeBase.Tools.Root}/${navigationPaths.KnowledgeBase.Tools.Cost_Inflation_Index}`, element: <Placeholder title="Cost Inflation Index" /> },
                { path: `${navigationPaths.KnowledgeBase.Tools.Root}/${navigationPaths.KnowledgeBase.Tools.ROC_Fee_Structure}`, element: <Placeholder title="ROC Fee Structure" /> },
                { path: `${navigationPaths.KnowledgeBase.Tools.Root}/${navigationPaths.KnowledgeBase.Tools.MICR_Codes}`, element: <Placeholder title="MICR Codes" /> },
                { path: `${navigationPaths.KnowledgeBase.Tools.Root}/${navigationPaths.KnowledgeBase.Tools.IFSC_Codes}`, element: <Placeholder title="IFSC Codes" /> },

                // Important Links
                { path: navigationPaths.KnowledgeBase.Important_Links.Root, element: <Navigate to={`${navigationPaths.KnowledgeBase.Root}/${navigationPaths.KnowledgeBase.Important_Links.Root}/${navigationPaths.KnowledgeBase.Important_Links.PAN}`} replace /> },
                { path: `${navigationPaths.KnowledgeBase.Important_Links.Root}/${navigationPaths.KnowledgeBase.Important_Links.PAN}`, element: <Placeholder title="PAN" /> },
                { path: `${navigationPaths.KnowledgeBase.Important_Links.Root}/${navigationPaths.KnowledgeBase.Important_Links.TAN}`, element: <Placeholder title="TAN" /> },
                { path: `${navigationPaths.KnowledgeBase.Important_Links.Root}/${navigationPaths.KnowledgeBase.Important_Links['E-Payment_Online']}`, element: <Placeholder title="E-Payment Online" /> },
                { path: `${navigationPaths.KnowledgeBase.Important_Links.Root}/${navigationPaths.KnowledgeBase.Important_Links.Income_Tax}`, element: <Placeholder title="Income Tax" /> },
                { path: `${navigationPaths.KnowledgeBase.Important_Links.Root}/${navigationPaths.KnowledgeBase.Important_Links.CBEC}`, element: <Placeholder title="CBEC" /> },
                { path: `${navigationPaths.KnowledgeBase.Important_Links.Root}/${navigationPaths.KnowledgeBase.Important_Links['PF_&_ESI']}`, element: <Placeholder title="PF & ESI" /> },
                { path: `${navigationPaths.KnowledgeBase.Important_Links.Root}/${navigationPaths.KnowledgeBase.Important_Links.Excise_and_Service_Tax}`, element: <Placeholder title="Excise and Service Tax" /> },
                { path: `${navigationPaths.KnowledgeBase.Important_Links.Root}/${navigationPaths.KnowledgeBase.Important_Links.MCA}`, element: <Placeholder title="MCA" /> },
                { path: `${navigationPaths.KnowledgeBase.Important_Links.Root}/${navigationPaths.KnowledgeBase.Important_Links['CA/CS']}`, element: <Placeholder title="CA/CS" /> },
                { path: `${navigationPaths.KnowledgeBase.Important_Links.Root}/${navigationPaths.KnowledgeBase.Important_Links.Supreme_Court}`, element: <Placeholder title="Supreme Court" /> },

                // Acts
                { path: navigationPaths.KnowledgeBase.Acts.Root, element: <Navigate to={`${navigationPaths.KnowledgeBase.Root}/${navigationPaths.KnowledgeBase.Acts.Root}/${navigationPaths.KnowledgeBase.Acts.Income_Tax_Act}`} replace /> },
                { path: `${navigationPaths.KnowledgeBase.Acts.Root}/${navigationPaths.KnowledgeBase.Acts.Income_Tax_Act}`, element: <Placeholder title="Income Tax Act" /> },
                { path: `${navigationPaths.KnowledgeBase.Acts.Root}/${navigationPaths.KnowledgeBase.Acts.Companies_Act}`, element: <Placeholder title="Companies Act" /> },
                { path: `${navigationPaths.KnowledgeBase.Acts.Root}/${navigationPaths.KnowledgeBase.Acts['Companies_(Donation_to_National)_Fund_Act']}`, element: <Placeholder title="Companies (Donation to National) Fund Act" /> },
                { path: `${navigationPaths.KnowledgeBase.Acts.Root}/${navigationPaths.KnowledgeBase.Acts.Limited_Liability_Partnership_Act}`, element: <Placeholder title="Limited Liability Partnership Act" /> },
                { path: `${navigationPaths.KnowledgeBase.Acts.Root}/${navigationPaths.KnowledgeBase.Acts.Partnership_Act}`, element: <Placeholder title="Partnership Act" /> },
                { path: `${navigationPaths.KnowledgeBase.Acts.Root}/${navigationPaths.KnowledgeBase.Acts.Societies_Registration_Act}`, element: <Placeholder title="Societies Registration Act" /> },
                { path: `${navigationPaths.KnowledgeBase.Acts.Root}/${navigationPaths.KnowledgeBase.Acts.Competition_Act}`, element: <Placeholder title="Competition Act" /> },
                { path: `${navigationPaths.KnowledgeBase.Acts.Root}/${navigationPaths.KnowledgeBase.Acts.Monopolies_and_Restrictive_Trade_Practices_Act}`, element: <Placeholder title="Monopolies and Restrictive Trade Practices Act" /> },
                { path: `${navigationPaths.KnowledgeBase.Acts.Root}/${navigationPaths.KnowledgeBase.Acts.Chartered_Accountants_Act}`, element: <Placeholder title="Chartered Accountants Act" /> },
                { path: `${navigationPaths.KnowledgeBase.Acts.Root}/${navigationPaths.KnowledgeBase.Acts.Company_Secretaries_Act}`, element: <Placeholder title="Company Secretaries Act" /> },
                { path: `${navigationPaths.KnowledgeBase.Acts.Root}/${navigationPaths.KnowledgeBase.Acts.Cost_And_Works_Accountants_Act}`, element: <Placeholder title="Cost And Works Accountants Act" /> },
                { path: `${navigationPaths.KnowledgeBase.Acts.Root}/${navigationPaths.KnowledgeBase.Acts.Wealth_Tax_Act}`, element: <Placeholder title="Wealth Tax Act" /> },

                // Rules
                { path: navigationPaths.KnowledgeBase.Rules.Root, element: <Navigate to={`${navigationPaths.KnowledgeBase.Root}/${navigationPaths.KnowledgeBase.Rules.Root}/${navigationPaths.KnowledgeBase.Rules.Income_Tax_Rules}`} replace /> },
                { path: `${navigationPaths.KnowledgeBase.Rules.Root}/${navigationPaths.KnowledgeBase.Rules.Income_Tax_Rules}`, element: <Placeholder title="Income Tax Rules" /> },
                { path: `${navigationPaths.KnowledgeBase.Rules.Root}/${navigationPaths.KnowledgeBase.Rules.Company_Law_Rules}`, element: <Placeholder title="Company Law Rules" /> },

                // Circulars
                { path: navigationPaths.KnowledgeBase.Circulars.Root, element: <Navigate to={`${navigationPaths.KnowledgeBase.Root}/${navigationPaths.KnowledgeBase.Circulars.Root}/${navigationPaths.KnowledgeBase.Circulars.Income_Tax}`} replace /> },
                { path: `${navigationPaths.KnowledgeBase.Circulars.Root}/${navigationPaths.KnowledgeBase.Circulars.Income_Tax}`, element: <Placeholder title="Income Tax Circulars" /> },
                { path: `${navigationPaths.KnowledgeBase.Circulars.Root}/${navigationPaths.KnowledgeBase.Circulars.Company_Law}`, element: <Placeholder title="Company Law Circulars" /> },

                // Notification
                { path: navigationPaths.KnowledgeBase.Notification.Root, element: <Navigate to={`${navigationPaths.KnowledgeBase.Root}/${navigationPaths.KnowledgeBase.Notification.Root}/${navigationPaths.KnowledgeBase.Notification.Income_Tax}`} replace /> },
                { path: `${navigationPaths.KnowledgeBase.Notification.Root}/${navigationPaths.KnowledgeBase.Notification.Income_Tax}`, element: <Placeholder title="Income Tax Notifications" /> },
                { path: `${navigationPaths.KnowledgeBase.Notification.Root}/${navigationPaths.KnowledgeBase.Notification.Company_Law}`, element: <Placeholder title="Company Law Notifications" /> },

                // Forms
                { path: navigationPaths.KnowledgeBase.Forms.Root, element: <Navigate to={`${navigationPaths.KnowledgeBase.Root}/${navigationPaths.KnowledgeBase.Forms.Root}/${navigationPaths.KnowledgeBase.Forms.Income_Tax_Returns_Forms}`} replace /> },
                { path: `${navigationPaths.KnowledgeBase.Forms.Root}/${navigationPaths.KnowledgeBase.Forms.Income_Tax_Returns_Forms}`, element: <Placeholder title="Income Tax Returns Forms" /> },
                { path: `${navigationPaths.KnowledgeBase.Forms.Root}/${navigationPaths.KnowledgeBase.Forms.Income_Tax_Forms}`, element: <Placeholder title="Income Tax Forms" /> },
                { path: `${navigationPaths.KnowledgeBase.Forms.Root}/${navigationPaths.KnowledgeBase.Forms.Wealth_Tax_Returns}`, element: <Placeholder title="Wealth Tax Returns" /> },
                { path: `${navigationPaths.KnowledgeBase.Forms.Root}/${navigationPaths.KnowledgeBase.Forms.Income_Tax_Challans}`, element: <Placeholder title="Income Tax Challans" /> },
                { path: `${navigationPaths.KnowledgeBase.Forms.Root}/${navigationPaths.KnowledgeBase.Forms.Income_Tax_Other_Forms}`, element: <Placeholder title="Income Tax Other Forms" /> },
                { path: `${navigationPaths.KnowledgeBase.Forms.Root}/${navigationPaths.KnowledgeBase.Forms.ROC_Forms}`, element: <Placeholder title="ROC Forms" /> },
                { path: `${navigationPaths.KnowledgeBase.Forms.Root}/${navigationPaths.KnowledgeBase.Forms.Limited_Liability_Partnership_LLP}`, element: <Placeholder title="Limited Liability Partnership (LLP)" /> },

                // Calculator
                { path: navigationPaths.KnowledgeBase.Calculator.Root, element: <Navigate to={`${navigationPaths.KnowledgeBase.Root}/${navigationPaths.KnowledgeBase.Calculator.Root}/${navigationPaths.KnowledgeBase.Calculator.Kisan_Vikas_Patra}`} replace /> },
                { path: `${navigationPaths.KnowledgeBase.Calculator.Root}/${navigationPaths.KnowledgeBase.Calculator.Kisan_Vikas_Patra}`, element: <Placeholder title="Kisan Vikas Patra" /> },
                { path: `${navigationPaths.KnowledgeBase.Calculator.Root}/${navigationPaths.KnowledgeBase.Calculator.Get_Number_Of_Installment}`, element: <Placeholder title="Get Number Of Installment" /> },
                { path: `${navigationPaths.KnowledgeBase.Calculator.Root}/${navigationPaths.KnowledgeBase.Calculator['Equated_Monthly_Installment_(EMI)']}`, element: <Placeholder title="Equated Monthly Installment (EMI)" /> },
                { path: `${navigationPaths.KnowledgeBase.Calculator.Root}/${navigationPaths.KnowledgeBase.Calculator['House_Rent_Allowance_(HRA)']}`, element: <Placeholder title="House Rent Allowance (HRA)" /> },
                { path: `${navigationPaths.KnowledgeBase.Calculator.Root}/${navigationPaths.KnowledgeBase.Calculator['Fringe_Benefit_Tax_(FBT)']}`, element: <Placeholder title="Fringe Benefit Tax (FBT)" /> },
                { path: `${navigationPaths.KnowledgeBase.Calculator.Root}/${navigationPaths.KnowledgeBase.Calculator.Income_Tax_Calculator}`, element: <Placeholder title="Income Tax Calculator" /> },
                { path: `${navigationPaths.KnowledgeBase.Calculator.Root}/${navigationPaths.KnowledgeBase.Calculator.Home_Loan_Calculator}`, element: <Placeholder title="Home Loan Calculator" /> },
                { path: `${navigationPaths.KnowledgeBase.Calculator.Root}/${navigationPaths.KnowledgeBase.Calculator.Auto_Loan_Calculator}`, element: <Placeholder title="Auto Loan Calculator" /> },
                { path: `${navigationPaths.KnowledgeBase.Calculator.Root}/${navigationPaths.KnowledgeBase.Calculator['National_Saving_Certificates_(NSC)']}`, element: <Placeholder title="National Saving Certificates (NSC)" /> },
            ]
        }
    ];

    return (
        <>
            <Routes>

                {signleRoutes.map(({ path, element }) => (
                    <Route key={path} path={path} element={<AppLayouts>{element}</AppLayouts>} />
                ))}

                {nestedRoutes.map((config, index) => (
                    <Route key={index} path={config.path}>
                        {config.routes.map((route) => (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={<AppLayouts>{route.element}</AppLayouts>}
                            />
                        ))}
                    </Route>
                ))}
            </Routes>
        </>
    );
};

export default AppRoutes;