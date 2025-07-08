
import { GlassButton } from './GlassButton';
import { VerticalStripButton } from './VerticalStripButton';

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center p-8 relative">
      {/* Your face as background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <img 
          src="/lovable-uploads/acf1d6ba-9122-4871-ad09-f8b6bbcb3090.png" 
          alt="KombatStudio Founder"
          className="absolute top-10 left-10 w-32 h-32 rounded-full object-cover opacity-30 animate-pulse"
        />
        <img 
          src="/lovable-uploads/acf1d6ba-9122-4871-ad09-f8b6bbcb3090.png" 
          alt="KombatStudio Founder"
          className="absolute bottom-20 right-20 w-24 h-24 rounded-full object-cover opacity-20 animate-bounce"
        />
        <img 
          src="/lovable-uploads/acf1d6ba-9122-4871-ad09-f8b6bbcb3090.png" 
          alt="KombatStudio Founder"
          className="absolute top-1/2 left-20 w-28 h-28 rounded-full object-cover opacity-15 animate-ping"
        />
      </div>

      <div className="text-center z-10">
        <h1 className="text-8xl font-bold mb-6 neon-text text-cyan-400 glitch" data-text="KOMBAT">
          KOMBAT
        </h1>
        <h2 className="text-6xl font-bold mb-8 neon-text text-purple-400 glitch" data-text="STUDIO">
          STUDIO
        </h2>
        <p className="text-2xl mb-12 text-gray-300 max-w-2xl">
          Balıkesir Karesi'den gelen video oyunları ve grafiti sanatının buluşma noktası. 
          Teknolojik sanatın sınırlarını zorluyoruz.
        </p>
        
        {/* Main face with glass effect */}
        <div className="glass-button p-4 mb-8 inline-block">
          <img 
            src="/lovable-uploads/acf1d6ba-9122-4871-ad09-f8b6bbcb3090.png" 
            alt="KombatStudio Founder"
            className="w-32 h-32 rounded-full object-cover border-4 border-cyan-400 shadow-lg shadow-cyan-400/50"
          />
        </div>

        {/* Vertical strip buttons */}
        <div className="flex gap-4 justify-center">
          <VerticalStripButton color="cyan">OYUNLAR</VerticalStripButton>
          <VerticalStripButton color="purple">GRAFİTİ</VerticalStripButton>
          <VerticalStripButton color="orange">İLETİŞİM</VerticalStripButton>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-orange-400 rounded-full animate-bounce" />
      </div>
    </section>
  );
};
