import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";
import "../style/Dashboard.css";
import Circle from "../assets/circle-solid.png";
import { formatCurrency } from "../utils/formatCurrency";
import ArrowReceipts from "../assets/Receipt-dashboard.png";
import ArrowOutcome from "../assets/Outcome-dashboard.png";

export default function Dashboard({transactions = []}) {
  const list = Array.isArray(transactions) ? transactions : [];
  const income = list.filter((t) => t.type === "Receita").reduce((acc,t) => acc + Number(t.amount),0);
  //Entrada
  //filter percorre transactions e separa o que é receita do que é despesa
  const outcome = list.filter((t) => t.type === "Despesa").reduce((acc,t) => acc + Number(t.amount),0);
  //Saída
  //reduce passa por cada item filtrado, converte o valor para número e acumula a soma de cada tipo
  const total = income - outcome
  return (
    <>
      <SideBar></SideBar>
      <div className="dashboard">
        <main>
          <span className="vision">Visão Geral Consolidada</span>
          <img src={Circle} className="circle-solid"/>
          <span className="realtime">Atualizado em tempo real</span>
        </main>
        <main>
        <h1 className="title-dashboard">Personal Finance Tracker</h1>
        <span className="info-dashboard"><p>Gerencie suas finanças pessoais de forma simples, acompanhando suas receitas, despesas e</p><p>o saldo em tempo real com precisão institucional.</p></span>
        </main>
        <section className="dash-transactions">
          <main className="dash-moneyvisual">
            <div className="titleandmoney">
              <span className="moneytitle-dashboard">Saldo Líquido Total</span>
              <span className="dashboard-total">{formatCurrency(total)}</span>
            </div>
          </main>
          <main className="dash-moneyvisual">
            <div className="titleandmoney">
              <span className="moneytitle-dashboard">Receitas do mês</span>
              <span className="dashboard-income">{formatCurrency(income)}</span>
            </div>
            <img src={ArrowReceipts} alt="" className="ArrowReceipts"/>
          </main>
          <main className="dash-moneyvisual">
            <div className="titleandmoney">
              <span className="moneytitle-dashboard">Despesas do mês</span>
              <span className="dashboard-outcome">{formatCurrency(outcome)}</span>
            </div>
            <img src={ArrowOutcome} alt="" className="ArrowOutcome"/>
          </main>
        </section>
      </div>
    </>
  )
}
