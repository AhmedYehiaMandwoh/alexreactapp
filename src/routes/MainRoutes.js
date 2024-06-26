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
const Activities = Loadable(lazy(() => import('views/pages/activities')));
const VipCharacters = Loadable(lazy(() => import('views/pages/vipCharacters')));
const Roomwallpapers = Loadable(lazy(() => import('views/pages/roomwallpapers')));
const Notifications = Loadable(lazy(() => import('views/pages/notifications')));
const ShippingAgenciess = Loadable(lazy(() => import('views/pages/shippingAgenciess')));
const HostAgencies = Loadable(lazy(() => import('views/pages/hostAgencies')));
const PaymentGateways = Loadable(lazy(() => import('views/pages/paymentGateways/paymentGeteway')));
const PaymentHistory = Loadable(lazy(() => import('views/pages/paymentGateways/paymentHistory')));
const Games = Loadable(lazy(() => import('views/pages/games/games')));
const GameActivity = Loadable(lazy(() => import('views/pages/games/gameActivity')));
const Supervision = Loadable(lazy(() => import('views/pages/supervision/supervisor')));
const SupervisorReports = Loadable(lazy(() => import('views/pages/supervision/supervisorReports')));
const Reports = Loadable(lazy(() => import('views/pages/reports/newUsers')));
const Settings = Loadable(lazy(() => import('views/pages/settings')));
const Departments = Loadable(lazy(() => import('views/pages/emoji/departments')));
const Symbols = Loadable(lazy(() => import('views/pages/emoji/symbols')));
const AllEmoji = Loadable(lazy(() => import('views/pages/emoji/allEmoji')));
const DepartmentsPrizes = Loadable(lazy(() => import('views/pages/prizes/departments')));
const Prize = Loadable(lazy(() => import('views/pages/prizes/prizes')));
const AllPrizes = Loadable(lazy(() => import('views/pages/prizes/allPrizes')));
const CreateARoom = Loadable(lazy(() => import('views/pages/rooms/createARoom')));
const RoomEditing = Loadable(lazy(() => import('views/pages/rooms/roomEditing')));
const ShowRooms = Loadable(lazy(() => import('views/pages/rooms/showRooms')));
const UserMessages = Loadable(lazy(() => import('views/pages/messages/userMessages')));
const WelcomeMessages = Loadable(lazy(() => import('views/pages/messages/welcomeMessages')));
const UserMessage = Loadable(lazy(() => import('views/pages/blocking/userMessages')));
const ShippingValues = Loadable(lazy(() => import('views/pages/shipping/shippingValues')));
const EditAddShippingValue = Loadable(lazy(() => import('views/pages/shipping/editAddShippingValue')));
const ShippingOffers = Loadable(lazy(() => import('views/pages/shipping/shippingOffers')));
const EditAddShippingOffers = Loadable(lazy(() => import('views/pages/shipping/editAddShippingOffers')));
const RechargeWithdrawBalance = Loadable(lazy(() => import('views/pages/shipping/rechargeWithdrawBalance')));
const StoreDepartments = Loadable(lazy(() => import('views/pages/store/storeDepartments')));
const Products = Loadable(lazy(() => import('views/pages/store/products')));
const RechargeWithdrawBalancee = Loadable(lazy(() => import('views/pages/store/rechargeWithdrawBalance')));
const SendingGifts = Loadable(lazy(() => import('views/pages/memberGifts/sendingGifts')));
const  UnitActivities = Loadable(lazy(() => import('views/pages/advertisingUnits/unitActivities')));
const Units = Loadable(lazy(() => import('views/pages/advertisingUnits/units')));
const CreateModifyUnit = Loadable(lazy(() => import('views/pages/advertisingUnits/createModifyUnit')));
const Accounts = Loadable(lazy(() => import('views/pages/accounts/accounts')));
const AccountsEditing = Loadable(lazy(() => import('views/pages/accounts/accountsEditing')));
const AccountReport = Loadable(lazy(() => import('views/pages/accounts/accountReport')));
const AddEditingActivities = Loadable(lazy(() => import('views/pages/activities/addEditingActivities')));
const AddVipAccount = Loadable(lazy(() => import('views/pages/vipCharacters/addVipAccount')));
const DepartmentWallpapers = Loadable(lazy(() => import('views/pages/roomwallpapers/departmentWallpapers')));
const Wallpapers = Loadable(lazy(() => import('views/pages/roomwallpapers/wallpapers')));
const AddEditingWallpapers = Loadable(lazy(() => import('views/pages/roomwallpapers/addEditingWallpapers')));
const ActivityNotifications = Loadable(lazy(() => import('views/pages/notifications/activityNotifications')));
const SendNotification = Loadable(lazy(() => import('views/pages/notifications/sendNotification')));
const AddAgencies = Loadable(lazy(() => import('views/pages/shippingAgenciess/addAgencies')));
const AgencieReports = Loadable(lazy(() => import('views/pages/shippingAgenciess/agencieReports')));
const AddAgenciess = Loadable(lazy(() => import('views/pages/hostAgencies/addAgencies')));
const AgencieReportss = Loadable(lazy(() => import('views/pages/hostAgencies/agencieReports')));
const ShippingActivities = Loadable(lazy(() => import('views/pages/shipping/shippingActivity')));
const StoreActivity = Loadable(lazy(() => import('views/pages/store/storeActivity')));
const GiftsActivity = Loadable(lazy(() => import('views/pages/memberGifts/giftsActivity')));
const GiftReports = Loadable(lazy(() => import('views/pages/memberGifts/giftReports')));
const ActivityReports = Loadable(lazy(() => import('views/pages/activities/activityReports')));
const Payments = Loadable(lazy(() => import('views/pages/reports/payments')));
const RoomReports = Loadable(lazy(() => import('views/pages/reports/roomReports')));
const ShippingAgiencies = Loadable(lazy(() => import('views/pages/reports/shippingAgiencies')));
const HostAgiencies = Loadable(lazy(() => import('views/pages/reports/hostAgiencies')));
const HostReport = Loadable(lazy(() => import('views/pages/reports/hostReport')));
const Supervisor = Loadable(lazy(() => import('views/pages/reports/supervisor')));
const AdvertisementReport = Loadable(lazy(() => import('views/pages/reports/advertisementReport')));
    
