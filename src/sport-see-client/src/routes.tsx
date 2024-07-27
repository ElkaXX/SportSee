import Dashboard from "./components/Dashboard/Dashboard";
import CommunicationPage from "./pages/Communication/CommunicationPage";
import HomePage from "./pages/Home/HomePage";
import ProfilePage from "./pages/Profile/ProfilePage";
import SettingsPage from "./pages/Settings/SettingsPage";

export enum RoutePath {
  HOME = "/",
  Dashboard = "/dashboard/:userId",
  PROFILE = "/profile",
  SETTINGS = "/settings",
  COMMUNICATION = "/communication",
}

const routes = [
  {
    path: RoutePath.HOME,
    label: "Accueil",
    element: <HomePage />,
  },
  {
    path: RoutePath.Dashboard,
    element: <Dashboard />,
  },
  {
    path: RoutePath.PROFILE,
    label: "Profil",
    element: <ProfilePage />,
  },
  {
    path: RoutePath.SETTINGS,
    label: "Réglage",
    element: <SettingsPage />,
  },
  {
    path: RoutePath.COMMUNICATION,
    label: "Communauté",
    element: <CommunicationPage />,
  },
];

export default routes;
