import {Link} from 'react-router-dom'

function Navbar() {
    return (
                    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                        <Link to={"/"}
                              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                            Philharmonic
                        </Link>
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <Link to={"/users"} className="nav-link">
                                    Users
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
                        </ul>
                    </header>
    )
}