import { NavLink } from "react-router-dom"
import Logo from "../assets/Logo.png"
import "../style/SideBar.css"
import Img1 from "../assets/border-all-solid-full.svg";
import Receipt from "../assets/receipt-solid.png";
import Plus_New from "../assets/circle-plus.png";

const SideBar = () => {
  return (
    <>
      <aside>
        <div className="logo-info">
            <img src={Logo} alt="" className="logo-img"/>
            <div className="logo-text"><span className="financetracker">FinanceTracker</span><span className="institutional">Institutional</span></div>
        </div>
        <div className="links">
            <NavLink to={"/"} className="link">
              <div className="div_dashboard">
                <img src={Img1} alt="" className="dash_img"/><span>Dashboard</span>
              </div>
            </NavLink>
            <NavLink to={"/transactions"} className="link">
              <div className="div_transactions">
                <img src={Receipt} alt="" className="transactions_img"/>
              <span>Transações</span>
              </div>
            </NavLink>
            <NavLink to={"/transactions/new"} className="link">
            <div className="div_newtran">
              <img src={Plus_New} alt="" className="newtran_img"/>
              <span>Nova Transação</span>
            </div>
            
            </NavLink>
        </div>
      </aside>
    </>
  )
}

export default SideBar