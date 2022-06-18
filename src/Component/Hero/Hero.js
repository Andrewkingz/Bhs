import React from 'react'
import styled from 'styled-components'
import Family from '../Images/group.jpeg'

export const Hero = () => {
  return (
    <HeroContainer>
        <HeroContain>
            <MainHeroContain>
                <MainHeroWrap>
                    <HeroWrap>
                        <ContentWrap>
                            <Content1>Empowering Families</Content1>
                            <Content2>and Transforming</Content2>
                            <Content3>Lives</Content3>
                        </ContentWrap>
                        <Para>...one family per time</Para>
                        <Button>Donate</Button>

                    </HeroWrap>
                </MainHeroWrap>    
            </MainHeroContain>
        </HeroContain>
    </HeroContainer>
  )
}

const HeroContainer = styled.div`
    width: 100%;
  display: flex;
  justify-content: center;
`

const HeroContain = styled.div`
   width: 100%;
   height: 600px;
   background-image: url(${Family});
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   background-attachment: fixed;
   position: relative;
   color: #ffff;
`

const MainHeroContain = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: rgba(0, 0, 0, 0.6);
   color: white;
`
const MainHeroWrap = styled.div`
       display: flex;
    justify-content: center;
    align-items: center;
    /* flex-direction: column; */
    height: 450px;
    font-family: sans-serif;
`

const HeroWrap = styled.div`

`

const ContentWrap = styled.div`
    line-height: 25px;
   margin-bottom: 30px;
   margin-top: 290px;
   font-family: sans-serif;
`

const Content1 = styled.h1`
   font-size: 70px;
   font-weight: 300;
   text-align: center;
   @media screen and (max-width: 800px) {
       font-size: 50px;
   }
   @media screen and (max-width: 600px) {
       font-size: 40px;
   }
   @media screen and (max-width: 400px) {
       font-size: 30px;
   }
`

const Content2 = styled.h1`
   font-size: 70px;
   font-weight: 300;
   margin-left: 70px;
   @media screen and (max-width: 800px) {
       font-size: 50px;
   }
   @media screen and (max-width: 600px) {
       font-size: 40px;
       margin-left: 40px;
   }
   @media screen and (max-width: 400px) {
       font-size: 30px;
       margin-left: 30px;

   }
`

const Content3 = styled.h1`
   font-size: 70px;
   font-weight: 300;
   text-align: center;
   @media screen and (max-width: 800px) {
       font-size: 50px;
   }
   @media screen and (max-width: 600px) {
       font-size: 40px;
   }
   @media screen and (max-width: 400px) {
       font-size: 30px;
       
   }
`

const Para = styled.p`
      font-size: 24px;
      font-style: italic;
  /* margin-left: 70px; */
  text-align: center;
`

const Button = styled.div`
   background: #9A0563;
   width: 110px;
   height: 40px;
   text-align: center;
   color: white;
   font-weight: 500;
   padding: 20px 15px 5px 20px;
   margin-left: 270px;
   margin-top: 50px;
   @media screen and (max-width: 800px) {
       margin-left: 160px;
   }
   @media screen and (max-width: 600px) {
       margin-left: 110px;
   }
   @media screen and (max-width: 400px) {
      
       margin-left: 60px;

   }
`

