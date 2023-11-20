import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled(NavLink)`
  text-decoration: none; 
  color: ${p => p.theme.colors.white};
`;

export const WelcomeText = styled.div`
    font-weight: 600;
    font-size: 18px;
    color: ${p => p.theme.colors.white};
`;