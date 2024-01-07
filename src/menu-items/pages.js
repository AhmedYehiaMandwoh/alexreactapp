// assets
import { IconKey, IconHome2, IconGift, IconMessage, IconMoodSmileBeam, 
  IconLockAccess, IconTruckDelivery ,IconBuildingStore , IconSettings,
IconUser ,IconTruck,IconBell,IconPictureInPicture,
IconCreditCard,IconGoGame,IconShieldCheck,IconFileAlert ,IconActivity ,IconAd ,IconServer} from '@tabler/icons';


// constant
const icons = {
  IconServer,
  IconKey,
  IconHome2,
  IconMessage,
  IconMoodSmileBeam,
  IconLockAccess,
  IconGift,
  IconBuildingStore,
  IconTruckDelivery
, IconSettings,
IconUser ,
IconTruck,
IconAd,
IconBell,
IconPictureInPicture,
IconCreditCard,
IconGoGame,
IconShieldCheck,
IconFileAlert,
IconActivity
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
      icon: icons.IconMoodSmileBeam,

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
          id: 'rooms',
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
      icon: icons.IconMessage,

      children: [

        {
          id: 'messages',
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
      icon: icons.IconLockAccess,

      children: [

        {
          id: 'blocking',
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
      icon: icons.IconTruck,

      children: [

        {
          id: 'shipping',
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
      icon: icons.IconBuildingStore,

      children: [

        {
          id: 'store',
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
      icon: icons.IconGift,

      children: [

        {
          id: 'memberGifts',
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
      icon: icons.IconAd,

      children: [

        {
          id: 'advertisingUnits',
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
      icon: icons.IconUser,

      children: [

        {
          id: 'accounts',
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
      icon: icons.IconActivity,

      children: [

        {
          id: 'activities',
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
      icon: icons.IconUser,

      children: [

        {
          id: 'vipCharacters',
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
      icon: icons.IconPictureInPicture,

      children: [

        {
          id: 'roomwallpapers',
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
      icon: icons.IconBell,

      children: [

        {
          id: 'notifications',
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
      icon: icons.IconTruckDelivery,

      children: [

        {
          id: 'shippingagenciess',
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
      icon: icons.IconServer,

      children: [

        {
          id: 'hostAgencies',
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
      icon: icons.IconCreditCard,

      children: [

        {
          id: 'paymentGateways',
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
      icon: icons.IconGoGame,

      children: [

        {
          id: 'games',
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
      icon: icons.IconShieldCheck,

      children: [

        {
          id: 'supervision',
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
      icon: icons.IconFileAlert,

      children: [

        {
          id: 'reports',
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
      icon: icons.IconSettings,

      children: [

        {
          id: 'settings',
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
