import { Link, useNavigate, useParams } from "react-router-dom"
import { formatCurrency } from "../utils/formatCurrency";
import { formatDate } from "../utils/formatDate";
import "../style/TransactionDetails.css"

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
      <table className="table-details">
        <tr>
          <td className="desc">
            <strong>Descrição:</strong>
            <span>{transaction.description}</span>            
          </td>
          <td className="tipo">
            <strong>Tipo:</strong>
            <span>{transaction.type}</span>
          </td>
        </tr>
        <tr>
          <td className="categoria">
            <strong>Categoria:</strong>
            <span>{transaction.category}</span>
          </td>
          <td className="data">
            <strong>Data:</strong>
            {formatDate(transaction.date)}
          </td>
        </tr>
      </table>
    </section>
    </div>
  )
}
