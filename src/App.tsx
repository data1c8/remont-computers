import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import LaptopRepair from "./pages/LaptopRepair";
import PCRepair from "./pages/PCRepair";
import DataRecovery from "./pages/DataRecovery";
import VirusRemoval from "./pages/VirusRemoval";
import HardwareUpgrade from "./pages/HardwareUpgrade";
import Diagnostics from "./pages/Diagnostics";
import Prices from "./pages/Prices";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Warranty from "./pages/Warranty";
import Delivery from "./pages/Delivery";
import Payment from "./pages/Payment";
import FAQ from "./pages/FAQ";
import Reviews from "./pages/Reviews";
import NetworkSetup from "./pages/NetworkSetup";
import PrinterRepair from "./pages/PrinterRepair";
import TabletRepair from "./pages/TabletRepair";
import EmergencyRepair from "./pages/EmergencyRepair";
import CorporateService from "./pages/CorporateService";
import RemoteSupport from "./pages/RemoteSupport";
import SoftwareInstallation from "./pages/SoftwareInstallation";
import GamePCRepair from "./pages/GamePCRepair";
import ServerMaintenance from "./pages/ServerMaintenance";
import Training from "./pages/Training";
import PartsStore from "./pages/PartsStore";
import Accessories from "./pages/Accessories";
import Blog from "./pages/Blog";
import OrderTracking from "./pages/OrderTracking";
import Promotions from "./pages/Promotions";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/laptop-repair" element={<LaptopRepair />} />
          <Route path="/pc-repair" element={<PCRepair />} />
          <Route path="/data-recovery" element={<DataRecovery />} />
          <Route path="/virus-removal" element={<VirusRemoval />} />
          <Route path="/hardware-upgrade" element={<HardwareUpgrade />} />
          <Route path="/diagnostics" element={<Diagnostics />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/network-setup" element={<NetworkSetup />} />
          <Route path="/printer-repair" element={<PrinterRepair />} />
          <Route path="/tablet-repair" element={<TabletRepair />} />
          <Route path="/emergency-repair" element={<EmergencyRepair />} />
          <Route path="/corporate-service" element={<CorporateService />} />
          <Route path="/remote-support" element={<RemoteSupport />} />
          <Route path="/software-installation" element={<SoftwareInstallation />} />
          <Route path="/game-pc-repair" element={<GamePCRepair />} />
          <Route path="/server-maintenance" element={<ServerMaintenance />} />
          <Route path="/training" element={<Training />} />
          <Route path="/parts-store" element={<PartsStore />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/order-tracking" element={<OrderTracking />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;