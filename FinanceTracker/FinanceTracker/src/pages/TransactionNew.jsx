import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CATEGORIES } from "../categories/categories";

export default function TransactionNew() {
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
  return (
    <>
      <h1>Nova Transação</h1>
    </>
  )
}
