
export const AboutSection = () => {
  return (
    <section className="min-h-screen p-8 flex flex-col justify-center items-center relative">
      {/* Your face background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {[...Array(8)].map((_, i) => (
          <img 
            key={i}
            src="/lovable-uploads/acf1d6ba-9122-4871-ad09-f8b6bbcb3090.png" 
            alt="Founder"
            className={`absolute w-24 h-24 rounded-full object-cover animate-pulse`}
            style={{
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl text-center z-10">
        <h2 className="text-6xl font-bold mb-12 neon-text text-pink-400">
          HAKKIMIZDA
        </h2>
        
        <div className="glass-button p-12 text-left relative">
          {/* Main founder photo */}
          <div className="float-right ml-8 mb-4">
            <img 
              src="/lovable-uploads/acf1d6ba-9122-4871-ad09-f8b6bbcb3090.png" 
              alt="KombatStudio Kurucusu"
              className="w-40 h-40 rounded-full object-cover border-4 border-cyan-400 shadow-lg shadow-cyan-400/50"
            />
          </div>

          <p className="text-xl mb-6 leading-relaxed text-gray-200">
            <span className="text-cyan-400 font-bold">KombatStudio</span>, Balıkesir Karesi'den doğan 
            yaratıcı bir kolektiftir. Video oyunları ve grafiti sanatını bir araya getirerek, 
            teknolojik sanatın sınırlarını zorlayan projeler üretiyoruz.
          </p>
          
          <p className="text-xl mb-6 leading-relaxed text-gray-200">
            Şehrimizin duvarlarından dijital ekranlara, geleneksel sanattan modern teknolojiye 
            uzanan bir yolculukta, <span className="text-purple-400 font-bold">paradokslarla</span> 
            dolu eserler yaratıyoruz.
          </p>
          
          <div className="grid grid-cols-2 gap-8 mt-12 clear-both">
            <div className="text-center relative">
              <img 
                src="/lovable-uploads/acf1d6ba-9122-4871-ad09-f8b6bbcb3090.png" 
                alt="Gaming"
                className="absolute top-0 right-0 w-8 h-8 rounded-full object-cover opacity-30"
              />
              <div className="text-4xl font-bold text-cyan-400 mb-2">15+</div>
              <div className="text-gray-300">Oyun Projesi</div>
            </div>
            <div className="text-center relative">
              <img 
                src="/lovable-uploads/acf1d6ba-9122-4871-ad09-f8b6bbcb3090.png" 
                alt="Art"
                className="absolute top-0 right-0 w-8 h-8 rounded-full object-cover opacity-30"
              />
              <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300">Grafiti Eseri</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
