import React from 'react'
import styled from 'styled-components'
import Help   from '../Images/bg5.jpg'

export const Support = () => {
  return (
      <Supportcont>
    <SupportContainer>
        <SupportContain>
            <MainSupportContain>
                <SupportWrap>
                    <Para>WANT TO MAKE A DIFFERENCE?</Para>
                    <ContentWrap>
                        <Content1>Support the humanitarian movement voluntarily</Content1>
                    </ContentWrap>
                    <ButtonWrap>
                    <Button>Donate</Button>
                    </ButtonWrap>
                </SupportWrap>
            </MainSupportContain>
        </SupportContain>
    </SupportContainer>
    </Supportcont>
  )
}
 
const Supportcont = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const SupportContainer = styled.div`
      width: 100%;
   height: 550px;
   background-image: url(${Help});
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
   position: relative;
   background-attachment: fixed;
   color: #ffffff;
`

const SupportContain = styled.div`
   position: absolute;
    top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.65);
  transition: 0.3s;
  color: white;
`

const MainSupportContain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 450px;
`

const SupportWrap = styled.div`
    /* font-family: sans-serif; */
`

const Para = styled.p`
  font-size: 14px;
  /* margin-left: 70px; */
  text-align: center;
  font-family: sans-serif;
  word-spacing: 5px;

`

const ContentWrap = styled.div`
   line-height: 15px;
   margin-bottom: 30px;
   font-family: sans-serif;

`

const Content1 = styled.h1`
   font-size: 80px;
   font-weight: 300;
   text-align: center;
   width: 60%;
   line-height: 70px; 
   margin-left: 290px;
   @media screen and (max-width: 1300px) {
     margin-left: 100px;
     width: 79%;
   }
   @media screen and (max-width: 1000px) {
     
     font-size: 60px;
     margin-left: 90px;
     
   }
   @media screen and (max-width: 850px) {
     
     font-size: 60px;
     margin-left: 75px;
  
   }
   @media screen and (max-width: 750px) {
     line-height: 45px;
     
     font-size: 50px;
     margin-left: 30px;
     width: 90%;
   }
   @media screen and (max-width: 500px) {
     line-height: 45px;
    
     font-size: 45px;
     margin-left: 22px;
     width: 90%;
   }
   @media screen and (max-width: 375px) {
     line-height: 35px; 
     font-size: 30px;
     margin-left: 18px;
     width: 90%;
     margin-top: 40px;
     margin-bottom: 40px;
   } 
`




const ButtonWrap = styled.div`
   display: flex;
   justify-content: center;
   
`

const Button = styled.div`
   background: #9A0563;
   width: 90px;
   height: 40px;
   text-align: center;
   color: white;
   font-weight: bold;
   padding: 10px 20px 10px 20px;
  
`

