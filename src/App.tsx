import { useState, useCallback } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Loader from "@/components/Loader";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false); // controls hero entry animation

  const handleLoadComplete = useCallback(() => {
    setLoading(false);
    // Slight delay then trigger hero entry
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setVisible(true));
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {loading && <Loader onComplete={handleLoadComplete} />}
        <div
          className="site-entry"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
            // Keep in DOM so assets preload, but invisible until loader exits
            visibility: loading ? "hidden" : "visible",
            pointerEvents: loading ? "none" : "auto",
          }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
