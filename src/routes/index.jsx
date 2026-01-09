import { Navigate, Route, Routes } from 'react-router';
import { navigationPaths } from '../constants/navigationPath';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Services } from '../pages/Services';
import { AppLayouts } from './AppLayouts';


const AppRoutes = () => {

    const Placeholder = ({ title }) => <div className="p-10 text-2xl font-bold text-center text-gray-500">Page: {title} <br /><span className="text-sm font-normal">Coming Soon</span></div>

    const signleRoutes = [
        { path: navigationPaths.Home, element: <Home /> },
        { path: navigationPaths.About, element: <About /> },
        { path: navigationPaths.OurTeam, element: <Placeholder title="Our Team" /> },
        { path: navigationPaths.Career, element: <Placeholder title="Career" /> },
        { path: navigationPaths.ContactUs, element: <Placeholder title="Contact Us" /> },
        { path: navigationPaths.Blog, element: <Placeholder title="Blog" /> },
        { path: navigationPaths.NewsFeed, element: <Placeholder title="News Feed" /> },
    ]


    const nestedRoutes = [
        {
            path: navigationPaths.Services.Root,
            routes: [
                { path: "", element: <Services /> }, // Default for /services
                { path: navigationPaths.Services.Audit, element: <Placeholder title="Audit Service" /> },
                { path: navigationPaths.Services.Taxation, element: <Placeholder title="Taxation Service" /> },
                { path: navigationPaths.Services.Consulting, element: <Placeholder title="Consulting Service" /> },
            ]
        },
        {
            path: navigationPaths.GST.Root,
            routes: [
                { path: "", element: <Placeholder title="GST Overview" /> },
                { path: navigationPaths.GST.Registration, element: <Placeholder title="GST Registration" /> },
                { path: navigationPaths.GST.Returns, element: <Placeholder title="GST Returns" /> },
                { path: navigationPaths.GST.Compliance, element: <Placeholder title="GST Compliance" /> },
            ]
        },
        {
            path: navigationPaths.KnowledgeBase.Root,
            routes: [
                { path: "", element: <Placeholder title="Knowledge Base" /> },
                { path: navigationPaths.KnowledgeBase.Articles, element: <Placeholder title="KB Articles" /> },
                { path: navigationPaths.KnowledgeBase.Videos, element: <Placeholder title="KB Videos" /> },
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