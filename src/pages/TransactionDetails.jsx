import { useNavigate, useParams } from "react-router-dom"

export default function TransactionDetails() {
  const {id} = useParams();
  const navigate = useNavigate();
  return (
    <>
      <h1>Detalhes da Transação</h1>
    </>
  )
}
