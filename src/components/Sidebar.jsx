import { useState, useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FiHome,
  FiUser,
  FiClock,
  FiGrid,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

export default function Sidebar() {
  const [openHistory, setOpenHistory] = useState(false);
  const location = useLocation();

  const base = "flex items-center gap-3 px-4 py-3 rounded-md transition w-full";

  const linkClass = ({ isActive }) =>
    (isActive
      ? "bg-white text-green-700"
      : "text-white hover:bg-green-600") + " " + base;

  const isHistoryActive = useMemo(
    () => location.pathname.startsWith("/history"),
    [location.pathname]
  );

  return (
    <aside className="bg-green-700 w-44 sm:w-64 h-screen p-3 sm:py-6 rounded-2xl flex flex-col justify-between">
      {/* Top nav */}
      <div>
        <nav className="space-y-2">
          {/* Home */}
          <NavLink to="/" className={linkClass} end>
            <FiHome /> Home
          </NavLink>

          {/* QR */}
          <NavLink to="/qr" className={linkClass}>
            <FiGrid /> QR
          </NavLink>

          {/* History */}
          <div
            className={
              "rounded-md transition " +
              (openHistory || isHistoryActive
                ? "bg-white text-green-700"
                : "text-white hover:bg-green-600")
            }
          >
            <div className="flex items-center justify-between">
              <NavLink
                to="/history"
                className="flex-1 flex items-center gap-3 px-4 py-3"
              >
                <FiClock /> History
              </NavLink>

              <button
                type="button"
                aria-expanded={openHistory}
                aria-controls="history-submenu"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenHistory((v) => !v);
                }}
                className="px-2 py-3 text-inherit"
                title={openHistory ? "Collapse" : "Expand"}
              >
                {openHistory ? (
                  <FiChevronUp className="w-4 h-4" />
                ) : (
                  <FiChevronDown className="w-4 h-4" />
                )}
              </button>
            </div>

            {openHistory && (
              <div
                id="history-submenu"
                className="pl-4 pb-3 space-y-3 sm:space-y-4"
                role="group"
                aria-label="History submenu"
              >
                <NavLink
                  to="/history/transactions"
                  className={({ isActive }) =>
                    (isActive
                      ? "text-green-900"
                      : "text-green-700 hover:text-green-900") +
                    " flex items-center gap-2"
                  }
                >
                  <FiClock /> Transaction History
                </NavLink>

                <NavLink
                  to="/history/settlements"
                  className={({ isActive }) =>
                    (isActive
                      ? "text-green-900"
                      : "text-green-700 hover:text-green-900") +
                    " flex items-center gap-2"
                  }
                >
                  <FiClock /> Settlement History
                </NavLink>
              </div>
            )}
          </div>

          {/* Profile */}
          <NavLink to="/profile" className={linkClass}>
            <FiUser /> Profile
          </NavLink>
        </nav>
      </div>

      {/* Bottom Logo Card */}
      <div className="w-full -mb-20">
        <div className="w-44 sm:w-64 -ms-3 rounded-b-2xl border border-green-700/80 overflow-hidden shadow-sm">
          <div className="h-24 bg-green-700" />
          <div className="bg-white px-4 py-3 flex items-center justify-center">
            <img
              src="/Bharat logo.svg"
              alt="BharatConnect"
              className="h-10 w-auto"
            />
          </div>
        </div>
      </div>
    </aside>
  );
}