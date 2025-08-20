import { useEffect, useMemo, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useTransactions } from "../context/TransactionsContext";
import { AccountLogo } from "../components/AccountLogo";

import {
  Search,
  SlidersHorizontal,
  Clock,
  ChevronLeft,
  ChevronRight,
  Timer,
  X,
  Landmark,
  CheckCircle2,
} from "lucide-react";

/* Status chip */
function StatusChip({ value }) {
  const map = useMemo(
    () => ({
      Pending: "text-amber-600 border border-amber-300 bg-white px-3 py-2 font-semibold",
      Success: "text-emerald-600 border border-emerald-300 bg-white px-3 py-2 font-semibold",
      Failed: "text-rose-600 border border-rose-300 bg-white px-3 py-2 font-semibold",
    }),
    []
  );
  return (
    <span
      className={`inline-flex items-center rounded-md px-3 py-1 text-xs font-medium ${
        map[value] ?? ""
      }`}
    >
      {value}
    </span>
  );
}

/* Timer with speed lines */
function TimerWithSpeed({ size = 20, className = "" }) {
  return (
    <span className={`relative inline-flex ${className}`}>
      <span className="absolute -left-4 top-[6px] h-[2px] w-3 rounded-full bg-white/90" />
      <span className="absolute -left-3 top-[14px] h-[2px] w-2 rounded-full bg-white/80" />
      <Timer size={size} className="relative" />
    </span>
  );
}

/* SETTLE NOW modal */
function SettleModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="w-80 ms-50 -mt-50 md:ms-0 md:mt-0 md:w-full max-w-2xl rounded-2xl border border-emerald-200 bg-white shadow-xl">
        <div className="flex items-center justify-between px-6 pt-6">
          <h3 className="text-[22px] font-bold text-slate-900">Manage QR/POS</h3>
          <button
            aria-label="Close"
            onClick={onClose}
            className="rounded-md p-1.5 text-slate-500 hover:bg-slate-100"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-6 pb-6 pt-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3 text-[15px] font-semibold text-slate-800">
              <Landmark size={22} className="text-slate-700" />
              <span>Today’s Total Collection</span>
            </div>
            <div className="text-right text-[22px] font-semibold text-slate-900">₹1,023</div>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-3 text-[15px] font-semibold text-emerald-700">
              <CheckCircle2 size={22} className="text-emerald-600" />
              <span>Already Settled</span>
            </div>
            <div className="text-right text-[15px] font-semibold text-slate-700">₹100</div>
          </div>

          <div className="my-5 h-px w-full bg-slate-200/70" />

          <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
            Settlement Calculation
          </div>

          <div className="mt-3 font-semibold space-y-3 text-[14px]">
            <Row label="Amount yet to be settled" value="IBRAHIM MOHAMMEDALI" />
            <Row label="Past pending amount" value="092141241127" />
            <Row label="Charges" value="07, Aug 2024" />
          </div>

          <div className="my-5 h-px w-full bg-slate-200/70" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-[15px] font-semibold text-slate-800">
              <Landmark size={22} className="text-slate-700" />
              <span>Today’s Total Collection</span>
            </div>
            <div className="text-right text-[15px] font-semibold text-slate-900">₹1,023</div>
          </div>

          <div className="mt-5 rounded-xl bg-emerald-50 p-4">
            <p className="text-[10px] md:text-[14px] text-slate-800">
              Tap ‘Settle Now’ to instantly get settlements in your bank account.
            </p>
            <div className="mt-1 text-[10px] md:text-[14px] font-medium text-emerald-700">
              Settle Now is Chargeable
            </div>
            <div className="-mt-8 md:-mt-12 flex justify-end">
              <button className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-6 py-3 text-[10px] md:text-[15px] font-semibold text-white shadow-sm hover:bg-emerald-800">
                Settle Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Simple row */
function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-slate-500">{label}</div>
      <div className="text-right text-slate-700">{value}</div>
    </div>
  );
}

