import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'components/Loadable';

// Home Routing
const HomeDefault = Loadable(lazy(() => import('views/Home')));

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// Lipstick Routing
const LipstickRoute = Loadable(lazy(() => import('views/pages/Lipstick/LipstickView')));

// Eyewear Routing
const EyewearRoute = Loadable(lazy(() => import('views/pages/Eyewear/EyewearView')));

// utilities routing
const UtilsFaceMeshMediaPipe = Loadable(lazy(() => import('views/utilities/FaceMeshView')));
const UtilsHandGesturesMediaPipe = Loadable(lazy(() => import('views/utilities/HandGesturesView')));
const UtilsHolisticMediaPipe = Loadable(lazy(() => import('views/utilities/HolisticView')));

const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <HomeDefault />
        },
        {
            path: '/Home',
            element: <HomeDefault />
        },
        {
            path: '/dashboard/default',
            element: <DashboardDefault />
        },
        {
            path: '/Lipstick',
            element: <LipstickRoute />
        },
        {
            path: '/Eyewear',
            element: <EyewearRoute />
        },
        {
            path: '/utils/facemeshMP',
            element: <UtilsFaceMeshMediaPipe />
        },
        {
            path: '/utils/handgesturesMP',
            element: <UtilsHandGesturesMediaPipe />
        },
        {
            path: '/utils/holisticMP',
            element: <UtilsHolisticMediaPipe />
        },

        {
            path: '/utils/util-typography',
            element: <UtilsTypography />
        },
        {
            path: '/utils/util-color',
            element: <UtilsColor />
        },
        {
            path: '/utils/util-shadow',
            element: <UtilsShadow />
        },
        {
            path: '/icons/tabler-icons',
            element: <UtilsTablerIcons />
        },
        {
            path: '/icons/material-icons',
            element: <UtilsMaterialIcons />
        },
        {
            path: '/sample-page',
            element: <SamplePage />
        }
    ]
};

export default MainRoutes;
