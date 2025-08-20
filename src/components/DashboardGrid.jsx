import StatCard from "./StatCard";
import ProfileCard from "./ProfileCard";
import QRCard from "./QRCard";
import SettlementCard from "./SettlementCard";
import TransactionCard from "./TransactionCard";

export default function DashboardGrid() {
  return (
    <div className="space-y-6 -mt-5 max-w-[1200px]">
      {/* Top Banner */}
      <div className="relative rounded-xl border border-green-200 bg-white overflow-hidden shadow-sm">
        
        <div className="pointer-events-none absolute inset-0">
          {/* Left solid green */}
          <div className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-green-700" />
          {/* Diagonal wedge on desktop */}
          <div
            className="hidden md:block absolute inset-y-0 left-[30%] w-[55%]"
            style={{
              clipPath: "polygon(0 0, 60% 0, 40% 100%, 0 100%)",
              background: "#15803d",
            }}
          />
        </div>

        {/* Foreground content */}
        <div className="relative grid md:grid-cols-2">
          {/* LEFT: text on green */}
          <div className="z-10 p-6 md:p-8 text-white">
            <h1 className="text-2xl md:text-3xl font-bold">
              Pay ₹1/month* for the QPay POS Device
            </h1>
            <p className="mt-1 text-white/90 text-sm">
              One device for accepting all modes of payments
            </p>
            <button className="mt-3 inline-flex items-center rounded-md bg-white text-green-600 px-4 py-2 ring-1 ring-white/30 hover:bg-white/85">
              Download App Now!
            </button>
          </div>

          {/* RIGHT: illustration on white */}
          <div className="z-10 -mb-16 -mt-4 p-6 md:p-8 flex items-center justify-center">
            <img
              src="/home.png"
              alt="promo"
              className="h-48 sm:h-56 md:h-64 lg:h-72 w-95 ms-25 object-contain select-none"
            />
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-green-700">
        <StatCard label="Account Holders" value="1.5k" />
        <StatCard label="Transactions" value="2.1k" />
        <StatCard label="Settlement" value="2.3k" />
        <StatCard label="QR Orders" value="45k" />
      </div>

      {/* Lower grid */}
      <div className="-mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProfileCard />
        <QRCard />
        <SettlementCard />
        <TransactionCard />
      </div>
    </div>
  );
}
