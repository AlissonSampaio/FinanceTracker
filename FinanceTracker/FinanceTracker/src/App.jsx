import { useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import TransactionNew from "./pages/TransactionNew";
import TransactionDetails from "./pages/TransactionDetails";
import NotFound from "./pages/NotFound";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/transactions" element={<Transactions/>}/>
          <Route path="/transactions/new" element={<TransactionNew/>}/>
          <Route path="/transactions/:id" element={<TransactionDetails/>}/>
          <Route path="pagenotfound" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
