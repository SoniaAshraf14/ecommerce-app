// sidebarData.js
import DashboardIcon from "../../assets/sideBardIcons/DashboardSvg.jsx";
import DrillLibraryIcon from "../../assets/sideBardIcons/DrillLibrary.jsx";
import LeaderboardIcon from "../../assets/sideBardIcons/Leaderboard.jsx";
import SettingIcon from "../../assets/sideBardIcons/Setting.jsx";

export const sidebarData = [
  { 
    path: "/dashboard", 
    name: "Dashboard", 
    icon: DashboardIcon },
  { 
    path: "/drill-library", 
    name: "Drill Library", 
    icon: DrillLibraryIcon
  },
  { 
    path: "/leader-board", 
    name: "Leaderboard", 
    icon: LeaderboardIcon 
  },
   { 
    path: "/setting", 
    name: "Setting", 
    icon: SettingIcon 
  },
];

export default sidebarData;