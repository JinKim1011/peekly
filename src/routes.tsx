import { Routes, Route } from "react-router-dom";
import { MainNavigation } from "./components/layout/MainNavigation";
import {
  Home as HomeIcon,
  Phone, BookUser,
  Settings as SettingsIcon,
  CircleUserRound
} from "lucide-react";
import { designTokens } from "./design-tokens";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Calls from "./pages/Calls";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
      <MainNavigation
        logo={<span>Logo</span>}
        itemsPrimary={[
          {
            to: "/",
            label: "Home",
            icon: <HomeIcon size={20} strokeWidth={1.5} color={designTokens.colors.glyph.default} />
          },
          {
            to: "/calls",
            label: "Call History",
            icon: <Phone size={20} strokeWidth={1.5} color={designTokens.colors.glyph.default} />
          }
          ,
          {
            to: "/contacts",
            label: "Customers",
            icon: <BookUser size={20} strokeWidth={1.5} color={designTokens.colors.glyph.default} />
          },
        ]}
        itemsSecondary={[
          {
            to: "/settings",
            label: "Settings",
            icon: <SettingsIcon size={20} strokeWidth={1.5} color={designTokens.colors.glyph.default} />
          },
          {
            to: "/profile",
            label: "User Name",
            icon: <CircleUserRound size={20} strokeWidth={1.5} color={designTokens.colors.glyph.default} />
          }
        ]} />
      <div style={{ flex: 1, overflow: 'auto' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/calls" element={<Calls />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
