import styled from "styled-components";


export const ListItem = styled.li`
    background-color: #f0f0f0;
    border: 1px solid ${p => p.theme.colors.blue};
    border-radius: ${p => p.theme.radii.sm};
    margin-bottom: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    gap: ${p => p.theme.spacing(6)};
    align-items: center;
`;

export const ItemText = styled.p`
    font-weight: bold;
    color: #333;
`;