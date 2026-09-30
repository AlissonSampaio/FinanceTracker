import { useNavigate, useParams } from "react-router-dom"

export default function TransactionDetails({transactions = []}) {
  const {id} = useParams();
  const navigate = useNavigate();
  const transaction = transactions.find((item) => item.id === id)
  return (
    <>
      <h1>Detalhes da Transação</h1>
    </>
  )
}
