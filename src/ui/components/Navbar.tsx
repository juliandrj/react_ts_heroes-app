import { Link, NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../../auth";
import { useContext } from "react";

export const Navbar = () => {
    const {userName, logout} = useContext(AuthContext);
    const navigate = useNavigate();
    const onLogout = () => {
        logout && logout();
        navigate('/login', {replace: true});
    };
    return (
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Asociaciones</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className={({isActive}) => `nav-link${isActive ? ' active' : ''}`} to="/marvel">
                                Marvel
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive}) => `nav-item nav-link${isActive ? ' active' : ''}`} to="/dc">
                                DC
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive}) => `nav-item nav-link${isActive ? ' active' : ''}`} to="/search">
                                Search
                            </NavLink>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <span className="navbar-text m-1" aria-label="userName">
                            {userName}
                        </span>
                        <button className="btn btn-outline-light" type="button" onClick={onLogout}>Logout</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
