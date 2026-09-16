import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CATEGORIES } from "../categories/categories";

export default function TransactionNew({onAddTransaction}) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    type: 'Receita',
    category: CATEGORIES[0] || '',
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
  if (!formData.category){
    setErrorMessage('Selecione uma categoria.');
    return;
  }
  const newTransaction = {
    id: crypto.randomUUID(),
    description: formData.description,
    amount: numericAmount,
    type: formData.type,
    category: formData.category,
    date: formData.date,
  }
  onAddTransaction(newTransaction);
  navigate('/transactions');
  return (
    <>
      <header><h1>Nova Transação</h1></header>
      {errorMessage && (
        <div>
          <p>{errorMessage}</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="description">Descrição</label>
          <input type="text" id="description" name="description" 
          placeholder="Ex: Salário, Supermercado" value={formData.descricao} onChange={handleChange} required/>
        </div>
        <div>
          <label htmlFor="amount">Valor (R$)</label>
          <input type="number" id="amount" name="amount" step="0.01" min="0.01" placeholder="0,00" value={formData.amount} onChange={handleChange} required/>
        </div>
        <div>
          <label htmlFor="type">Tipo</label>
          <select name="type" id="type" value={formData.type} onChange={handleChange}>
            <option value="Receita">Receita</option>
            <option value="Despesa">Despesa</option>
          </select>
        </div>
        <div>
          <label htmlFor="category">Categoria</label>
          <select name="category" id="category" value={formData.category} onChange={handleChange}>
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="date">Data</label>
          <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required/>
        </div>
        <div>
          <button type="button" onClick={() => navigate('/transactions')}>Cancelar</button>
          <button type="submit">Salvar Movimentação</button>
        </div>
      </form>
    </>
  )
}
