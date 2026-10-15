import { NavLink } from "react-router-dom"
import Logo from "../assets/Logo.png"
import "../style/SideBar.css"

const SideBar = () => {
  return (
    <>
      <aside>
        <div className="logo-info">
            <img src={Logo} alt="" className="logo-img"/>
            <div className="logo-text"><span className="financetracker">FinanceTracker</span><span className="institutional">Institutional</span></div>
        </div>
        <div className="links">
            <NavLink to={"/"} className="link">Dashboard</NavLink>
            <NavLink to={"/transactions"} className="link">Transações</NavLink>
            <NavLink to={"/transactions/new"} className="link">Nova Transação</NavLink>
            <NavLink className="link">Relatórios</NavLink>
            <NavLink className="link">Configurações</NavLink>
        </div>
      </aside>
    </>
  )
}

export default SideBar