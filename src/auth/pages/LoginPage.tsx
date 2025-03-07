import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context";

export const LoginPage = () => {
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();
    const onLogin = () => {
        login && login('Julian Rojas');
        const lastPath = localStorage.getItem('lastPath') || '/';
        navigate(lastPath, {replace: true});
    };
    return (
        <form className="row">
            <div className="col-md-4 offset-md-4 col-sm-8 offset-sm-2 col-xs-10 offset-xs-1">
                <h1>Login Page</h1>
                <hr />
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={onLogin}>Login</button>
                </div>
            </div>
        </form>
    )
}
