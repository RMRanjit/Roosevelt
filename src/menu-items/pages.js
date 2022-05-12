// assets
import { IconEyeglass, IconFaceId, IconHanger } from '@tabler/icons';

// constant
const icons = {
    IconHanger,
    IconEyeglass,
    IconFaceId
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    title: 'Demo',
    caption: 'Try out Eyewear and Lipstick',
    type: 'group',
    children: [
        {
            id: 'fashion',
            title: 'Try outs',
            type: 'collapse',
            icon: icons.IconHanger,

            children: [
                {
                    id: 'lipstick',
                    title: 'Lipstick Tryon',
                    type: 'item',
                    url: '/Lipstick',
                    icon: icons.IconFaceId,
                    breadcrumbs: false
                },
                {
                    id: 'eyewear',
                    title: 'Eyewear Tryon',
                    type: 'item',
                    icon: icons.IconEyeglass,
                    url: '/Eyewear',
                    target: false,
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default pages;
