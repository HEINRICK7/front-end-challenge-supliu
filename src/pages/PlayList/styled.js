import styled from "styled-components"

export const Container = styled.div`
        width: 100%;
        height: 10vh;

`
export const Background = styled.div`
    position: relative;
    img {
        
        min-width: 100%;
        height: 100vh;
        
    }
`
export const Main = styled.div`
    display: flex;
    flex-direction:column;
    color: #FFFFFF;
    position: absolute;
    top: 10px;
    left: 10%;
    
    width: 80%;
    height: 90%;
    background-color:rgba(255, 255, 255, 0.60);
    backdrop-filter: blur(1px);
    box-shadow: 0 8px 32px 0 rgb(31, 38, 135, 0.37);
    border: 1px solid rgba(255,255,255,0.18);
`  
export const Header = styled.div`
    background: #FFFFFF;
    max-width: 100%;
    height: 12vh;
    display: flex;
    flex-direction:row ;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;

    p {
        color: #000000;
        font-size: 40px;
        font-weight:300;
    }
`  
export const Section = styled.div`
    max-width: 100%;
    height: 88vh;
    padding: 0 15px;
    
    p {
        color: #000000;
    }
    
`  
export const Input = styled.input`
    min-width: 80%;
    padding: 14px;
    border: 0;
    
    border-radius: 30px;
    outline-style: none;
    margin: 0 0 20px 0;
    color: #000000;
`  
export const Button = styled.button`
    min-width: 15%;
    height: 50px;
    margin: 0 10px;
    padding: 0 35px;
    border: 0;
    border-radius: 30px;
    background: #1890FF;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 300;
    cursor: pointer;
    
`  
export const List = styled.div`
 width: 100%;
 max-height:50vh;
 border: 0;
 overflow-y: scroll;
 
`  
export const Ul = styled.ul`
    margin: 0;
    
`
export const Li = styled.li`
    list-style: none;
`
export const MainAlbum = styled.div`
    display: flex;
    width: 97%;
    flex-direction: column;
    align-items: center;
  
`
export const SectionAlbum = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    

    div{
        margin: 10px;
        
    }
   
`
export const Menu = styled.div`
    position: absolute;
    top: 30px;
    display: flex;
    flex-direction: column;
    margin: 10px;
`
export const BackButton = styled.button`
    width: 90px;
    position: absolute;
    top: 50px;
    left: 30px;
    cursor: pointer;

    padding: 5px 10px;
    background-color:rgba(255, 255, 255, 0.60);
    backdrop-filter: blur(1px);
    box-shadow: 0 8px 32px 0 rgb(31, 38, 135, 0.37);
    border: 1px solid rgba(255,255,255,0.18);

`