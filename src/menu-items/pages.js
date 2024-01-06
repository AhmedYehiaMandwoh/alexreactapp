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
      title: 'Messages',
      type: 'collapse',
      icon: icons.IconHome2,

      children: [

        {
          id: 'register4',
          title: 'Messages',
          type: 'item',
          url: '/dashboard/messages',
          target: false
        }
      ]
    },
    {
      id: 'openmenu',
      title: 'Blocking',
      type: 'collapse',
      icon: icons.IconHome2,

      children: [

        {
          id: 'register5',
          title: 'Blocking',
          type: 'item',
          url: '/dashboard/blocking',
          target: false
        }
      ]
    },
    {
      id: 'openmenu',
      title: 'Shipping',
      type: 'collapse',
      icon: icons.IconHome2,

      children: [

        {
          id: 'register6',
          title: 'Shipping',
          type: 'item',
          url: '/dashboard/shipping',
          target: false
        }
      ]
    },
    {
      id: 'openmenu',
      title: 'Store',
      type: 'collapse',
      icon: icons.IconHome2,

      children: [

        {
          id: 'register7',
          title: 'Store',
          type: 'item',
          url: '/dashboard/store',
          target: false
        }
      ]
    },
    {
      id: 'openmenu',
      title: 'Member gifts',
      type: 'collapse',
      icon: icons.IconHome2,

      children: [

        {
          id: 'register8',
          title: 'Member gifts',
          type: 'item',
          url: '/dashboard/memberGifts',
          target: false
        }
      ]
    },
    {
      id: 'openmenu',
      title: 'Advertising units',
      type: 'collapse',
      icon: icons.IconHome2,

      children: [

        {
          id: 'register3',
          title: 'Advertising units',
          type: 'item',
          url: '/dashboard/advertisingUnits',
          target: false
        }
      ]
    },
    {
      id: 'openmenu',
      title: 'Accounts',
      type: 'collapse',
      icon: icons.IconHome2,

      children: [

        {
          id: 'register9',
          title: 'Accounts',
          type: 'item',
          url: '/dashboard/accounts',
          target: false
        }
      ]
    },
    {
      id: 'openmenu',
      title: 'Activities',
      type: 'collapse',
      icon: icons.IconHome2,

      children: [

        {
          id: 'register10',
          title: 'Activities',
          type: 'item',
          url: '/dashboard/activities',
          target: false
        }
      ]
    },
    {
      id: 'openmenu',
      title: 'VIP Characters',
      type: 'collapse',
      icon: icons.IconHome2,

      children: [

        {
          id: 'register11',
          title: 'VIP Characters',
          type: 'item',
          url: '/dashboard/vipCharacters',
          target: false
        }
      ]
    },
    {
      id: 'openmenu',
      title: 'Room Wallpapers',
      type: 'collapse',
      icon: icons.IconHome2,

      children: [

        {
          id: 'register12',
          title: 'Room Wallpapers',
          type: 'item',
          url: '/dashboard/roomwallpapers',
          target: false
        }
      ]
    },
    {
      id: 'openmenu',
      title: 'Notifications',
      type: 'collapse',
      icon: icons.IconHome2,

      children: [

        {
          id: 'register13',
          title: 'Notifications',
          type: 'item',
          url: '/dashboard/notifications',
          target: false
        }
      ]
    },
    {
      id: 'openmenu',
      title: 'Shipping Agencies',
      type: 'collapse',
      icon: icons.IconHome2,

      children: [

        {
          id: 'register14',
          title: 'Shipping Agencies',
          type: 'item',
          url: '/dashboard/shippingagenciess',
          target: false
        }
      ]
    },
    {
      id: 'openmenu',
      title: 'Host Agencies',
      type: 'collapse',
      icon: icons.IconHome2,

      children: [

        {
          id: 'register15',
          title: 'Host Agencies',
          type: 'item',
          url: '/dashboard/hostAgencies',
          target: false
        }
      ]
    },
    {
      id: 'openmenu',
      title: 'Payment Gateways',
      type: 'collapse',
      icon: icons.IconHome2,

      children: [

        {
          id: 'register16',
          title: 'Payment Gateways',
          type: 'item',
          url: '/dashboard/paymentGateways',
          target: false
        }
      ]
    },
    {
      id: 'openmenu',
      title: 'Games',
      type: 'collapse',
      icon: icons.IconHome2,

      children: [

        {
          id: 'register17',
          title: 'Games',
          type: 'item',
          url: '/dashboard/games',
          target: false
        }
      ]
    },
    {
      id: 'openmenu',
      title: 'Supervision',
      type: 'collapse',
      icon: icons.IconHome2,

      children: [

        {
          id: 'register18',
          title: 'Supervision',
          type: 'item',
          url: '/dashboard/supervision',
          target: false
        }
      ]
    },
    {
      id: 'openmenu',
      title: 'Reports',
      type: 'collapse',
      icon: icons.IconHome2,

      children: [

        {
          id: 'register19',
          title: 'Reports',
          type: 'item',
          url: '/dashboard/reports',
          target: false
        }
      ]
    },
    {
      id: 'openmenu',
      title: 'Settings',
      type: 'collapse',
      icon: icons.IconHome2,

      children: [

        {
          id: 'register21',
          title: 'Settings',
          type: 'item',
          url: '/dashboard/settings',
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
