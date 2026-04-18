import HeroSection from '../components/HeroSection';
import WhyUs from '../components/WhyUs';
import BottomNav from '../components/BottomNav';
import CTASection from "../components/CTASection";

function Home() {
  return (
    <div className="min-h-screen">

      {/* Contenido */}
      <div className="pb-16"> {/* espacio para el menú */}
        <HeroSection />
        <WhyUs />
        <CTASection /> 
      </div>

      {/* Menú abajo */}
      <BottomNav />

    </div>
  );
}

export default Home;