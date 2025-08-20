import { createContext, useContext, useEffect, useState } from "react";
import { fetchTransactions } from "../services/transactionService";

const TransactionContext = createContext();

export function TransactionsProvider({ children }) {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const data = await fetchTransactions(page);
        setTransactions(data);
        setError(null);
      } catch (err) {
        console.error(err);
        setTransactions([]);
        setError("Failed to fetch transactions");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [page]);

  return (
    <TransactionContext.Provider value={{ transactions, loading, error, page, setPage }}>
      {children}
    </TransactionContext.Provider>
  );
}

export const useTransactions = () => useContext(TransactionContext);
