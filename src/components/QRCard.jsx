import { Link } from "react-router-dom";

export default function QRCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm">
      {/* Header */}
      <h3 className="mb-3 sm:mb-5 text-xs tracking-[0.2em] text-slate-500">
        QR
      </h3>

      {/* Content */}
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 md:gap-8">
        {/* Left: QR image */}
        <div className="shrink-0">
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=QPay"
            alt="QR Code"
            className="h-36 w-36 sm:h-50 sm:w-64 object-contain"
          />
        </div>

        {/* Right: title + checklist */}
        <div className="flex-1 text-center sm:text-left mt-2 sm:mt-0">
          <h4 className="text-xl sm:text-2xl font-semibold text-slate-900 -ms-0 sm:-ms-5">
            Order QR
          </h4>

          <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3 text-slate-500">
            {["Receive Payment", "Order new QRs", "Download QR"].map((item) => (
              <li key={item} className="flex items-center gap-2 sm:gap-3 justify-center sm:justify-start">
                <span className="inline-block h-1.5 w-1.5 sm:h-1.5 sm:w-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                <span className="text-sm sm:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="my-4 sm:my-6 h-px w-full bg-slate-200" />

      {/* CTA button */}
      <Link to="/qr">
        <button className="h-10 sm:h-12 w-full rounded-lg bg-green-700 text-sm sm:text-base font-semibold text-white hover:bg-green-800">
          View more
        </button>
      </Link>
    </div>
  );
}
