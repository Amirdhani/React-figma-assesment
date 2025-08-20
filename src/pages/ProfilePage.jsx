import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import {
  Banknote,
  Briefcase,
  IdCard,
  ShoppingCart,
  Speaker,
  TabletSmartphone,
  BadgeIndianRupee,
  Users,
  Languages,
  ChevronRight,
} from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="w-130 md:w-full flex-1 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <div className="flex p-6">
        <Sidebar />

        <main className="p-6 bg-gray-50 min-h-screen space-y-6">
          {/* Banner Ad */}
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
          <div className="z-10 -mb-16 -mt-10 p-6 md:p-8 flex items-center justify-center">
            <img
              src="/profile.svg"
              alt="promo"
              className="h-48 sm:h-56 md:h-64 lg:h-72 w-75 ms-25 object-contain select-none"
            />
          </div>
        </div>
      </div>

      {/* Top 4 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="relative bg-green-50 rounded-2xl px-6 py-8 shadow-sm hover:shadow-md transition cursor-pointer flex flex-col items-left text-left">
          <div className="rounded-full bg-green-700 w-20 h-20 p-4 mb-3">
            <Banknote className="w-12 h-12 text-white" />
          </div>
          <h3 className="font-semibold text-green-800 text-lg">XXXX 9820</h3>
          <p className="text-sm text-gray-600">
            ICICI Bank | Chennai Egmore Branch
          </p>
          <ChevronRight className="absolute right-4 top-6 -translate-y-1/2 w-5 h-5 text-green-900" />
        </div>

        {/* Card 2 */}
        <div className="relative bg-green-50 rounded-2xl px-6 py-8 shadow-sm hover:shadow-md transition cursor-pointer flex flex-col items-left text-left">
          <div className="rounded-full bg-green-700 w-20 h-20 p-4 mb-3">
            <Briefcase className="w-12 h-12 text-white" />
          </div>
          <h3 className="font-semibold text-green-800 text-lg">Business Profile</h3>
          <p className="text-sm text-gray-600">
            View and edit your business details
          </p>
          <ChevronRight className="absolute right-4 top-6 -translate-y-1/2 w-5 h-5 text-green-900" />
        </div>

        {/* Card 3 */}
        <div className="relative bg-green-50 rounded-2xl px-6 py-8 shadow-sm hover:shadow-md transition cursor-pointer flex flex-col items-left text-left">
          <div className="rounded-full bg-green-700 w-20 h-20 p-4 mb-3">
            <IdCard className="w-12 h-12 text-white" />
          </div>
          <h3 className="font-semibold text-green-800 text-lg">KYC Verification</h3>
          <p className="text-sm text-gray-600">
            Unlock exclusive benefits with KYC
          </p>
          <ChevronRight className="absolute right-4 top-6 -translate-y-1/2 w-5 h-5 text-green-900" />
        </div>

        {/* Card 4 */}
        <div className="relative bg-green-50 rounded-2xl px-6 py-8 shadow-sm hover:shadow-md transition cursor-pointer flex flex-col items-left text-left">
          <div className="rounded-full bg-green-700 w-20 h-20 p-4 mb-3">
            <ShoppingCart className="w-12 h-12 text-white" />
          </div>
          <h3 className="font-semibold text-green-800 text-lg">Order QR</h3>
          <p className="text-sm text-gray-600">
            Get paid, manage & order QRs
          </p>
          <ChevronRight className="absolute right-4 top-6 -translate-y-1/2 w-5 h-5 text-green-900" />
        </div>
      </div>

        {/* Bottom Sections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 md:mb-0">
            {/* Business Services */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border">
              <h4 className="font-semibold text-gray-800 mb-6">Business Services</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {/* Smart Speaker */}
                <div className="flex flex-col items-center text-center cursor-pointer">
                  <div className="bg-gray-50 rounded-xl p-6 mb-3 flex items-center justify-center">
                    <Speaker className="w-10 h-10 text-green-700" />
                  </div>
                  <p className="text-gray-800 font-medium text-sm sm:text-base">Smart Speaker</p>
                </div>

                {/* POS Machine */}
                <div className="flex flex-col items-center text-center cursor-pointer">
                  <div className="bg-gray-50 rounded-xl p-6 mb-3 flex items-center justify-center">
                    <TabletSmartphone className="w-10 h-10 text-green-700" />
                  </div>
                  <p className="text-gray-800 font-medium text-sm sm:text-base">POS Machine</p>
                </div>
              </div>
            </div>

            {/* Manage Business */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border">
              <h4 className="font-semibold text-gray-800 mb-6">Manage Business</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {/* Payment Settings */}
                <div className="flex flex-col items-center text-center cursor-pointer">
                  <div className="bg-gray-50 rounded-xl p-6 mb-3 flex items-center justify-center">
                    <BadgeIndianRupee className="w-10 h-10 text-green-700" />
                  </div>
                  <p className="text-gray-800 font-medium text-sm sm:text-base">Payment Settings</p>
                </div>

                {/* Manage Staff */}
                <div className="flex flex-col items-center text-center cursor-pointer">
                  <div className="bg-gray-50 rounded-xl p-6 mb-3 flex items-center justify-center">
                    <Users className="w-10 h-10 text-green-700" />
                  </div>
                  <p className="text-gray-800 font-medium text-sm sm:text-base">Manage Staff</p>
                </div>

                {/* Change Language */}
                <div className="flex flex-col items-center text-center cursor-pointer">
                  <div className="bg-gray-50 rounded-xl p-6 mb-3 flex items-center justify-center">
                    <Languages className="w-10 h-10 text-green-700" />
                  </div>
                  <p className="text-gray-800 font-medium text-sm sm:text-base">Change Language</p>
                </div>
              </div>
            </div>
          </div>


        </main>
      </div>
    </div>
  );
}
