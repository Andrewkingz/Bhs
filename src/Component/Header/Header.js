import React, {useState} from 'react'
import styled from 'styled-components'
import Logos from '../Images/logo.png'
import { FaBars, FaTimes } from "react-icons/fa";

export const Header = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }
  return (
    <Container>
        <ContainerWrapper>
            <LogoWrap>
            <Logo img src={Logos}/>
            </LogoWrap>

            <MobileIcon onClick={handleClick}>
          {click ? <FaTimes/> : <FaBars/>}
          </MobileIcon>
            
            <NavsWrap onClick={handleClick} click={click}>
                <NavLink>Home</NavLink>
                <NavLink1>About Us</NavLink1>
                <NavLink2>Events</NavLink2>
                <NavLink3>Gallery</NavLink3>
                <NavLink4>Blog</NavLink4>
                <NavLink5>Contact</NavLink5>
            </NavsWrap>
            <Button>Donate</Button>
        </ContainerWrapper>
    </Container>
  )
}

 const Container = styled.div`
   width: 100%;
   height: 100px;
   background: white;
   color: black;
   display: flex;
   justify-content: center;
 `

 const ContainerWrapper = styled.div`
   width: 90%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: space-around;
   margin-top: 30px;
 `

 const LogoWrap = styled.div``

 const Logo = styled.img`
   width: 150px; 

 `

 const NavsWrap = styled.ul`
   width: 500px;
   height: 100%;
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   align-items: center;
   cursor: pointer;
   font-size: 14px;
   @media screen and (max-width: 1024px) {
    /* display: none; */
    justify-content: flex-start;
    
    flex-direction: column;
    position: absolute;
    background: whitesmoke;
    height: 40vh;
    width: 30%;
    top: 20%;
    top:  ${({click}) => (click ? 50: '-70%')};
    left: 30%;
    transition: all 0.8s ease-in-out; 
     
    opacity: 0.8;
 }
 ` 
 const NavLink = styled.li`
   /* background: pink; */
   width: 80px;
   height: 30px;
   text-align: center;
   padding: 5px 0 0 0;
   color: #9A0563;
   list-style: none;
   @media screen and (max-width: 1024px) {
       position: absolute;
       left: 0;
        width: 100%;
        background: #55595C;
        text-align: start;
        color: white;
    }
   :hover{
    color: #9A0563;
    padding-bottom: 20px;
    transition: all 0.5s ease-in-out;
    @media screen and (max-width: 1024px) {
        :hover{
        padding-bottom: 0px;
        color: white;
        
}   
    }
  
}
 `

 const NavLink1= styled.li`
   list-style: none;
   /* background: pink; */
   width: 80px;
   height: 30px;
   text-align: center;
   padding: 5px 0 0 0;
   @media screen and (max-width: 1024px) {
       /* background: pink; */
       position: absolute;
       /* height: 100%; */
       left: 0;
       bottom: 67%;
        width: 100%;
        text-align: start;

    }
   :hover{
    color: #ECA87C;
    padding-bottom: 20px;
    transition: all 0.5s ease-in-out;
    @media screen and (max-width: 1024px) {
        :hover{
        color: white;
        background: #55595C;
        padding-bottom: 0px;
        
}   
    }
}
 `
  const NavLink2= styled.li`
  list-style: none;
  /* background: pink; */
  width: 80px;
  height: 30px;
  text-align: center;
  padding: 5px 0 0 0;
  @media screen and (max-width: 1024px) {
      /* background: pink; */
      position: absolute;
      /* height: 100%; */
      left: 0;
      bottom: 50%;
       width: 100%;
       text-align: start;
   }
  :hover{
   color: #ECA87C;
   padding-bottom: 20px;
   transition: all 0.5s ease-in-out;
   @media screen and (max-width: 1024px) {
        :hover{
        color: white;
        background: #55595C;
        padding-bottom: 0px;
        
}   
    }
}
`
const NavLink3= styled.li`
list-style: none;
/* background: pink; */
width: 80px;
height: 30px;
text-align: center;
padding: 5px 0 0 0;
@media screen and (max-width: 1024px) {
    /* background: pink; */
    position: absolute;
    /* height: 100%; */
    left: 0;
    bottom: 33%;
     width: 100%;
     text-align: start;
 }
:hover{
 color: #ECA87C;
 padding-bottom: 20px;
 transition: all 0.5s ease-in-out;
 @media screen and (max-width: 1024px) {
        :hover{
        color: white;
        background: #55595C;
        padding-bottom: 0px;
        
}   
    }
}
`
const NavLink4= styled.li`
list-style: none;
/* background: pink; */
width: 80px;
height: 30px;
text-align: center;
padding: 5px 0 0 0;
@media screen and (max-width: 1024px) {
    /* background: pink; */
    position: absolute;
    /* height: 100%; */
    left: 0;
    bottom: 17%;
     width: 100%;
     text-align: start;
 }
:hover{
 color: #ECA87C;
 padding-bottom: 20px;
 transition: all 0.5s ease-in-out;
 @media screen and (max-width: 1024px) {
        :hover{
        color: white;
        background: #55595C;
        padding-bottom: 0px;
        
}   
    }
}
`
const NavLink5= styled.li`
list-style: none;
/* background: pink; */
width: 80px;
height: 30px;
text-align: center;
padding: 5px 0 0 0;
@media screen and (max-width: 1024px) {
    /* background: pink; */
    position: absolute;
    left: 0;
    bottom: 0;
     width: 100%;
     text-align: start;
 }
    :hover{
    color: #ECA87C;
    padding-bottom: 20px;
    transition: all 0.5s ease-in-out;
    @media screen and (max-width: 1024px) {
        :hover{
        color: white;
        background: #55595C;
        padding-bottom: 0px;
        
}   
    }
    }
`

 const Button = styled.div`
   width: 100px;
   height: 30px;
   background: #9A0563;
   color: white;
   text-align: center;
   padding: 10px 30px 10px 30px ;
 `
const MobileIcon = styled.div`
      font-size: 25px;
    
      display: none; 
      background: whitesmoke;
      @media screen and (max-width: 1024px) {
    display: block;
 }
`