export default function StatCard({ label, value }) {
  return (
    <div className="bg-white border rounded-lg p-3 sm:p-4 text-center">
      <div className="text-xl sm:text-2xl font-bold">{value}</div>
      <div className="text-gray-500 text-xs sm:text-sm">{label}</div>
    </div>
  );
}
