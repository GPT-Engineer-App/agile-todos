import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, List, Tag, Filter, Settings } from "lucide-react";
import Projects from "./pages/Projects.jsx";
import Labels from "./pages/Labels.jsx";
import Filters from "./pages/Filters.jsx";
import SettingsPage from "./pages/Settings.jsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar"; // Change to sidebar layout
import Index from "./pages/Index.jsx";
const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Projects",
    to: "/projects",
    icon: <List className="h-4 w-4" />,
  },
  {
    title: "Labels",
    to: "/labels",
    icon: <Tag className="h-4 w-4" />,
  },
  {
    title: "Filters",
    to: "/filters",
    icon: <Filter className="h-4 w-4" />,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <Settings className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="projects" element={<Projects />} />
              <Route path="labels" element={<Labels />} />
              <Route path="filters" element={<Filters />} />
              <Route path="settings" element={<SettingsPage />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
