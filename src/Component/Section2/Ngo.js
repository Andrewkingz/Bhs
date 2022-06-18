import React from 'react'
import styled from 'styled-components'
import Avatar   from '../Images/bg2.png'

export const Ngo = () => {
  return (
      <Ngocont>
    <NgoContainer>
        <NgoContain>
            <MainNgoContain>
                <NgoWrap>
                    <Para>COME JOIN US</Para>
                    <ContentWrap>
                        <Content1></Content1>
                        <Content2>We are first a community before an NGO</Content2>
                        {/* <Content3>before an NGO</Content3> */}
                    </ContentWrap>
                    <ButtonWrap>
                      <Button>JOIN OUR COMMUNITY</Button>
                    </ButtonWrap>
                </NgoWrap>
            </MainNgoContain>
        </NgoContain>
    </NgoContainer>
    </Ngocont>
  )
}
 
const Ngocont = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const NgoContainer = styled.div`
      width: 100%;
   height: 550px;
   background-image: url(${Avatar});
   background-repeat: no-repeat;
   background-position: top;
   background-size: cover;
   background-attachment: fixed;
   position: relative;
   color: #ffffff;
  
`

const NgoContain = styled.div`
   position: absolute;
    top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  transition: 0.3s;
  color: white;
`

const MainNgoContain = styled.div`
  width: 97%;
  display: flex;
  justify-content: end;
  align-items: center;
  height: 500px;
`

const NgoWrap = styled.div`

   @media screen and (max-width: 850px) {
      margin-left: 30px;
   }
`

const Para = styled.p`
  font-size: 12px;
  
  font-family: sans-serif;
`

const ContentWrap = styled.div`
   margin-bottom: 30px;
   @media screen and (max-width: 850px) {
     margin-right: 30px;
   }
`

const Content1 = styled.h1`
   margin-top: 40px;
   margin-bottom: 40px;
   border-top: 2px solid white;
   width: 630px;
   @media screen and (max-width: 1250px) {
     width: 100%;
    
   }
   @media screen and (max-width: 1150px) {
    width: 90%;
   }
   @media screen and (max-width: 850px) {
    width: 96%;
     
   }
`

const Content2 = styled.h1`
   font-size: 50px;
   font-weight: 650;
   line-height: 50px;
   width: 95%;
   word-wrap: break-word;
   margin-right: -350px;
   @media screen and (max-width: 1300px) {
    
    font-size: 50px;
    width: 90%;
    
   }
   @media screen and (max-width: 1150px) {
    font-size: 40px;
   }
   @media screen and (max-width: 850px) {
     width: 100%;
     margin-right:-50px;
     
   }
  
`

const ButtonWrap = styled.div`
   display: flex;
   justify-content: flex-end;
   margin-top: 40px;
   @media screen and (max-width: 1250px) {
    margin-left: -21px;
    
   }
   @media screen and (max-width: 1150px) {
    margin-left: -1px;
    
     
   }
   
`
const Button = styled.div`
   background: #9A0563;
   width: 590px;
   height: 40px;
   text-align: center;
   color: white;
   font-weight: bold;
   padding: 15px 20px 5px 20px;
   @media screen and (max-width: 1250px) {
   width: 90.1%;
    
   }
   @media screen and (max-width: 1150px) {
    width: 80%;
    margin-right: 60px;
   }
   @media screen and (max-width: 850px) {
     width: 100%;
     
   }
   
`

