
import { MouseTracker } from '../components/MouseTracker';
import { ParadoxShapes } from '../components/ParadoxShapes';
import { HeroSection } from '../components/HeroSection';
import { GamesSection } from '../components/GamesSection';
import { GraffitiSection } from '../components/GraffitiSection';
import { AboutSection } from '../components/AboutSection';

const Index = () => {
  return (
    <div className="grid-bg">
      <MouseTracker />
      <ParadoxShapes />
      
      <div className="sideways-container">
        <div className="sideways-content">
          <HeroSection />
          <GamesSection />
          <GraffitiSection />
          <AboutSection />
        </div>
      </div>
    </div>
  );
};

export default Index;
