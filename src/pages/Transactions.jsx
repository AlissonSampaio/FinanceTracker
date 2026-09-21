import { Link } from "react-router-dom";

export default function Transactions() {
  return (
    <>
      <header>
        <h1>Transações</h1>
        <Link to="/transactions/new">+ Nova Transação</Link>
      </header>
      
    </>
  )
}
