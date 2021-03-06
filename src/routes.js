// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import SaisiePermission from "views/SaisiePermission/SaisiePermission.jsx";
import SaisieActivite from "views/SaisieActivite/SaisieActivite.jsx";
import GestionReferentiel from "views/GestionReferentiel/GestionReferentiel.jsx";

const recueilActivitesRoutes = [
  {
    path: "/saisie-activite",
    name: "Saisie de l'activité",
    icon: "format_list_numbered",
    component: SaisieActivite,
    layout: "/recueil-activite"
  },
  {
    path: "/saisie-permission",
    name: "Permission",
    icon: "beach_access",
    component: SaisiePermission,
    layout: "/recueil-activite"
  },
  {
    path: "/saisie-ordre-mission",
    name: "Ordre de mission",
    icon: "commute",
    component: DashboardPage,
    layout: "/recueil-activite"
  },
  {
    path: "/gestion-referentiels",
    name: "Gestion des référentiels",
    icon: "style",
    component: GestionReferentiel,
    layout: "/recueil-activite"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Table List",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  }
];

export default recueilActivitesRoutes;
