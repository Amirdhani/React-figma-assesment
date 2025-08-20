import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QRPage from "./pages/QRPage";
import HistoryPage from "./pages/HistoryPage";
import ProfilePage from "./pages/ProfilePage";
import { TransactionsProvider } from "./context/TransactionsContext";


export default function App() {
  return (
    <Router>
      <TransactionsProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/qr" element={<QRPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </TransactionsProvider>
    </Router>
  );
}