import { useState } from "react";
import { Link } from "react-router-dom";
import { CATEGORIES } from "../categories/categories";
import { formatCurrency } from "../utils/formatCurrency";
import { formatDate } from "../utils/formatDate";

export default function Transactions({transactions = [], onDeleteTransaction}) {
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
      <section>
        {filteredTransactions.length === 0 ? (
          <p>Nenhuma transação encontrada</p>
        ) : (
          <table>
            <thead>
              <tr>Descrição</tr>
              <tr>Valor</tr>
              <tr>Tipo</tr>
              <tr>Categoria</tr>
              <tr>Data</tr>
              <tr>Ações</tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.description}</td>
                  <td>{formatCurrency(transaction.amount)}</td>
                  <td>{transaction.type}</td>
                  <td>{transaction.category}</td>
                  <td>{formatDate(transaction.date)}</td>
                  <td>
                    <Link to={`/transactions/${transaction.id}`}>Ver detalhes</Link>
                    <button type="button" onClick={() => onDeleteTransaction(transaction.id)}>Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </>
  )
}
