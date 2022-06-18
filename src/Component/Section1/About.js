import React from 'react'
import styled from 'styled-components'
import BG from '../Images/bg1.png'

export const About = () => {
  return (
    <MainContainer>
        <AboutContain>
            <MainAboutContain>
                <AboutWrap>
                    <TopWrap>
                        <Para>ABOUT US</Para>
                        <Head>We seek to raise a <br/> generation of individuals <br/>who desire to change the<br/>
                        narrative and stereotypes <br/> labelled against people <br/>
                        from broken homes
                        </Head>
                        <ButtonWrap>
                        <Button>READ MORE</Button>
                        </ButtonWrap>
                    </TopWrap>
                    <BottomWrap>
                        <BottomLeft>
                            <Head1>Our Mission</Head1>
                            <Para1>To change the narrative about people from broken homes by <br/>
                            providing empowerment in Education, Entrepreneurship, <br/>
                            Personal Development & transforming their lives through <br/>
                            counseling, sensitization and access to credible resources.
                            </Para1>
                        <Head2>OUR MISSION</Head2>
                        <Dash></Dash>
                       </BottomLeft>
                            
                       <BottomRight>
                       <Head1>Our Vision</Head1>
                            <Para2>We see a generation of people from<br/>
                            broken/dysfunctional homes who are healed, <br/>
                            transformed and empowered to succeed in all <br/>
                            spheres of life.
                            </Para2>
                        <Dash></Dash>
                        <Head2>OUR MISSION</Head2>
                       </BottomRight>
                       
                    </BottomWrap>
                </AboutWrap>
            </MainAboutContain>
        </AboutContain>
    </MainContainer>
  )
}

const MainContainer = styled.div`
   width: 100%;
   height: 1200px;
   background-image: url(${BG});
   background-repeat: no-repeat;
   background-position: center;
   background-size: 35%;
   position: relative;
   background-attachment: fixed;
   color: #5D4251;
   background-attachment: fixed;
  
`


const AboutContain = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  transition: 0.3s;
  color: #5D4251;
  transition: 0.3s;
`

 const MainAboutContain = styled.div`
  width: 100%;
   display: flex;
  justify-content: flex-start;
  align-items: center;
 `

const AboutWrap = styled.div`
  width: 95%;
  margin-left: 30px;
  margin-top: 70px;
`
const TopWrap = styled.div`
   margin-left: 70px;
   @media screen and (max-width: 1200px) {
    margin-left: 5px;

   }
`

const Para = styled.p`
  font-size: 14px;
  /* margin-left: 70px; */
`

const Head = styled.h1`
   font-size: 75px;
   font-weight: 400;
   margin-top: -5px;
   line-height: 75px;
   /* margin-left: 70px; */
   @media screen and (max-width: 950px) {
    font-size: 60px;
    line-height: 60px;
   }
   @media screen and (max-width: 750px) {
    font-size: 50px;

   }
   @media screen and (max-width: 650px) {
    font-size: 40px;
    line-height: 50px;
   }
`


const ButtonWrap = styled.div`
     display: flex;
     /* align-items: center; */
     justify-content: center;
     margin-top: -30px;
     
`


const Button = styled.div`
   text-align: center;
   width: 150px;
   height: 40px;
   border: 1px solid #9A0563;
   background: #9A0563;
   color: white;
   padding: 15px 10px 0 15px;

`
const BottomLeft = styled.div`
    margin-left: -70px;
    margin-right: 10px;
    word-break: normal;
    @media screen and (max-width: 1150px) {
   margin-left: -60px;
   /* background: yellowgreen; */
   }
   @media screen and (max-width: 850px) {
    margin-left: -20px;
   } 
   @media screen and (max-width: 600px) {
    width: 95%;
   } 

`

const BottomWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 50px;
  flex-wrap: wrap;
  @media screen and (max-width: 850px) {
  flex-direction: column;
   align-items: center;
   } 
   @media screen and (max-width: 425px) {
    align-items: center;
  
   } 
  

`

const Head1 = styled.h1`
  font-size: 45px;
  color: #9A0563;

`

const Para1 = styled.p`
font-size: 18px;
line-height: 25px;
transition: 0.3s;

@media screen and (max-width: 1150px) {
   width: 450px;
   }
   @media screen and (max-width: 950px) {
   font-size: 16px;
   width: 400px;
   line-height: 20px;
   } 
   @media screen and (max-width: 850px) {
    width: 600px;
    font-size: 20px;
    line-height: 25px;
    
   } 
   @media screen and (max-width: 600px) {
    font-size: 18px;
    width: 95%;
   }
`
const Para2 = styled.p`
font-size: 25px;
line-height: 35px;
@media screen and (max-width: 1250px) {
   font-size: 22px;
   word-break: break-all;
   }
   @media screen and (max-width: 1150px) {
     width: 450px;
   }
   @media screen and (max-width: 950px) {
   font-size: 19px;
    width: 400px;
    line-height: 30px;
   } 
   @media screen and (max-width: 850px) {
    width: 600px;
    font-size: 28px;
    line-height: 35px;
   } 
   @media screen and (max-width: 600px) {
    font-size: 24px;
   /* background: orange; */
  width: 95%;
   }
   @media screen and (max-width: 425px) {
    font-size: 27px;

   }
`

const Head2 = styled.div`
   margin-bottom: 20px;
`

const Dash = styled.div`
  border-bottom: 2px solid black;
  width: 490px;
  margin-bottom: 20px;
  @media screen and (max-width: 1150px) {
   width: 450px;
   }
   @media screen and (max-width: 950px) {
    width: 400px;
   } 
   @media screen and (max-width: 850px) {
   /* margin-left: -150px; */
    width: 550px;

   } 
   @media screen and (max-width: 600px) {
    width: 98%;

   }
   @media screen and (max-width: 425px) {
    width: 95%;

   }
`
const BottomRight = styled.div`
   margin-right: -80px;
   margin-left: 100px;
   @media screen and (max-width: 1250px) {
    margin-left: -40px;
    /* margin-right: 120px; */
   }
   @media screen and (max-width: 1150px) {
   margin-left: -85px;
   margin-right: -55px;
   /* background: yellowgreen; */
   }
   @media screen and (max-width: 950px) {
   /* margin-left: -150px; */
   /* background: yellow; */
   
   } 
   @media screen and (max-width: 850px) {
   /* margin-left: -150px; */
   /* background: pink; */

   } 
   @media screen and (max-width: 600px) {
      width: 95%;

   } 
`

