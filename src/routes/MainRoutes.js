import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const Rooms = Loadable(lazy(() => import('views/pages/rooms')));
const Prizes = Loadable(lazy(() => import('views/pages/prizes')));
const Emoji = Loadable(lazy(() => import('views/pages/emoji')));
const Messages = Loadable(lazy(() => import('views/pages/messages')));
const Blocking = Loadable(lazy(() => import('views/pages/blocking')));
const Shipping = Loadable(lazy(() => import('views/pages/shipping')));
const Store = Loadable(lazy(() => import('views/pages/store')));
const MemberGifts = Loadable(lazy(() => import('views/pages/memberGifts')));
const AdvertisingUnits = Loadable(lazy(() => import('views/pages/advertisingUnits')));
const Accounts = Loadable(lazy(() => import('views/pages/accounts')));
const Activities = Loadable(lazy(() => import('views/pages/activities')));
const VipCharacters = Loadable(lazy(() => import('views/pages/vipCharacters')));
const Roomwallpapers = Loadable(lazy(() => import('views/pages/roomwallpapers')));
const Notifications = Loadable(lazy(() => import('views/pages/notifications')));
const ShippingAgenciess = Loadable(lazy(() => import('views/pages/shippingAgenciess')));
const HostAgencies = Loadable(lazy(() => import('views/pages/hostAgencies')));
const PaymentGateways = Loadable(lazy(() => import('views/pages/paymentGateways')));
const Games = Loadable(lazy(() => import('views/pages/games')));
const Supervision = Loadable(lazy(() => import('views/pages/supervision')));
const Reports = Loadable(lazy(() => import('views/pages/reports')));
const Settings = Loadable(lazy(() => import('views/pages/settings')));
const Departments = Loadable(lazy(() => import('views/pages/emoji/departments')));
const Symbols = Loadable(lazy(() => import('views/pages/emoji/symbols')));
const AllEmoji = Loadable(lazy(() => import('views/pages/emoji/allEmoji')));
const DepartmentsPrizes = Loadable(lazy(() => import('views/pages/prizes/departments')));
const Prize = Loadable(lazy(() => import('views/pages/prizes/prizes')));
const AllPrizes = Loadable(lazy(() => import('views/pages/prizes/allPrizes')));


// utilities routing
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
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'statistics',
          element: <DashboardDefault />
        },
        {
          path: 'prizes',
          element: <Prizes />
        },
        {
          path: 'emoji',
          element: <Emoji />
        },
        {
          path: 'rooms',
          element: <Rooms />
        },
        {
          path: 'messages',
          element: <Messages />
        },
        {
          path: 'blocking',
          element: <Blocking />
        },
        {
          path: 'shipping',
          element: <Shipping />
        },
        {
          path: 'store',
          element: <Store />
        },
        {
          path: 'memberGifts',
          element: <MemberGifts />
        },
        {
          path: 'advertisingUnits',
          element: <AdvertisingUnits />
        },
        {
          path: 'accounts',
          element: <Accounts />
        },
        {
          path: 'activities',
          element: <Activities />
        },
        {
          path: 'vipCharacters',
          element: <VipCharacters />
        },
        {
          path: 'roomwallpapers',
          element: <Roomwallpapers />
        },
        {
          path: 'notifications',
          element: <Notifications />
        },
        {
          path: 'shippingagenciess',
          element: <ShippingAgenciess />
        },
        {
          path: 'hostAgencies',
          element: <HostAgencies />
        },
        {
          path: 'paymentGateways',
          element: <PaymentGateways />
        },
        {
          path: 'games',
          element: <Games />
        },
        {
          path: 'supervision',
          element: <Supervision />
        },
        {
          path: 'reports',
          element: <Reports />
        },
        {
          path: 'settings',
          element: <Settings />
        },
        {
          path: 'departments',
          element: <Departments />
        },
        {
          path: 'symbols',
          element: <Symbols />
        },
        {
          path: 'allEmoji',
          element: <AllEmoji />
        },
        {
          path: 'departmentsPrizes',
          element: <DepartmentsPrizes />
        },
        {
          path: 'prize',
          element: <Prize />
        },
        {
          path: 'allPrizes',
          element: <AllPrizes />
        },
        
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-typography',
          element: <UtilsTypography />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-color',
          element: <UtilsColor />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'tabler-icons',
          element: <UtilsTablerIcons />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'material-icons',
          element: <UtilsMaterialIcons />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;
