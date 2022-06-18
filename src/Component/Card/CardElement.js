import styled from "styled-components";

export const MainContain = styled.div`
  width: 100%;
  color: white;
  
`


export const MainWrap = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;
     flex-wrap: wrap;


`
export const CardHold = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
     width: 300px;
     margin: 70px 0 70px 0;
     @media screen and (max-width: 1250px) {
        width: 280px;
   } 
     @media screen and (max-width: 1150px) {
      margin: ${({mn}) =>mn};
      width: ${({wh}) =>wh};
     
   }
   @media screen and (max-width: 990px) {
       margin: ${({mn1}) =>mn1};
     
   }
   @media screen and (max-width: 850px) {
       margin: ${({mn2}) =>mn2};
      width: ${({wh1}) =>wh1}; 
     
   }
   @media screen and (max-width: 750px) {
      margin: ${({mn3}) =>mn3};
      width: 300px;
   }
`

export const Avatar = styled.img`
   width: 100px;
   border-radius: 50%;
   @media screen and (max-width: 750px) {
       width: 250px;
       border-radius: 20%;
      :hover {
         width: ${({wth}) =>wth};
   }
   }
`
export const Icon = styled.div`
   display: ${({dy}) =>dy};
   color: #9A0563;
   font-size: 50px;
`

export const Title = styled.div`
  line-height: 5px;
  margin-bottom: -5px;
  color: ${({cl}) =>cl};
`

export const Head = styled.h1`
    font-size: ${({fz}) =>fz};
    font-weight: ${({fw}) =>fw};
    text-align: ${({tn}) =>tn};
    @media screen and (max-width: 1200px) {
       font-size: ${({fz1}) =>fz1};
   }

   @media screen and (max-width: 960px) {
     font-size: ${({fz2}) =>fz2};
   
   }
   @media screen and (max-width: 850px) {
        width: ${({wt}) =>wt};
       height: ${({ht}) =>ht};
       line-height: ${({lh}) =>lh};
       margin-left: ${({mgl}) =>mgl}; 
   }
   @media screen and (max-width: 750px) {
       width: 100%;
       font-size: ${({fz3}) =>fz3};
       margin-left:  ${({mgl2}) => mgl2};
       line-height: ${({lh1}) =>lh1};
   }
`


export const Para = styled.p`
   line-height: ${({lt}) =>lt};
   font-size: ${({ftz}) =>ftz};
   color: ${({clr}) =>clr};
   
   @media screen and (max-width: 990px) {
       width: ${({wd1}) =>wd1};
   }

   @media screen and (max-width: 750px) {
      width: 100%;
      text-align: center;
   }
`

export const Para1 = styled.p`
   margin-bottom: 20px;
   text-align: center;

   @media screen and (max-width: 950px) {
       margin-left: ${({mft3}) =>mft3};
   }
 
`

export const Dash = styled.div`
   border-bottom: ${({bb}) =>bb};
   width: 25px;
   background: black;

   @media screen and (max-width: 950px) {
       margin-left: ${({mnt3}) =>mnt3};
   }
`

export const DotBox= styled.div`
  display: flex;
  margin: 20px 0 0 0;
  justify-content: space-evenly;
  width: 100px;

   @media screen and (max-width: 950px) {
       margin-left: ${({mrt3}) =>mrt3};
   }
   
`

export const Dot= styled.div`
   border: ${({bd}) =>bd};
   width:5px;
   height: 10px;

`


