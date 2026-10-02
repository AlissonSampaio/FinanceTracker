import { Link } from "react-router-dom";
import Summary from "../components/Summary";

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
      <main>
        <h1>Personal Finance Tracker</h1>
        <p>Gerencie suas finanças pessoais de forma simples, acompanhando suas receitas, despesas e o saldo em tempo real.</p>
      </main>
      <Summary income={income} outcome={outcome} total={total}/>
      <main>
        <h2>Ações Rápidas</h2>
        <div>
          <Link to="/transactions/new">+ Nova Movimentação</Link>
          <br />
          <Link to="/transactions">Ver Histórico Completo</Link>
        </div>
      </main>
    </>
  )
}
