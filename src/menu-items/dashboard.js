// assets
import { IconDashboard, IconHome } from '@tabler/icons';

// constant
const icons = { IconDashboard, IconHome };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconHome,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
