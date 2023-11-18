import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";

export const UserMenu = () => {
    const { user } = useAuth();
    const dispatch = useDispatch();

    const clickLogOut = () => {dispatch(logOut())}

    return (
        <div>
            <p>Welcome, {user.name}</p>
            <button type="button" onClick={clickLogOut}>
                Logout
            </button>
        </div>
    );
};