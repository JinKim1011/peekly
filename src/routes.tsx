import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Calls from "./pages/Calls";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contacts">Customers</Link>
        <Link to="/calls">Call History</Link>
        <Link to="/settings">Settings</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/calls" element={<Calls />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
