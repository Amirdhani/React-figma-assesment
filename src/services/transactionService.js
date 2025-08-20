import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL + "/transaction_history";
const TOKEN = "Bearer " + import.meta.env.VITE_API_TOKEN;
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;

// Figma mock data
export const MOCK_TRANSACTIONS = [
  { name: "Lisa", date: "03 Sep, 2021", accountType: "QPay", amount: "₹1,06,023", status: "Pending" },
  { name: "Lisa", date: "03 Sep, 2021", accountType: "PhonePe", amount: "₹1,023", status: "Failed" },
  { name: "Lisa", date: "03 Sep, 2021", accountType: "GPay", amount: "₹1,023", status: "Success" },
  { name: "Lisa", date: "03 Sep, 2021", accountType: "Paytm", amount: "₹1,06,023", status: "Failed" },
  { name: "Lisa", date: "03 Sep, 2021", accountType: "PhonePe", amount: "₹1,023", status: "Failed" },
];

// Fetch transactions from API (with fallback to Figma mock)
export async function fetchTransactions(page = 0) {
  try {
    const res = await axios.get(`${API_URL}?service_id=111&page=${page}`, {
      headers: { Authorization: TOKEN },
    });

    if (!res.data?.length) {
      console.warn("API returned empty, using mock data");
      return MOCK_TRANSACTIONS;
    }

    return res.data;
  } catch (err) {
    console.error("API fetch failed, using Figma mock data:", err);
    return MOCK_TRANSACTIONS;
  }
}
