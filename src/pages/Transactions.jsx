import { useState } from "react";
import { Link } from "react-router-dom";

export default function Transactions() {
  // Filtros do tipo e da categoria
  const [selectedType, setSelectedType] = useState('Todas');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  return (
    <>
      <header>
        <h1>Transações</h1>
        <Link to="/transactions/new">+ Nova Transação</Link>
      </header>
      
    </>
  )
}
