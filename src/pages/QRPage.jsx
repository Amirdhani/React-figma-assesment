import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Chevron({ open, size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`text-slate-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Right panel: list row for active QR codes */
function ActiveRow({ id, addr, terminal }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-200 p-4 hover:shadow-sm">
      <div className="flex items-center gap-4">
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?size=72x72&data=${id}`}
          alt="QR"
          className="h-14 w-14 rounded"
        />
        <div>
          <p className="text-base font-semibold text-slate-900">{id}</p>
          <p className="text-xs text-slate-500">{addr}</p>
          <p className="text-xs text-slate-400">{terminal}</p>
        </div>
      </div>

      {/* Right-facing chevron just for visual parity */}
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-slate-400">
        <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

/* Request row with Accepted pill and borderless inner steps */
function RequestRow({
  id,
  requestedOn,
  status = "accepted",
  defaultOpen = true,
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-xl border border-slate-200">
      {/* Merchant/header block */}
      <div className="flex items-start gap-3 p-4 pb-2">
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?size=40x40&data=${id}`}
          alt="QR"
          className="h-10 w-10 rounded"
        />
        <div className="flex-1">
          <p className="text-sm font-semibold text-slate-900">All Marketing Sales</p>
          <p className="text-[11px] leading-4 text-slate-800">
            45, Bharathi Nagar, VOC Port Authority,
            <br />
            Tuticorin, 628004.
          </p>
          <p className="mt-1 text-[11px] text-slate-400">Requested on {requestedOn}</p>
        </div>
      </div>

      <div className="px-4 pb-4">
        <div className="rounded-lg border border-emerald-100 bg-emerald-50 text-emerald-700">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex w-full items-center justify-between px-3 py-3 text-sm"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-600">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="font-medium">QR Request Accepted</span>
            </div>
            <Chevron open={open} />
          </button>

          {open && (
            <div className="px-3 pb-3 pt-1">
              <div className="flex items-center gap-3 py-2 text-sm text-emerald-900/70">
                <span className="inline-block h-4 w-4 rounded-full border border-emerald-300 bg-white" />
                <span>Awaiting Production</span>
              </div>
              <div className="flex items-center gap-3 py-2 text-sm text-emerald-900/70">
                <span className="inline-block h-4 w-4 rounded-full border border-emerald-300 bg-white" />
                <span>Awaiting Dispatch</span>
              </div>
              <div className="flex items-center gap-3 py-2 text-sm text-emerald-900/70">
                <span className="inline-block h-4 w-4 rounded-full border border-emerald-300 bg-white" />
                <span>Awaiting Delivery</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function QRPage() {
  const [tab, setTab] = useState("requests");

  const activeRows = [
    { id: "Q201946579", addr: "All Marketing Sales - MS190304153536148980231", terminal: "Terminal 1" },
    { id: "Q201946580", addr: "All Marketing Sales - MS190304153536148980231", terminal: "Terminal 2" },
    { id: "Q201946581", addr: "All Marketing Sales - MS190304153536148980231", terminal: "Terminal 3" },
    { id: "Q201946582", addr: "All Marketing Sales - MS190304153536148980231", terminal: "Terminal 4" },
  ];

  const requestRows = [
    { id: "Q201946600", requestedOn: "26.04.2025", status: "accepted" },
    { id: "Q201946601", requestedOn: "26.04.2025", status: "accepted" },
  ];

  const handleDownload = () => {
    const url = "https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=UPI9876543210@qpay";
    const a = document.createElement("a");
    a.href = url;
    a.download = "qpay-qr.png";
    a.click();
  };

  const handleShare = async () => {
    const url = "https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=UPI9876543210@qpay";
    try {
      if (navigator.share) {
        await navigator.share({ title: "QPay QR", text: "Scan to pay", url });
      } else {
        await navigator.clipboard.writeText(url);
        alert("QR link copied to clipboard");
      }
    } catch {}
  };

  return (
    <div className="min-h-screen w-132 md:w-full bg-slate-50 flex flex-col">
      <Navbar />

      <div className="flex gap-6 p-6 mb-15 sm:mb-10">
        <Sidebar />

        <main className="mx-auto w-full max-w-6xl flex-1">
          {/* Title */}
          <h1 className="mb-4 text-2xl font-semibold text-slate-900">Manage QR/POS</h1>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Left: QR card */}
            <div className="w-75 sm:w-130 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              {/* Brand */}
              <div className="mb-2 flex items-center justify-center">
                <img src="/logo-qpay.png" alt="qpay" className="h-12 w-12" />
              </div>

              {/* QR image */}
              <div className="rounded-xl p-2">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=UPI9876543210@qpay"
                  alt="QR Code"
                  className="mx-auto h-[100px] w-[100px] md:h-[380px] md:w-[380px] object-contain"
                />
              </div>

              {/* UPI + name */}
              <div className="mt-4 text-center">
                <p className="text-sm text-slate-600">
                  <svg className="mr-1 inline-block -mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M3 12h18M7 5h10a3 3 0 013 3v8a3 3 0 01-3 3H7a3 3 0 01-3-3V8a3 3 0 013-3z" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  UPI ID: <span className="font-semibold text-slate-900">9876543210@qpay</span>
                </p>
                <p className="text-xs text-slate-400">Ibrahim Mohammedali</p>
              </div>

              {/* Actions */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <button
                  onClick={handleDownload}
                  className="flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-slate-50 font-medium text-slate-700 hover:bg-slate-100"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3v10m0 0l4-4m-4 4L8 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 14v4a3 3 0 003 3h10a3 3 0 003-3v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  Download
                </button>
                <button
                  onClick={handleShare}
                  className="flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-slate-50 font-medium text-slate-700 hover:bg-slate-100"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M15 8a3 3 0 100-6 3 3 0 000 6zM21 22a3 3 0 10-6 0 3 3 0 006 0zM9 15a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="2" />
                    <path d="M13.5 6.5L10.5 9.5M13.5 17.5L10.5 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  Share
                </button>
              </div>
            </div>

            {/* Right: tabs + content */}
            <div className="md:col-span-2 w-75 sm:w-130 sm:ms-40 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              {/* Tabs */}
              <div className="mb-4 flex gap-3">
                <button
                  onClick={() => setTab("active")}
                  className={`h-10 rounded-lg px-4 shadow ${
                    tab === "active" ? "bg-emerald-700 text-white hover:bg-emerald-800" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  Active QR Codes
                </button>
                <button
                  onClick={() => setTab("requests")}
                  className={`h-10 rounded-lg px-4 ${
                    tab === "requests" ? "bg-emerald-700 text-white hover:bg-emerald-800" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  QR Code Requests
                </button>
              </div>

              {/* Lists */}
              {tab === "active" ? (
                <div className="space-y-6">
                  {activeRows.map((r, i) => (
                    <ActiveRow key={r.id} id={r.id} addr={r.addr} terminal={`Terminal ${i + 1}`} />
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {requestRows.map((r, idx) => (
                    <RequestRow
                      key={r.id}
                      id={r.id}
                      requestedOn={r.requestedOn}
                      status={r.status}
                      defaultOpen={idx === 0} 
                    />
                  ))}
                </div>
              )}

              {/* Bottom CTA */}
              <div className="mt-6">
                <button className="h-12 w-full rounded-xl bg-emerald-700 text-base font-semibold text-white hover:bg-emerald-800">
                  Request more QR Codes
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
