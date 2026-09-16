import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CATEGORIES } from "../categories/categories";

export default function TransactionNew({onAddTransaction}) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    descricao: '',
    quantidade: '',
    tipo: 'Receita',
    categoria: CATEGORIES[0] || '',
    date: new Date().toISOString.split('T')[0],
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.description.trim()){
      setErrorMessage('A descrição é obrigatória.');
      return;
    }
  }
  const numericAmount = Number(formData.amount);
  if (!formData.amount || numericAmount <= 0){
    setErrorMessage('O valor deve um número maior que zero.');
    return;
  }
  if (!formData.categoria){
    setErrorMessage('Selecione uma categoria.');
    return;
  }
  const newTransaction = {
    id: crypto.randomUUID(),
    descricao: formData.descricao,
    amount: numericAmount,
    tipo: formData.tipo,
    categoria: formData.categoria,
    date: formData.date,
  }
  onAddTransaction(newTransaction);
  navigate('/transactions');
  return (
    <>
      <h1>Nova Transação</h1>
    </>
  )
}
