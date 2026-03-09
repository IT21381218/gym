import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingJoinButton from "./components/FloatingJoinButton";
import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Membership from "./pages/Membership";
import Trainers from "./pages/Trainers";
import Transformations from "./pages/Transformations";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import FreeTrial from "./pages/FreeTrial";
import BMICalculator from "./pages/BMICalculator";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/transformations" element={<Transformations />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/free-trial" element={<FreeTrial />} />
            <Route path="/bmi-calculator" element={<BMICalculator />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <FloatingJoinButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
