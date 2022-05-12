// assets
import { IconHome } from '@tabler/icons';

// constant
const icons = { IconHome };

// ==============================|| HOME MENU ITEMS ||============================== //

const home = {
    id: 'home',
    type: 'group',
    icon: icons.IconHome,
    caption: 'View all our products',
    children: [
        {
            id: 'default',
            title: 'Home',
            caption: 'View all our products',
            type: 'item',
            url: '/home',
            icon: icons.IconHome,
            breadcrumbs: false
        }
    ]
};

export default home;
