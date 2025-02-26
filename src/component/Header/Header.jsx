import { NavLink } from "react-router-dom";
import style from "./Header.module.css";

const Header = () => {
  return (
    <nav className={style.wrapper}>
      <ul>
        <div className={style.button}>
          <li>
            <NavLink
              to="/AllUnload"
              className={(navData) =>
                navData.isActive ? style.button_active_1 : style.button
              }
            >
              All Price
            </NavLink>
            <NavLink
              to="/ParserPrice"
              className={(navData) =>
                navData.isActive ? style.button_active_1 : style.button
              }
            >
              Parser Prise
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Header;
