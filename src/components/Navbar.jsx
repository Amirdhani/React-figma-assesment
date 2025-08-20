export default function Navbar() {
  return (
    <header className="flex items-center justify-between p-4 border-b bg-white">
      <img
          src="/logo-qpay.png"
          alt="qpay"
          className="ms-10 -mb-4 -mt-6 w-20 h-20 rounded-full"
      />
      <div />
      <div className="flex items-center gap-3 -mb-4 -mt-6">
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col leading-tight text-left">
          <span className="text-xs text-gray-500">Hello</span>
          <span className="text-sm font-medium text-gray-900">Thomas Shelby</span>
        </div>
      </div>
    </header>
  );
}