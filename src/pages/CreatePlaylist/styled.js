import styled from "styled-components"

export const Container = styled.div`
.vinyl{

	display:flex;
	align-items:center;
	justify-content:center;
	width:200px;
	height:200px;
	border-radius:100%;
	background:linear-gradient(-45deg,#333,black,#555, black,#333);
   
}
.label{
	width:100px;
	height:100px;
	border-radius:100%;
	z-index:1;
	background-image:url(https://resources.tidal.com/images/f83e0fb3/4240/4734/8634/5f8fbb80a498/640x640.jpg);
	background-size:100px;
	background-repeat: no-repeat;
	color:white;
    font-weight:900;
}
.vinyl:hover {
    cursor: pointer;
	-webkit-animation: spin 40s 0.5s linear infinite;
    animation: spin 40s 0.5s linear infinite;
    @keyframes spin {
	to{
		transform: rotate(360deg);
	}
}
}

`
export const Main = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
    
`
export const SectionLeft = styled.div` 
	width: 100%;
    height: 70vh;
	padding: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 3fr));
	grid-gap: 1rem;
    overflow-y: scroll;
	
        
`
export const SectionRight = styled.div`
	width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
	border: 0;
	border-left: 2px solid black;
    
`
export const ListAlbum = styled.div`
	height: 35vh;
    display: flex;
    flex-direction: column;
    align-items: center;
	background-color:rgba(255,255,255,0.25);
    backdrop-filter: blur(1px);
    box-shadow: 0 8px 32px 0 rgb(31, 38, 135, 0.37);
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.18);

`
export const ListIcons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
	margin: 10px;
	
	button {
        width: 50px;
		cursor: pointer;
		margin: 2px; 
        padding: 10px;
        background-color:rgba(255,255,255,0.25);
        backdrop-filter: blur(2px);
        box-shadow: 0 8px 32px 0 rgb(31, 38, 135, 0.60);
        border-radius: 10px;
        border: 1px solid rgba(255,255,255,0.18);
	}
    
        
`
export const List = styled.div`
 width: 100%;
 border: 0;
 
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
export const Button= styled.button`
    min-width: 20vw;
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 54px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;


    color: #333;
    background-color:rgba(255,255,255,0.25);
    backdrop-filter: blur(2px);
    box-shadow: 0 8px 32px 0 rgb(31, 38, 135, 0.46);
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.18);
    cursor: pointer;

        
`
export const ButtonsInline= styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-around;;
    align-items: center;
    margin: 50px;

`
export const SpanAlbum = styled.div`
    padding: 5px 10px;
    margin: 10px;
    background-color:rgba(255,255,255,0.25);
    backdrop-filter: blur(2px);
    box-shadow: 0 8px 32px 0 rgb(31, 38, 135, 0.60);
    border-radius: 6px;
    border: 1px solid rgba(255,255,255,0.18);
`