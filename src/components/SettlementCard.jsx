import { Link } from "react-router-dom";

export default function SettlementCard() {
  const rows = [
    { name: "Ibrahim", date: "23 Oct, 09:15 AM", amount: "+₹90" },
    { name: "Ibrahim", date: "23 Oct, 09:15 AM", amount: "+₹90" },
    { name: "Ibrahim", date: "23 Oct, 09:15 AM", amount: "+₹90" },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 mb-10 shadow-sm relative">
      {/* Top-right arrow */}
      <button
        type="button"
        aria-label="Go to settlements"
        className="absolute right-3 sm:right-4 top-5 sm:top-7 grid h-7 w-7 sm:h-8 sm:w-8 place-items-center rounded-full text-slate-400 hover:bg-slate-50 hover:text-slate-600"
      >
        {/* Chevron > */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          className="pointer-events-none sm:w-5 sm:h-5"
        >
          <path
            d="M9 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Header label */}
      <h3 className="text-xs tracking-[0.2em] text-slate-500">SETTLEMENT</h3>

      {/* Big amount */}
      <div className="mt-1 sm:mt-2 text-lg sm:text-xl font-extrabold text-slate-900">
        ₹1,23,816.19
      </div>

      {/* Divider */}
      <div className="my-3 sm:my-4 h-px w-full bg-slate-200" />

      {/* List */}
      <ul className="space-y-4 sm:space-y-5">
        {rows.map((r, i) => (
          <li key={i} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-0">
            <div>
              <div className="text-lg sm:text-xl font-semibold text-slate-900">{r.name}</div>
              <div className="mt-0.5 sm:mt-1 text-slate-400 text-sm sm:text-base">{r.date}</div>
            </div>
            <div className="pt-1 text-lg sm:text-xl font-bold text-slate-900">{r.amount}</div>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link to="/history">
        <button className="mt-6 sm:mt-8 h-12 sm:h-14 w-full rounded-xl bg-green-700 text-base sm:text-lg font-semibold text-white hover:bg-green-800">
          Settle Now
        </button>
      </Link>
    </div>
  );
}
