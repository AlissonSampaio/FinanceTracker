import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import TransactionNew from "./pages/TransactionNew";
import TransactionDetails from "./pages/TransactionDetails";
import NotFound from "./pages/NotFound";
import { useEffect, useState } from "react";

function App() {
  // Busca transações do LocalStorage; se não houver transações, retorna um array vazio
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('@finance-tracker:transactions');
    return saved ? JSON.parse(saved) : [];
  })
  // Sincroniza alterações com LocalStorage
  useEffect(() => {
    localStorage.setItem('@finance-tracker:transactions', JSON.stringify(transactions));
  }, [transactions]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/transactions" element={<Transactions/>}/>
          <Route path="/transactions/new" element={<TransactionNew/>}/>
          <Route path="/transactions/:id" element={<TransactionDetails/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
