// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill, IconHandFinger, IconMoodBoy, IconFaceId } from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill,
    IconHandFinger,
    IconMoodBoy,
    IconFaceId
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Utilities',
    type: 'group',
    children: [
        {
            id: 'util-facemesh-mp',
            title: 'Facemesh',
            type: 'item',
            url: '/utils/facemeshMP',
            icon: icons.IconFaceId,
            breadcrumbs: false
        },
        {
            id: 'util-handgesture-mp',
            title: 'Gestures',
            type: 'item',
            url: '/utils/handgesturesMP',
            icon: icons.IconHandFinger,
            breadcrumbs: false
        },
        {
            id: 'util-holistic-mp',
            title: 'Holistic',
            type: 'item',
            url: '/utils/holisticMP',
            icon: icons.IconMoodBoy,
            breadcrumbs: false
        }
        // {
        //     id: 'util-typography',
        //     title: 'Typography',
        //     type: 'item',
        //     url: '/utils/util-typography',
        //     icon: icons.IconTypography,
        //     breadcrumbs: false
        // },
        // {
        //     id: 'util-color',
        //     title: 'Color',
        //     type: 'item',
        //     url: '/utils/util-color',
        //     icon: icons.IconPalette,
        //     breadcrumbs: false
        // },
        // {
        //     id: 'util-shadow',
        //     title: 'Shadow',
        //     type: 'item',
        //     url: '/utils/util-shadow',
        //     icon: icons.IconShadow,
        //     breadcrumbs: false
        // },
        // {
        //     id: 'icons',
        //     title: 'Icons',
        //     type: 'collapse',
        //     icon: icons.IconWindmill,
        //     children: [
        //         {
        //             id: 'tabler-icons',
        //             title: 'Tabler Icons',
        //             type: 'item',
        //             url: '/icons/tabler-icons',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'material-icons',
        //             title: 'Material Icons',
        //             type: 'item',
        //             url: '/icons/material-icons',
        //             breadcrumbs: false
        //         }
        //     ]
        // }
    ]
};

export default utilities;
