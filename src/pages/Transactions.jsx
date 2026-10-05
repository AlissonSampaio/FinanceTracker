import { useState } from "react";
import { Link } from "react-router-dom";
import { CATEGORIES } from "../categories/categories";
import { formatCurrency } from "../utils/formatCurrency";
import { formatDate } from "../utils/formatDate";
import '../style/Transactions.css';
import Lixo from "../assets/Lixo.png";
import Clock from "../assets/Data-clock.png";

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
    <div className="transactions">
      <header>
        <h1 className="Title-transacao">Transações</h1>
        <Link to="/transactions/new" className="nova-transacao">+ Nova Transação</Link>
      </header>
      <section>
        <div>
          <label htmlFor="type-filter">Filtrar por Tipo:</label>
          <select id="type-filter" value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
            <option value="Todas">Todas</option>
            <option value="Receita">Receitas</option>
            <option value="Despesa">Despesas</option>
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
          <p className="sem-transacao">Nenhuma transação encontrada</p>
        ) : (
          <table>
            <thead>
              <tr className="tds-title">
                <td className="descricao">DESCRIÇÃO</td>
                <td className="valor">VALOR</td>
                <td className="tipo">TIPO</td>
                <td className="categoria">CATEGORIA</td>
                <td className="data">DATA</td>
                <td className="acoes">AÇÕES</td>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction) => (
                <tr key={transaction.id} className="tds-info">
                  <td className="">{transaction.description}</td>
                  <td className="">{formatCurrency(transaction.amount)}</td>
                  <td className="">{transaction.type}</td>
                  <td className="">{transaction.category}</td>
                  <td className=""> <img src={Clock} alt=""/> {formatDate(transaction.date)}</td>
                  <td className="">
                    <Link to={`/transactions/${transaction.id}`} className="detalhes-transacao">Detalhes</Link>
                    <button type="button" onClick={() => onDeleteTransaction(transaction.id)} className="Lixo"><img src={Lixo} alt=""/></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
    
  )
}
