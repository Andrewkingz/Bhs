import React from 'react'
import Card from '../Card/Card'
import styled from 'styled-components'

export const CardHolder2 = () => {
  return (
    <MainCardContain>
        <TopHead>
          <Header>Our Achievements</Header>
        </TopHead>
        <CardContain>
            <Card
          Name = "400+"
          Position = "Community"
          tn = "center"
           fz = "85px"
           fz2 = "60px"
           fz3 = "85px"
          ftz = "25px"
          cl = "#9A0563"
          clr = "#7D576D"
          lt = "10px"
          mn = "0 0 0 10px"
          mn3 = "0 0 0 0"
          wh = "200px"
          wh1 = "160px"
            />
        <Card
          Name = "300+"
          Position = "Beneficiaries"
          tn = "center"
          fz = "85px"
          fz2 = "60px"
          fz3 = "85px"
          ftz = "25px"
          cl = "#9A0563"
          clr = "#7D576D"
          lt = "10px"
          mn = "0 0 0 -60px"
          mn1 = "0 0 0 -5px"
          mn2 = "0 0 0 -15px"
          mn3 = "0 0 0 0"
          wh = "200px"
            />
        <Card
          Name = "20+"
          Position = "Volunteers"
          tn = "center"
          fz = "85px"  
          fz2 = "60px"
          fz3 = "85px"
          ftz = "25px"
          cl = "#9A0563"
          clr = "#7D576D"
          lt = "10px"
          wh = "220px"
          wh1 = "160px"
          mn = "0 0 0 -55px"
          mn1 = "0 0 0 -5px"
          mn2 = "0 0 0 -35px"
          mn3 = "0 0 0 0"
            />
         <Card
          Name = "2"
          Position = "Projects"
          tn = "center"
          fz = "85px"
          fz2 = "60px"
          fz3 = "85px"
          ftz = "25px"
          cl = "#9A0563"
          clr = "#7D576D"
          lt = "10px"
          mn = "0 0 0 -30px"
          mn2 = "0 0 0 -35px"
          mn3 = "0 0 0 0"
          wh = "210px"
            />
        </CardContain>
        <BottomHead>
             <Header2>Our Team</Header2>
           </BottomHead>
    </MainCardContain>
  )
}

const MainCardContain = styled.div`
   width: 100%;
`

const CardContain = styled.div`
    display: flex;
   justify-content: space-around;
   @media screen and (max-width: 750px) {
      flex-direction: column;
      /* background: orange; */
   }
`

const TopHead = styled.div`
    /* display: flex; */
`

const Header = styled.h1`
    text-align: center;
    color: #9A0563;
    font-size: 45px;
`

const BottomHead = styled.div``

const Header2 = styled.h1`
     text-align: center;
     color: #9A0563;
     font-size: 45px;
     font-weight: 500;
`