import { NavLink } from "react-router-dom";
import styled from "styled-components";



export const NavMenu = styled(NavLink)`
  text-decoration: none; 
  color: #3498db;

    &.active {
      text-decoration: underline;
    };
`;

export const NavBtn = styled(NavLink)`
  padding: 8px 8px;
  border-radius: ${p => p.theme.radii.md};
  text-decoration: none; 
  color: ${p => p.theme.colors.white};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &.active {
      border: 2px solid ${p => p.theme.colors.white};
      border-radius: ${p => p.theme.radii.md};
    };

    &:hover,
    &:focus {
      box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.22),
            0px 2px 2px 0px rgba(0, 0, 0, 0.16), 
            0px 1px 5px 0px rgba(0, 0, 0, 0.14);
      transform: scale(1.05);
    };
`;