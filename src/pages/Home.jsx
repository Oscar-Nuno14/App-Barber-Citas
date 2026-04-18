import HeroSection from '../components/HeroSection';
import WhyUs from '../components/WhyUs';
import BottomNav from '../components/BottomNav';

function Home() {
  return (
    <div className="min-h-screen">

      {/* Contenido */}
      <div className="pb-16"> {/* espacio para el menú */}
        <HeroSection />
        <WhyUs />
      </div>

      {/* Menú abajo */}
      <BottomNav />

    </div>
  );
}

export default Home;