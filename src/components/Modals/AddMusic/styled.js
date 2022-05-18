import styled from "styled-components"

export const Button = styled.button`

        width: 50px;
		cursor: pointer;
		margin: 2px; 
        padding: 10px;
        background-color:rgba(255,255,255,0.25);
        backdrop-filter: blur(2px);
        box-shadow: 0 8px 32px 0 rgb(31, 38, 135, 0.60);
        border-radius: 10px;
        border: 1px solid rgba(255,255,255,0.18);
        
`
export const Form = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const Input = styled.input`
    width: 50%;
    padding: 10px;
    margin: 0 10px;
    border:0;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    outline: none;
`