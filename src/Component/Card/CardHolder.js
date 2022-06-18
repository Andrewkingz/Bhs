import React from 'react'
import styled from 'styled-components'
import Card from '../Card/Card'
import Avat from '../Images/light.jpeg'
import Avat1 from '../Images/cuby.jpeg'
import Avat2 from '../Images/violet.jpeg'
import Avat3 from '../Images/lydia.jpeg'


export const CardHolder = () => {
  return (
    <CardHolderContainer>
    <CardContain>
        <Card
          Name = "Light Tonaria"
          Position = "Team Lead: Counselor BHS Network"
          Location = "Africa"
          Images = {Avat}
          mgl = "30px"
          mgl2 = "0px"
           tn = "center"
          bb = "2px solid white"
          bd = "1px solid white"
          fz = "38px"
          fw = "600"
          fz1 = "30px"
          fz2 = "28px"
          fz3 = "38px"
          ftz1 = "14px"
          cl = "white"
          clr = "white"
          wt = "60%"
          wt1 = "61%"
          wd1 = "60%"
          mlt = "0px"
          lh = "30px"
          lh1 = "5px"
          mn = "0 0 0 10px"
          mn3 = "0 0 0 0"
          wh = "200px"
          wh1 = "160px"
          wth = "300px"
          dy = "none"
        />

          <Card
          Name = "Cuby Mendie"
          Position = "Expert on Mental Health"
          Images = {Avat1}
          bb = "2px solid white"
          bd = "1px solid white"
          fz = "38px"
          fz1 = "30px"
          fz2 = "28px"
          fz3 = "38px"
          fw = "600"
          cl = "white"
          clr = "white"
          wt1 = "61%"
          mn = "0 0 0 -60px"
          mn1 = "0 0 0 -5px"
          mn2 = "0 0 0 -15px"
          mn3 = "0 0 0 0"
          wh = "200px"
          dy = "none"
        />

        <Card
          Name = "Violet Tasheni"
          Position = "Team Lead: Counselor BHS Network"
          Location = "Zambia"
          Images = {Avat2}
          mgl = "30px"
          mgl2 = "0px"
          bb = "2px solid white"
          bd = "1px solid white"
          fz = "38px"
          fz1 = "30px"
          fz2 = "28px"
          fz3 = "38px"
          fw = "600"
          ftz1 = "14px"
          cl = "white"
          clr = "white"
          wt = "60%"
          wt1 = "100%"
          wd1 = "50%"
          ht = "60px"
          wh = "220px"
          wh1 = "160px"
          mn = "0 0 0 -55px"
          mn1 = "0 0 0 -5px"
          mn2 = "0 0 0 -35px"
          mn3 = "0 0 0 0"
          lh = "30px"
          lh1 = "5px"
          dy = "none"
        />

        <Card
          Name = "Lydia Idungafa"
          Position = "Legal Adviser"
          Images = {Avat3}
          bb = "2px solid white"
          bd = "1px solid white"
          fz = "38px"
          fz2 = "28px"
          fz1 = "30px"
          fz3 = "38px"
          fw = "600"
          ftz1 = "14px"
          cl = "white"
          clr = "white"
          wt1 = "67%"
          mn = "0 0 0 -30px"
          mn2 = "0 0 0 -35px"
          mn3 = "0 0 0 0"
          wh = "210px"
          dy = "none"
        />  
      </CardContain>
   </CardHolderContainer>
    
  )
}

const CardHolderContainer = styled.div`
  width: 100%;
  background: #9A0563;
`

const CardContain = styled.div`
   display: flex;
   justify-content: space-around;

   @media screen and (max-width: 750px) {
      flex-direction: column;
    
   }
   
`