const ActivateMultiplicity = Loadable(lazy(() => import('views/pages/settings/activateMultiplicity')));
const  BannedCountries = Loadable(lazy(() => import('views/pages/settings/bannedCountries')));
const ChangeAdvertisingCodes = Loadable(lazy(() => import('views/pages/settings/changeAdvertisingCodes')));
const Language = Loadable(lazy(() => import('views/pages/settings/language')));
const ProhibitedWords = Loadable(lazy(() => import('views/pages/settings/prohibitedWords')));
const Backup = Loadable(lazy(() => import('views/pages/settings/backup')));
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
          path: 'addEditingActivities',
          element: <AddEditingActivities />
        },
        {
          path: 'addVipAccount',
          element: <AddVipAccount />
        },
        
        
        {
          path: 'departmentWallpapers',
          element: <DepartmentWallpapers />
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
          path: 'agencieReports',
          element: <AgencieReportss />
        },
        {
          path: 'agencieReports',
          element: <AgencieReports />
        },
        {
          path: 'addAgencies',
          element: <AddAgenciess />
        },
        {
          path: 'addAgencies',
          element: <AddAgencies />
        },
        {
          path: 'activityNotifications',
          element: <ActivityNotifications />
        },
        
        {
          path: 'shipping',
          element: <Shipping />
        },
        {
          path: 'shippingActivities',
          element: <ShippingActivities />
        },
        {
          path: 'store',
          element: <Store />
        },
        {
          path: 'storeActivity',
          element: <StoreActivity />
        },
        
        {
          path: 'memberGifts',
          element: <MemberGifts />
        },
        {
          path: 'activityReports',
          element: <ActivityReports />
        },
        
        {
          path: 'advertisingUnits',
          element: <AdvertisingUnits />
        },
        {
          path: 'accountsEditing',
          element: <AccountsEditing />
        },
        {
          path: 'accountReport',
          element: <AccountReport />
        },
        {
          path: 'wallpapers',
          element: <Wallpapers />
        },
        
{
  path: 'advertisementReport',
  element: <AdvertisementReport />
},
{
  path: 'supervisor',
  element: <Supervisor />
},
{
  path: 'activateMultiplicity',
  element: <ActivateMultiplicity />
},
{
  path: 'bannedCountries',
  element: <BannedCountries />
},
{
  path: 'changeAdvertisingCodes',
  element: <ChangeAdvertisingCodes />
},
{
  path: 'language',
  element: <Language />
},
{
  path: 'backup',
  element: <Backup />
},
{
  path: 'prohibitedWords',
  element: <ProhibitedWords />
},
{
  path: 'shippingAgiencies',
  element: <ShippingAgiencies />
},

{
  path: 'hostReport',
  element: <HostReport />
},
{
  path: 'hostAgiencies',
  element: <HostAgiencies />
},
        {
          path: 'addEditingWallpapers',
          element: <AddEditingWallpapers />
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
          path: 'paymentHistory',
          element: <PaymentHistory />
        },
        {
          path: 'games',
          element: <Games />
        },
        {
          path: 'gameActivity',
          element: <GameActivity />
        },
        
        {
          path: 'supervisor',
          element: <Supervision />
          
        },
        {
          path: 'supervisorReports',
          element: <SupervisorReports />
          
        },
        {
          path: 'newUsers',
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
          path: 'payments',
          element: <Payments />
        },
        {
          path: 'roomReports',
          element: <RoomReports />
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
          path: 'unitActivities',
          element: <UnitActivities />
        },
        {
          path: 'prize',
          element: <Prize />
        },
        {
          path: 'allPrizes',
          element: <AllPrizes />
        },
        {
          path: 'createARoom',
          element: <CreateARoom />
        },
        {
          path: 'roomEditing',
          element: <RoomEditing />
        },
        {
          path: 'showRooms',
          element: <ShowRooms />
        },
        {
          path: 'userMessages',
          element: <UserMessages />
        },
        {
          path: 'welcomeMessages',
          element: <WelcomeMessages />
        },
        {
          path: 'userMessage',
          element: <UserMessage />
        },
        {
          path: 'shippingValues',
          element: <ShippingValues />
        },
        {
          path: 'editAddShippingValue',
          element: <EditAddShippingValue />
        },
        {
          path: 'shippingOffers',
          element: <ShippingOffers />
        },
        {
          path: 'editAddShippingOffers',
          element: <EditAddShippingOffers />
        },
        {
          path: 'rechargeWithdrawBalance',
          element: <RechargeWithdrawBalance />
        },
        {
          path: 'storeDepartments',
          element: <StoreDepartments />
        },
        
        {
          path: 'products',
          element: <Products />
        },
        
        {
          path: 'rechargeWithdrawBalancee',
          element: <RechargeWithdrawBalancee />
        },
        {
          path: 'sendingGifts',
          element: <SendingGifts />
        },
        {
          path: 'giftsActivity',
          element: <GiftsActivity />
        },
        {
          path: 'giftReports',
          element: <GiftReports />
        },
        {
          path: 'units',
          element: <Units />
        },
        {
          path: 'createModifyUnit',
          element: <CreateModifyUnit />
        },
        {
          path: 'sendNotification',
          element: <SendNotification />
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
