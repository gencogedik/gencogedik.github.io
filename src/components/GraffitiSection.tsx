
import { VerticalStripButton } from './VerticalStripButton';

export const GraffitiSection = () => {
  const artworks = [
    {
      title: 'DİJİTAL DUVARLAR',
      location: 'Karesi Merkez',
      style: 'Teknolojik Sanat',
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'NEON GECELERİ',
      location: 'Eski Şehir',
      style: 'Siber Punk',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      title: 'URBAN KODLAR',
      location: 'Yeni Mahalle',
      style: 'Minimal Tekno',
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  return (
    <section className="min-h-screen p-8 flex flex-col justify-center relative">
      {/* Your face as artistic elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <img 
          src="/lovable-uploads/acf1d6ba-9122-4871-ad09-f8b6bbcb3090.png" 
          alt="Artist"
          className="absolute top-20 left-1/3 w-32 h-32 rounded-full object-cover filter sepia contrast-150 hue-rotate-90"
        />
        <img 
          src="/lovable-uploads/acf1d6ba-9122-4871-ad09-f8b6bbcb3090.png" 
          alt="Artist"
          className="absolute bottom-32 right-1/3 w-28 h-28 rounded-full object-cover filter sepia contrast-150 hue-rotate-180"
        />
      </div>

      <h2 className="text-6xl font-bold mb-12 text-center neon-text text-purple-400">
        GRAFİTİ SANATI
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {artworks.map((art, index) => (
          <div
            key={index}
            className="glass-button p-8 h-96 flex flex-col justify-between transform hover:scale-105 transition-all duration-300 relative"
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            {/* Your face integrated into artwork */}
            <div className={`w-full h-40 bg-gradient-to-br ${art.color} rounded-lg mb-4 opacity-90 relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <span className="text-white font-bold text-xl">#{art.title}</span>
              </div>
              <img 
                src="/lovable-uploads/acf1d6ba-9122-4871-ad09-f8b6bbcb3090.png" 
                alt="Graffiti Artist"
                className="absolute top-2 left-2 w-10 h-10 rounded-full object-cover opacity-70 border-2 border-white"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-white">{art.title}</h3>
              <p className="text-cyan-400 mb-1 font-semibold">📍 {art.location}</p>
              <p className="text-gray-300 mb-3">{art.style}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <VerticalStripButton color="pink">GALERİYİ GÖR</VerticalStripButton>
      </div>
    </section>
  );
};
