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
      <div className="valor">
        <strong>Valor Líquido Registrado</strong>
        <span>{formatCurrency(transaction.amount)}</span>
      </div>
      <hr />
      <div className="desc">
        <strong>Descrição</strong>
        <span>{transaction.description}</span>
      </div>
      <div className="tipo">
        <strong>Tipo:</strong>
        <span>{transaction.type}</span>
      </div>
      <div className="categoria">
        <strong>Categoria:</strong>
        <span>{transaction.category}</span>
      </div>
      <div className="data">
        <strong>Data:</strong>
        {formatDate(transaction.date)}
      </div>
    </section>
    </div>
  )
}
