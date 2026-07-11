import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="py-8 md:py-10 flex justify-center items-center">
      <Link
        to="/"
        className="text-2xl font-serif font-bold tracking-tight text-white/90 hover:text-white transition-colors"
      >
        Lassi<span className="text-indigo-500">.</span>
      </Link>
    </header>
  );
};
