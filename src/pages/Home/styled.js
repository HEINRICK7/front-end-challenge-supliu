import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

`
export const Background = styled.div`
    position: relative;
    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
        
        
    }
`
export const Main = styled.div`
    width: 80%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 10%;
    display: flex;
    flex-direction: row;
        
`
export const SectionLeft = styled.div` 
    width: 50%;
    display: flex;
    margin-top: 10%;
    flex-direction: column;
    justify-content: center;
    padding: 30px;
        
`
export const SectionRight = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
        
`
export const Button= styled.button`
    min-width: 30%;
    max-width: 10%;
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 54px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;


    color: #FFFFFF;
    border: 0;
    background: #A8936B;
    border-radius: 14px;
    cursor: pointer;

        
`
export const P = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 162.02%;
    /* or 62px */
    margin-bottom: 150px;
    letter-spacing: 0.11em;

    color: #685B43;

        
`
export const Span = styled.span`
    font-family: 'Oleo Script Swash Caps';
    font-style: normal;
    font-weight: 400;
    font-size: 52px;
    line-height: 106.3%;
    
    letter-spacing: 0.075em;
    
    color: #A8936B;

        
`
export const Img = styled.img`
    width: 70%;
        
`