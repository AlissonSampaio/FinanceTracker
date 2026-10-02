import { Link, useNavigate, useParams } from "react-router-dom"
import { formatCurrency } from "../utils/formatCurrency";
import { formatDate } from "../utils/formatDate";

export default function TransactionDetails({transactions = []}) {
  const {id} = useParams();
  const navigate = useNavigate();
  const transaction = transactions.find((item) => item.id === id);
  if (!transaction){
    return(
      <main>
        <header><h1>Detalhes da Transação</h1></header>
        <div>
          <p>Transação não encontrada ou removida</p>
          <Link to="/transactions">Voltar para a lista</Link>
        </div>
      </main>
    )
  }
  return (
    <>
    <header>
      <h1>Detalhes da Transação</h1>
      <button type="button" onClick={() => navigate('/transactions')}>Voltar</button>
    </header>
    <section>
      <div>
        <strong>Descrição:</strong>
        <span>{transaction.description}</span>
      </div>
      <div>
        <strong>Valor:</strong>
        <span>{formatCurrency(transaction.amount)}</span>
      </div>
      <div>
        <strong>Tipo:</strong>
        <span>{transaction.type}</span>
      </div>
      <div>
        <strong>Categoria:</strong>
        <span>{transaction.category}</span>
      </div>
      <div>
        <strong>Data:</strong>
        {formatDate(transaction.date)}
      </div>
    </section>
    </>
  )
}
