import styled from 'styled-components';

export const Container = styled.div`
    background-color: #fff;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    align-items: center;
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid #CCC;
    outline: none;
    border-radius: 5px;
    margin-right: 10px;
    background: transparent;
`;

export const Button = styled.div`
    flex: 1;
    margin-top: auto;
    padding: 10px 20px;
    background-color: #28a745;
    color: #fff;
    text-align: center;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #218838;
    }
`;