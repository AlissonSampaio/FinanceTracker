import { useState } from "react";
import { Link } from "react-router-dom";
import { CATEGORIES } from "../categories/categories";

export default function Transactions() {
  // Filtros do tipo e da categoria
  const [selectedType, setSelectedType] = useState('Todas');
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const list = Array.isArray(transactions) ? transactions : []; //Garante que list seja um array seguro para evitar erros

  const filteredTransactions = list.filter((transaction) => { //filter para analisar cada transação da lista original em sequência
    // função que confirma se o tipo de transação corresponde ao filtro selecionado ou se a opção Todas foi selecionada
    const matchesType = selectedType === 'Todas' || transaction.type === selectedType;
    // função que confirma se a categoria corresponde à opção selecionada ou se é 'Todas' a opção selecionada
    const matchesCategory = selectedCategory === 'Todas' || transaction.category === selectedCategory;
    return matchesType && matchesCategory;
  });
  return (
    <>
      <header>
        <h1>Transações</h1>
        <Link to="/transactions/new">+ Nova Transação</Link>
      </header>
      <section>
        <div>
          <label htmlFor="type-filter">Filtrar por Tipo:</label>
          <select id="type-filter" value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
            <option value="Todas">Todas</option>
            <option value="Receitas">Receitas</option>
            <option value="Despesas">Despesas</option>
          </select>
        </div>
        <div>
          <label htmlFor="category-filter">Filtrar por Categoria:</label>
          <select id="category-filter" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="Todas">Todas as Categorias</option>
            {CATEGORIES.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </section>
    </>
  )
}
