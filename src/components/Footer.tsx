export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Lassi Health, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <button className="text-xs text-slate-600 hover:text-indigo-400 transition-colors">Privacy Policy</button>
            <span className="text-slate-800 text-xs">|</span>
            <button className="text-xs text-slate-600 hover:text-indigo-400 transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
