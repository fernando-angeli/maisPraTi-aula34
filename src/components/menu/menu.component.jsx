import "./menu.style.css";
import Logo from "../../assets/React_logo.png";

function Menu() {
  return (
    <div className="menu">
      <div className="logo">
        <img className="logo-menu" src={Logo} alt="" />
        <h1>React</h1>
      </div>
      <ul>
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Sobre</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
