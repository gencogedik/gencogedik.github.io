
export const ParadoxShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="paradox-shape w-32 h-32 top-20 left-20 border-cyan-400" />
      <div className="paradox-shape w-24 h-24 top-60 right-32 border-purple-400" style={{ animationDelay: '2s' }} />
      <div className="paradox-shape w-40 h-40 bottom-20 left-40 border-pink-400" style={{ animationDelay: '4s' }} />
      <div className="paradox-shape w-28 h-28 top-32 right-64 border-yellow-400" style={{ animationDelay: '6s' }} />
      <div className="paradox-shape w-36 h-36 bottom-40 right-20 border-green-400" style={{ animationDelay: '8s' }} />
    </div>
  );
};
