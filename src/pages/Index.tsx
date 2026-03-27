import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutCSI from "@/components/AboutCSI";
import HostInstitution from "@/components/HostInstitution";
import WhyParticipate from "@/components/WhyParticipate";
import Agenda from "@/components/Agenda";
import Registration from "@/components/Registration";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <AboutCSI />
    <HostInstitution />
    <WhyParticipate />
    <Agenda />
    <Registration />
    <Contact />
    <Footer />
  </div>
);

export default Index;
