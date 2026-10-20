import { useState } from "react";
import { Link } from "react-router-dom";
import { CATEGORIES } from "../categories/categories";
import { formatCurrency } from "../utils/formatCurrency";
import { formatDate } from "../utils/formatDate";
import '../style/Transactions.css';
import Lixo from "../assets/Lixo.png";
import Eye from "../assets/eye-details.png";
import SideBar from "../components/SideBar";
import faArrowDown from "../assets/arrow-down-solid.png";
import faArrowUp from "../assets/arrow-up-solid.png";
import Summary from "../components/Summary";

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
      <SideBar></SideBar>
      <header>
        <div className="title-and-info">
          <div className="title-main">
            <h1 className="Title-transacao">Transações</h1>
            <h5 className="subtitle">live ledger</h5>
          </div>
          <span className="main-info"><p>Consulte, audite e filtre todas as</p><p>movimentações financeiras com</p> <p>precisão institucional.</p></span>
        </div>
        <Link to="/transactions/new" className="nova-transacao">+ Nova Transação</Link>
      </header>
      <section>
        <div>
          <label htmlFor="type-filter" className="tipo-filter">Filtrar por Tipo:</label>
          <select id="type-filter" value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
            <option value="Todas" className="tipos">Todas</option>
            <option value="Receita" className="tipos">Receitas</option>
            <option value="Despesa" className="tipos">Despesas</option>
          </select>
        </div>
        <div>
          <label htmlFor="category-filter" className="categoria-filter">Filtrar por Categoria:</label>
          <select id="category-filter" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="Todas" className="categories">Todas as Categorias</option>
            {CATEGORIES.map((category) => (
              <option key={category} value={category} className="categories">{category}</option>
            ))}
          </select>
        </div>
      </section>
      <section className="visual_transactions">
        <div className="cash_entries">
          <div className="transactionsplus">
            <span className="titlevisual">Entradas totais</span>
            <img src={faArrowDown} alt="" className="faArrowDown"/>
          </div>
          <span className="money_entry">+ R$ 10.400,00</span>
        </div>
        <div className="cash_entries">
          <div className="transactionsminus">
            <span className="titlevisual">Saídas totais</span>
            <img src={faArrowUp} alt="" className="faArrowUp"/>
          </div>
          <span className="money_outflow">- R$ 510,40</span>
        </div>
      </section>
      <Summary income={0} outcome={0} total={0} className="summary"/>
      <section>
        {filteredTransactions.length === 0 ? (
          <p className="sem-transacao">Nenhuma transação encontrada</p>
        ) : (
          <table className="table">
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
                  <td className="desc-info">{transaction.description}</td>
                  <td className="valor-info">{formatCurrency(transaction.amount)}</td>
                  <td className="tipo-info">• {transaction.type}</td>
                  <td className="category-info">{transaction.category}</td>
                  <td className="data-info">{formatDate(transaction.date)}</td>
                  <td className="acoes-info">
                    <div className="div-detalhes">
                      <img src={Eye} alt="" />
                      <Link to={`/transactions/${transaction.id}`} className="detalhes-transacao">Detalhes</Link>
                    </div>
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
