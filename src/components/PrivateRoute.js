import { useAuth } from "hooks/useAuth"
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const { isLoggedIn } = useAuth();
    const { isRefreshing } = useAuth();
    const shouldRedirect = !isRefreshing && !isLoggedIn;

    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};