export default function HistoryPage() {
  const [openSettle, setOpenSettle] = useState(false);

  // Transactions from context (API or mock fallback)
  const { transactions, loading, error } = useTransactions();

  return (
    <div className="w-145 md:w-full flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      <div className="flex gap-6 p-6 md:mb-10">
        <Sidebar />
        <main className="mx-auto w-85 md:w-full max-w-6xl">
          {/* Header */}
          <div className="mb-4 flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-slate-900">Settlement History</h1>
            <button className="inline-flex items-center gap-2 rounded-lg border border-emerald-700 px-4 py-2 text-lg font-medium text-emerald-700 hover:bg-emerald-50">
              Download statement
            </button>
          </div>

          {/* Search + Settle */}
          <div className="mb-3 grid grid-cols-1 items-center gap-3 sm:grid-cols-3">
            <div className="relative sm:col-span-2">
              <span className="pointer-events-none absolute left-3 top-2.5 text-slate-400">
                <Search size={22} />
              </span>
              <input
                type="text"
                placeholder="Search"
                className="w-77.5 md:w-277 rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-10 text-lg text-slate-700 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-0"
              />
              <button className="absolute left-78 md:left-278 top-0.5 inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-600 hover:bg-slate-50">
                <SlidersHorizontal size={14} />
              </button>
            </div>
          </div>

          {/* Info strip */}
          <div className="mb-4 flex items-center justify-between rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
            <div className="flex items-center gap-2 text-sm md:text-lg">
              <span className="text-emerald-600"><Clock size={50} /></span>
              <span>
                Today’s total collection will be auto‑settled by <strong className="font-semibold">08:00AM, 23rd Oct’22</strong> Tomorrow.
              </span>
              <div className="sm:col-span-1 flex justify-end">
                <button
                  type="button"
                  onClick={() => setOpenSettle(true)}
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-700 md:ms-60 px-4 py-2 text-lg font-semibold text-white hover:bg-emerald-800"
                >
                  <TimerWithSpeed size={20} />
                  Settle Now!
                </button>
              </div>
            </div>
          </div>

          {/* Table card */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-400">
                  <th className="p-4 w-100">Name</th>
                  <th className="p-4">Date & Time</th>
                  <th className="p-4">Account</th>
                  <th className="p-4">Amount</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Details</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {loading ? (
                  <tr>
                    <td colSpan={6} className="p-6 text-center text-slate-500">Loading...</td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td colSpan={6} className="p-6 text-center text-red-600">{error}</td>
                  </tr>
                ) : (
                  transactions.map((r, i) => (
                    <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/60 text-lg">
                    <td className="p-4 font-semibold text-slate-900">{r.name}</td>
                    <td className="p-4 font-semibold text-slate-900">{r.date}</td>
                    <td className="p-4"> <AccountLogo type={r.accountType} /></td>
                    <td className="p-4 font-semibold text-slate-900">{r.amount}</td>
                    <td className="p-4">
                      <StatusChip value={r.status} />
                    </td>
                    <td className="p-4">
                      <button className="text-emerald-600 underline">View</button>
                    </td>
                  </tr>

                  ))
                )}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 p-4">
              <button className="grid h-8 w-8 place-items-center rounded-full text-slate-500 hover:bg-slate-100">
                <ChevronLeft size={16} />
              </button>

              <button className="px-3 py-1 rounded-md hover:bg-slate-100 text-slate-700">
                1
              </button>
              <button className="px-3 py-1 rounded-md hover:bg-slate-100 text-slate-700">
                2
              </button>
              <span className="px-2">...</span>
              <button className="px-3 py-1 rounded-md hover:bg-slate-100 text-slate-700">
                6
              </button>
              <button className="px-3 py-1 rounded-md bg-emerald-600 text-white font-semibold">
                7
              </button>
              <button className="px-3 py-1 rounded-md hover:bg-slate-100 text-slate-700">
                8
              </button>

              <button className="grid h-8 w-8 place-items-center rounded-full text-slate-500 hover:bg-slate-100">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Modal */}
      <SettleModal open={openSettle} onClose={() => setOpenSettle(false)} />
    </div>
  );
}
