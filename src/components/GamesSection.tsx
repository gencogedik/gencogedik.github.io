
import { VerticalStripButton } from './VerticalStripButton';

export const GamesSection = () => {
  const games = [
    {
      title: 'CYBER WARRIOR',
      description: 'Gelecekteki savaşların dijital dünyası',
      tech: 'Unity 3D',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'NEON RUNNER',
      description: 'Karanlık şehirde hız ve aksiyon',
      tech: 'Unreal Engine',
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'PIXEL LEGENDS',
      description: 'Retro tarzda modern macera',
      tech: 'GameMaker',
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section className="min-h-screen p-8 flex flex-col justify-center relative">
      {/* Your face watermarks */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <img 
          src="/lovable-uploads/acf1d6ba-9122-4871-ad09-f8b6bbcb3090.png" 
          alt="Creator"
          className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full object-cover animate-pulse"
        />
        <img 
          src="/lovable-uploads/acf1d6ba-9122-4871-ad09-f8b6bbcb3090.png" 
          alt="Creator"
          className="absolute bottom-1/4 left-1/4 w-36 h-36 rounded-full object-cover animate-bounce"
        />
      </div>

      <h2 className="text-6xl font-bold mb-12 text-center neon-text text-cyan-400">
        VİDEO OYUNLARI
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {games.map((game, index) => (
          <div
            key={index}
            className="glass-button p-8 h-80 flex flex-col justify-between transform hover:scale-105 transition-all duration-300 relative"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Your face in each game card */}
            <div className="absolute top-4 right-4 opacity-20">
              <img 
                src="/lovable-uploads/acf1d6ba-9122-4871-ad09-f8b6bbcb3090.png" 
                alt="Creator"
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
            
            <div className={`w-full h-32 bg-gradient-to-br ${game.color} rounded-lg mb-4 opacity-80 relative overflow-hidden`}>
              <img 
                src="/lovable-uploads/acf1d6ba-9122-4871-ad09-f8b6bbcb3090.png" 
                alt="Game Developer"
                className="absolute bottom-2 right-2 w-8 h-8 rounded-full object-cover opacity-60"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-white">{game.title}</h3>
              <p className="text-gray-300 mb-3">{game.description}</p>
              <span className="text-sm text-cyan-400 font-semibold">{game.tech}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <VerticalStripButton color="green">DAHA FAZLA OYUN</VerticalStripButton>
      </div>
    </section>
  );
};
