export function AccountLogo({ type }) {
  const map = {
    GPay: "/logos/gpay.png",
    PhonePe: "/logos/phonepe.png",
    Paytm: "/logos/paytm.png",
    QPay: "/logos/qpay.png",
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-slate-400">From</span>
      <img src={map[type]} alt={type} className="h-6 w-6" />
    </div>
  );
}
