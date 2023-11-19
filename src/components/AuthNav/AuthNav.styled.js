import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavAuth = styled(NavLink)`
  text-decoration: none; 
  color: ${p => p.theme.colors.white};
   &.active {
      border: ${p => p.theme.spacing(0.5)} solid ${p => p.theme.colors.white};
      border-radius: ${p => p.theme.radii.sm};
    };
`;