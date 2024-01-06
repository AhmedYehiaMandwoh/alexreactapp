// assets
import { IconKey, IconHome2, IconGift } from '@tabler/icons';

// constant
const icons = {
  IconKey,
  IconHome2,
  IconGift
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Pages',
  caption: 'Pages Caption',
  type: 'group',
  children: [
    {
      id: 'openmenu',
      title: 'Emoji',
      type: 'collapse',
      icon: icons.IconGift,

      children: [

        {
          id: 'emoji',
          title: 'Emoji',
          type: 'item',
          url: '/dashboard/emoji',
          target: false
        }
      ]
    },
    {
      id: 'openmenu',
      title: 'Prizes',
      type: 'collapse',
      icon: icons.IconGift,

      children: [

        {
          id: 'prizes',
          title: 'Prizes',
          type: 'item',
          url: '/dashboard/prizes',
          target: false
        }
      ]
    },
    {
      id: 'openmenu',
      title: 'Rooms',
      type: 'collapse',
      icon: icons.IconHome2,

      children: [

        {
          id: 'register3',
          title: 'Rooms',
          type: 'item',
          url: '/dashboard/rooms',
          target: false
        }
      ]
    },
    {
      id: 'openmenu',
      title: 'Authentication',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
        {
          id: 'login3',
          title: 'Login',
          type: 'item',
          url: '/pages/login/login3',
          target: true
        },
        {
          id: 'register3',
          title: 'Register',
          type: 'item',
          url: '/pages/register/register3',
          target: true
        }
      ]
    }
  ]
};

export default pages;
