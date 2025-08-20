export default function ProfileCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm">
      {/* Header */}
      <h3 className="mb-4 sm:mb-5 text-xs tracking-[0.2em] text-slate-500">
        PROFILE
      </h3>

      {/* Content row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 md:gap-8">
        {/* Circular progress 30% */}
        <div className="relative h-36 w-36 sm:h-50 sm:w-50 shrink-0">
          <svg viewBox="0 0 100 100" className="h-full w-full">
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="10"
            />
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="#22C55E"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 42}`}
              strokeDashoffset={`${(2 * Math.PI * 42) * (1 - 0.3)}`}
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="absolute inset-0 grid place-items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-green-600">
              30%
            </span>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1">
          <h4 className="text-xl sm:text-2xl font-semibold text-slate-900 text-center sm:text-left">
            Complete your profile
          </h4>

          <ul className="mt-4 space-y-2 sm:space-y-3">
            {["Personal KYC", "Company KYC", "Onboarding details"].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 sm:gap-3 justify-start"
              >
                <span className="inline-block h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-slate-400 flex-shrink-0" />
                <span className="text-base sm:text-lg text-slate-500">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="my-4 sm:my-6 h-px w-full bg-slate-200" />

      {/* Next button */}
      <button className="h-12 w-full rounded-lg bg-green-700 text-base sm:text-base font-semibold text-white hover:bg-green-800">
        Next
      </button>
    </div>
  );
}
