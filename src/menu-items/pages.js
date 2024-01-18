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
          title: 'Messages',
          type: 'collapse',
          url: '/dashboard/userMessages',
          target: false,
          children: [
            {
              id: 'welcomeMessages',
              title: 'Welcome Messages',
              type: 'item',
              url: '/dashboard/welcomeMessages',
              target: false
            },
            {
              id: 'userMessages',
              title: 'User Messages',
              type: 'item',
              url: '/dashboard/userMessages',
              target: false
            }
          ]
        }
      ]
    }
,    
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
          id: 'storeActivity',
          title: 'Store Activity',
          type: 'item',
          url: '/dashboard/storeActivity',
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
          id: 'rechargeWithdrawBalancee',
          title: 'Recharge Withdraw Balance',
          type: 'item',
          url: '/dashboard/rechargeWithdrawBalancee',
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
          id: 'shippingOffers',
          title: 'Shipping Offers',
          type: 'item',
          url: '/dashboard/shippingOffers',
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
        },
        {
          id: 'giftsActivity',
          title: 'Gifts Activity',
          type: 'item',
          url: '/dashboard/giftsActivity',
          target: false
        },
        {
          id: 'giftReports',
          title: 'Gift Reports',
          type: 'item',
          url: '/dashboard/giftReports',
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
          id: 'unitActivities',
          title: 'Unit Activities',
          type: 'item',
          url: '/dashboard/unitActivities',
          target: false
        },
       
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
          title: 'Activities',
          type: 'item',
          url: '/dashboard/addEditingActivities',
          target: false
        },
        {
          id: 'activityReports',
          title: 'Activity Reports',
          type: 'item',
          url: '/dashboard/activityReports',
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
        },
        {
          id: 'paymentHistory',
          title: 'Payment History',
          type: 'item',
          url: '/dashboard/paymentHistory',
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
        },
        {
          id: 'gameActivity',
          title: 'Game Activity',
          type: 'item',
          url: '/dashboard/gameActivity',
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
          id: 'supervisor',
          title: 'Supervisor',
          type: 'item',
          url: '/dashboard/supervisor',
          target: false
        },
        {
          id: 'supervisorReports',
          title: 'Supervisor Reports',
          type: 'item',
          url: '/dashboard/supervisorReports',
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
          id: 'newusers',
          title: 'New Users',
          type: 'item',
          url: '/dashboard/newusers',
          target: false
        },
        {
          id: 'payments',
          title: 'Payments',
          type: 'item',
          url: '/dashboard/payments',
          target: false
        },
      
       
        {
          id: 'roomReports',
          title: 'Room Reports',
          type: 'item',
          url: '/dashboard/roomReports',
          target: false
        },
        {
          id: 'shippingAgiencies',
          title: 'Shipping Agiencies',
          type: 'item',
          url: '/dashboard/shippingAgiencies',
          target: false
        },
        {
          id: 'hostAgiencies',
          title: 'Host Agiencies',
          type: 'item',
          url: '/dashboard/hostAgiencies',
          target: false
        },
        {
          id: 'hostReport',
          title: 'Host Report',
          type: 'item',
          url: '/dashboard/hostReport',
          target: false
        },
        {
          id: 'supervisor',
          title: 'Supervisor',
          type: 'item',
          url: '/dashboard/supervisor',
          target: false
        },
        {
          id: 'advertisementReport',
          title: 'Advertisement Report',
          type: 'item',
          url: '/dashboard/advertisementReport',
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
          id: 'activateMultiplicity',
          title: 'Activate Multiplicity',
          type: 'item',
          url: '/dashboard/activateMultiplicity',
          target: false
        },
        {
          id: 'bannedCountries',
          title: 'Banned Countries',
          type: 'item',
          url: '/dashboard/bannedCountries',
          target: false
        },
        {
          id: 'changeAdvertisingCodes',
          title: 'Change Advertising Codes',
          type: 'item',
          url: '/dashboard/changeAdvertisingCodes',
          target: false
        },
        {
          id: 'language',
          title: 'Language',
          type: 'item',
          url: '/dashboard/language',
          target: false
        },
        {
          id: 'prohibitedWords',
          title: 'Prohibited Words',
          type: 'item',
          url: '/dashboard/prohibitedWords',
          target: false
        },
        {
          id: 'backup',
          title: 'Backup',
          type: 'item',
          url: '/dashboard/backup',
          target: false
        },
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
