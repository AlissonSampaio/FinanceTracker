import { Link, useNavigate, useParams } from "react-router-dom"
import { formatCurrency } from "../utils/formatCurrency";
// import { formatDate } from "../utils/formatDate";
import "../style/TransactionDetails.css"
import { formatDateString } from "../utils/formatDateString";
import Calendar from "../assets/calendar-regular.png";
import { formatHour } from "../utils/formatHour";

export default function TransactionDetails({transactions = []}) {
  const {id} = useParams();
  const navigate = useNavigate();
  const transaction = transactions.find((item) => item.id === id);
  if (!transaction){
    return(
      <main>
        <header><h1>Transação não encontrada</h1></header>
        <div>
          <p>Transação não encontrada ou removida</p>
          <Link to="/transactions">Voltar</Link>
        </div>
      </main>
    )
  }
  return (
    <div className="detalhes-transacao">
    <header className="header">
      <button type="button" onClick={() => navigate('/transactions')} className="voltar">← Voltar para Transações</button>
      <h1>Transação concluída</h1>
    </header>
    <section>
      <div className="valor-liquido">
        <strong className="valor-title">Valor Líquido Registrado</strong>
        <span className="valor-money">{formatCurrency(transaction.amount)}</span>
      </div>
      <hr />
      <table className="details-table">
        <thead className="details-title1">
          <tr>
            <th className="title-tabledesc">Descrição</th>
            <th className="category-title">Categoria</th>
          </tr>
        </thead>
        <tbody className="details-info1">
          <tr>
            <td className="description-info">{transaction.description}</td>
            <td className="info-category">{transaction.category}</td>
          </tr>
        </tbody>
        <thead className="details-title2">
          <tr>
            <th className="date-title">Data do registro</th>
            <th className="type-title">Tipo</th>
          </tr>
        </thead>
        <tbody className="details-info2">
          <tr>
            <td className="date-info">
              <div className="calendar_date">
                <img src={Calendar} alt="" className="calendar"/>
                <span>{formatDateString(transaction.date)}</span>
              </div>
              <div className="hour-transaction"><span>Horário: {formatHour(transaction.createdAt)}</span></div>
            </td>
            <td className="type-info">{transaction.type}</td>
          </tr>
        </tbody>
      </table>
    </section>
    </div>
  )
}
