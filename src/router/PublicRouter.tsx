import { useContext } from "react"
import { PublicRouterProps } from "../interfaces"
import { AuthContext } from "../auth";
import { Navigate } from "react-router-dom";

export const PublicRouter = ({children}:PublicRouterProps) => {
    const {logged} = useContext(AuthContext);
    return (
        logged
        ? <Navigate to="/marvel" />
        : children
    )
}
