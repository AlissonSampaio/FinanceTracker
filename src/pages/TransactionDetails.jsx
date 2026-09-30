import { Link, useNavigate, useParams } from "react-router-dom"

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
      <h1>Detalhes da Transação</h1>
    </>
  )
}
