// assets
import { IconKey, IconHome2, IconGift, IconMessage, IconMoodSmileBeam, 
  IconLockAccess, IconTruckDelivery ,IconBuildingStore , IconSettings,
IconUser ,IconTruck,IconBell,IconPictureInPicture,IconDashboard,
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
IconDashboard,
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
//   title: 'Pages',
  // caption: 'Pages Caption',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'collapse',
      icon: icons.IconDashboard,

      children: [

        {
          id: 'dashboard',
          title: 'statistics',
          type: 'item',
          url: '/dashboard/statistics',
          target: false
        }
      ]
    },
    {
      id: 'emoji',
      title: 'Emoji',
      type: 'collapse',
      icon: icons.IconMoodSmileBeam,

      children: [

        {
          id: 'departments',
          title: 'Departments',
          type: 'item',
          url: '/dashboard/departments',
          target: false
        },
        {
          id: 'symbols',
          title: 'Symbols',
          type: 'item',
          url: '/dashboard/symbols',
          target: false
        },
        {
          id: 'allEmoji',
          title: 'AllEmoji',
          type: 'item',
          url: '/dashboard/allEmoji',
          target: false
        }
      ]
    },
    {
      id: 'prizes',
      title: 'Prizes',
      type: 'collapse',
      icon: icons.IconGift,

      children: [

        {
          id: 'departmentsPrizes',
          title: 'Departments',
          type: 'item',
          url: '/dashboard/departmentsPrizes',
          target: false
        },
        {
          id: 'prizes',
          title: 'Prizes',
          type: 'item',
          url: '/dashboard/prize',
          target: false
        },
        {
          id: 'allPrizes',
          title: 'All Prizes',
          type: 'item',
          url: '/dashboard/allPrizes',
          target: false
        },
        
      ]
    },
    {
      id: 'rooms',
      title: 'Rooms',
      type: 'collapse',
      icon: icons.IconHome2,

      children: [

        {
          id: 'createARoom',
          title: 'Create A Room',
          type: 'item',
          url: '/dashboard/createARoom',
          target: false
        },
       
        {
          id: 'showRooms',
          title: 'All Rooms',
          type: 'item',
          url: '/dashboard/showRooms',
          target: false
        }
      ]
    },
    {
      id: 'messages',
      title: 'Messages',
      type: 'collapse',
      icon: icons.IconMessage,

      children: [

        {
          id: 'userMessages',
          title: 'User Messages',
          type: 'item',
          url: '/dashboard/userMessages',
          target: false
        },
        {
          id: 'welcomeMessages',
          title: 'Welcome Messages',
          type: 'item',
          url: '/dashboard/welcomeMessages',
          target: false
        }
      ]
    },
    {
      id: 'blocking',
      title: 'Blocking',
      type: 'collapse',
      icon: icons.IconLockAccess,

      children: [

        {
          id: 'userMessages',
          title: 'User Messages',
          type: 'item',
          url: '/dashboard/userMessages',
          target: false
        }
      ]
    },
    {
      id: 'shipping',
      title: 'Shipping',
      type: 'collapse',
      icon: icons.IconTruck,

      children: [
        {
          id: 'shippingActivities',
          title: 'Shipping Activity',
          type: 'item',
          url: '/dashboard/shippingActivities',
          target: false
        },
        {
          id: 'shippingValues',
          title: 'Shipping Values',
          type: 'item',
          url: '/dashboard/shippingValues',
          target: false
        },
        {
          id: 'editAddShippingValue',
          title: 'Edit Add Shipping Value',
          type: 'item',
          url: '/dashboard/editAddShippingValue',
          target: false
        },
      
        {
          id: 'shippingOffers',
          title: 'Shipping Offers',
          type: 'item',
          url: '/dashboard/shippingOffers',
          target: false
        },
        {
          id: 'editAddShippingOffers',
          title: 'Edit Add Shipping Offers',
          type: 'item',
          url: '/dashboard/editAddShippingOffers',
          target: false
        },
        {
          id: 'rechargeWithdrawBalance',
          title: 'Recharge Withdraw Balance',
          type: 'item',
          url: '/dashboard/rechargeWithdrawBalance',
          target: false
        }
      ]
    },
    {
      id: 'store',
      title: 'Store',
      type: 'collapse',
      icon: icons.IconBuildingStore,

      children: [

        {
          id: 'storeDepartments',
          title: 'Store Departments',
          type: 'item',
          url: '/dashboard/storeDepartments',
          target: false
        },
        {
          id: 'editAddDepartments',
          title: 'Edit Add Departments',
          type: 'item',
          url: '/dashboard/editAddDepartments',
          target: false
        },
        {
          id: 'products',
          title: 'Products',
          type: 'item',
          url: '/dashboard/products',
          target: false
        },
        {
          id: 'editAddProducts',
          title: 'Edit Add Products',
          type: 'item',
          url: '/dashboard/editAddProducts',
          target: false
        },
        {
          id: 'rechargeWithdrawBalance',
          title: 'Recharge Withdraw Balance',
          type: 'item',
          url: '/dashboard/rechargeWithdrawBalance',
          target: false
        }
      ]
    },
    {
      id: 'memberGifts',
      title: 'Member gifts',
      type: 'collapse',
      icon: icons.IconGift,

      children: [

        {
          id: 'sendingGifts',
          title: 'Sending Gifts',
          type: 'item',
          url: '/dashboard/sendingGifts',
          target: false
        }
      ]
    },
    {
      id: 'advertisingUnits',
      title: 'Advertising units',
      type: 'collapse',
      icon: icons.IconAd,

      children: [

        {
          id: 'units',
          title: 'Units',
          type: 'item',
          url: '/dashboard/units',
          target: false
        },
        {
          id: 'createModifyUnit',
          title: 'Create Modify Unit',
          type: 'item',
          url: '/dashboard/createModifyUnit',
          target: false
        }
      ]
    },
    {
      id: 'accounts',
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
        },
        {
          id: 'accountsEditing',
          title: 'Accounts Editing',
          type: 'item',
          url: '/dashboard/accountsEditing',
          target: false
        },
        {
          id: 'accountReport',
          title: 'Account Report',
          type: 'item',
          url: '/dashboard/accountReport',
          target: false
        }
      ]
    },
    {
      id: 'activities',
      title: 'Activities',
      type: 'collapse',
      icon: icons.IconActivity,

      children: [

        {
          id: 'addEditingActivities',
          title: 'Add Editing Activities',
          type: 'item',
          url: '/dashboard/addEditingActivities',
          target: false
        }
      ]
    },
    {
      id: 'vipCharacters',
      title: 'VIP Characters',
      type: 'collapse',
      icon: icons.IconUser,

      children: [

        {
          id: 'addVipAccount',
          title: 'Add VIP Account ',
          type: 'item',
          url: '/dashboard/addVipAccount',
          target: false
        }
      ]
    },
    {
      id: 'roomwallpapers',
      title: 'Room Wallpapers',
      type: 'collapse',
      icon: icons.IconPictureInPicture,

      children: [

        {
          id: 'departmentWallpapers',
          title: 'Department Wallpapers',
          type: 'item',
          url: '/dashboard/departmentWallpapers',
          target: false
        },
        {
          id: 'wallpapers',
          title: 'Wallpapers',
          type: 'item',
          url: '/dashboard/wallpapers',
          target: false
        },
        {
          id: 'addEditingWallpapers',
          title: 'Add Editing Wallpapers',
          type: 'item',
          url: '/dashboard/addEditingWallpapers',
          target: false
        }
      ]
    },




    {
      id: 'notifications',
      title: 'Notifications',
      type: 'collapse',
      icon: icons.IconBell,

      children: [

        {
          id: 'activityNotifications',
          title: 'Activity Notifications',
          type: 'item',
          url: '/dashboard/activityNotifications',
          target: false
        },
        {
          id: 'sendNotification',
          title: 'Send Notification',
          type: 'item',
          url: '/dashboard/sendNotification',
          target: false
        }
      ]
    },
    {
      id: 'shippingagenciess',
      title: 'Shipping Agencies',
      type: 'collapse',
      icon: icons.IconTruckDelivery,

      children: [

        {
          id: 'addAgencies',
          title: 'Add Agencies',
          type: 'item',
          url: '/dashboard/addAgencies',
          target: false
        },
        {
          id: 'agencieReports',
          title: 'Agencie Reports',
          type: 'item',
          url: '/dashboard/agencieReports',
          target: false
        }
      ]
    },
    {
      id: 'hostAgencies',
      title: 'Host Agencies',
      type: 'collapse',
      icon: icons.IconServer,

      children: [

        {
          id: 'addAgenciess',
          title: 'Add Agencies',
          type: 'item',
          url: '/dashboard/addAgencies',
          target: false
        },
        {
          id: 'agencieReportss',
          title: 'Agencie Reports',
          type: 'item',
          url: '/dashboard/agencieReports',
          target: false
        }
      ]
    },
    {
      id: 'paymentGateways',
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
      id: 'games',
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
      id: 'supervision',
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
      id: 'reports',
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
      id: 'settings',
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
      id: 'login3',
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
