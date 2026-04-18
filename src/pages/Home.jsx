import Sliderbar from './Sliderbar';
import HeroSection from '../components/HeroSection';
import WhyUs from '../components/WhyUs';

function Home() {
  return (
    <div className='flex'>
      <Sliderbar />

      <div className='flex-1'>
        <HeroSection />
        <WhyUs />
      </div>
    </div>
  );
}

export default Home;