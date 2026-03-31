import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutCSI from "@/components/AboutCSI";
import HostInstitution from "@/components/HostInstitution";
import WhyParticipate from "@/components/WhyParticipate";
import Agenda from "@/components/Agenda";
import Registration from "@/components/Registration";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NeonLines from "@/components/NeonLines";

const Index = () => (
  <div className="min-h-screen bg-background">
    <NeonLines />
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
