import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 300px;
    padding: 20px;
    border: 1px solid rgb(204, 204, 204);
    border-radius: 8px;
`

export const Label = styled.div`
    margin-bottom: 10px;
`
export const Input = styled.input`
    margin-bottom: 10px;
`
export const Button = styled.button`
    width: 100px;
    padding: 1px;
    margin: 10px;
    border-radius: 4px;
    border: 1px solid black;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);
`