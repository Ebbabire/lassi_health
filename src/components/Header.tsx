export const Header = () => {
  return (
    <header className="py-12 flex justify-center items-center">
      <div className="flex items-center gap-3">
      <div className="h-9 w-9 bg-indigo-500 rounded-lg flex items-center justify-center shadow-sm">
            <span className="text-[#ffffff] font-bold text-lg">L</span>
          </div>
        <span className="text-2xl font-serif font-bold tracking-tight text-white">
          Lassi<span className="text-indigo-500">.</span>health
        </span>
      </div>
    </header>
  );
};
