import { FaLinkedin } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const LINKEDIN_URL = "https://www.linkedin.com/in/lee-yanik-31ab6733b/";

export const Footer = () => {
  const location = useLocation();
  const isAvma = location.pathname === "/avma";

  return (
    <footer className="py-12 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-slate-200 transition-colors"
          aria-label="Lee Yanik on LinkedIn"
        >
          <FaLinkedin className="size-4" />
          Connect on LinkedIn
        </a>

        <div className="flex flex-col items-center">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Lassi Health, Inc. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4 mt-2">
            {isAvma ? (
              <Link
                to="/"
                className="text-xs text-slate-600 hover:text-indigo-400 transition-colors"
              >
                Home
              </Link>
            ) : (
              <Link
                to="/avma"
                className="text-xs text-slate-600 hover:text-indigo-400 transition-colors"
              >
                Conference Demo
              </Link>
            )}
            <span className="text-slate-800 text-xs">|</span>
            <button className="text-xs text-slate-600 hover:text-indigo-400 transition-colors">
              Privacy Policy
            </button>
            <span className="text-slate-800 text-xs">|</span>
            <button className="text-xs text-slate-600 hover:text-indigo-400 transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
