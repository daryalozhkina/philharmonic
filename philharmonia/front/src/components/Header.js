import {Link} from "react-router-dom";
import React from "react";

function Header({isAuthenticated, logout}) {
    let loginLink, loginTitle, loginHandler;
    loginLink = "/login";
    loginTitle = "Вход";
    if (isAuthenticated) {
        loginLink = "/logout";
        loginTitle = "Выйти";
        loginHandler = logout;
    }
    return (
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
            <Link to={"/"}
                  className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                Филармония
            </Link>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link to={"/users"} className="nav-link">
                        Пользователи
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/concerts"} className="nav-link">
                        Концерты
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/items"} className="nav-link">
                        Номера
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={loginLink} className="nav-link" onClick={loginHandler}>
                        {loginTitle}
                    </Link>
                </li>
                {!isAuthenticated && <li className="nav-item"><Link to={"/register"} className="nav-link"
                >Зарегистрироваться</Link></li>}
            </ul>
        </header>
    );
}

export default Header;