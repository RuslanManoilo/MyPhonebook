import { NavLink } from "react-router-dom"

export const Navigation = () => {
    return (
        <nav>
            <NavLink to="/">
                MyPhonebook
            </NavLink>
            
            <NavLink to="/">
                Home
            </NavLink>

            <NavLink to="/contacts">
                Contacts
            </NavLink>
        </nav>
    );
};