import styled from 'styled-components';

export const Row = styled.tr``;

export const Column = styled.td`
    padding: 10px 0;
`;

export const Category = styled.div<{ $backgroudColor: string }>`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: #fff;
    background-color: ${(props) => props.$backgroudColor};
`;

export const Value = styled.div<{ $expense: boolean }>`
    color: ${(props) => (props.$expense ? '#ff0000' : '#00ff00')};
`;