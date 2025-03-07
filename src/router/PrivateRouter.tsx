import { useContext } from "react"
import { PrivateRouterProps } from "../interfaces"
import { AuthContext } from "../auth";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRouter = ({children}:PrivateRouterProps) => {
    const {logged} = useContext(AuthContext);
    const { pathname, search } = useLocation();
    
    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath );
    return (
        logged
        ? children
        : <Navigate to="/login" />
    )
}
