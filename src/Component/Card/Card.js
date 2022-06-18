import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'

import {
   MainContain,
   MainWrap,
   CardHold,
   Avatar,
   Icon,
   Title,
   Head,
   Para,
   Para1,
   Dash,
   DotBox,
   Dot
 
}from './CardElement'

const Card = (props) => {
  return (
    <MainContain>
       
        <MainWrap>
          <CardHold mn={props.mn} mn1={props.mn1} mn2={props.mn2} mn3={props.mn3} wh={props.wh} wh1={props.wh1}>
            <Avatar src={props.Images} wth={props.wth}/>
             <Icon dy={props.dy}><BsFillStarFill/></Icon>
            <Title cl={props.cl}>
             <Head lh={props.lh} lh1={props.lh1}  ht={props.ht} tn={props.tn} mgl={props.mgl} fz={props.fz} fz2={props.fz2} fz3={props.fz3} fw={props.fw} fz1={props.fz1}
               mgl1={props.mgl1}  mgl2={props.mgl2}  wt={props.wt}>{props.Name}</Head>
              
            </Title>
            <Para lt={props.lt}  wd1={props.wd1} ftz={props.ftz} clr={props.clr}>{props.Position}</Para>
            <Para1 mft3={props.mft3}>{props.Location}</Para1>
             <Dash bb={props.bb} mnt3={props.mnt3}></Dash>

             <DotBox mrt3={props.mrt3}>
               <Dot bd={props.bd}></Dot>
               <Dot bd={props.bd}></Dot>
             </DotBox>
         </CardHold>
        </MainWrap>
    </MainContain>
  )
}

export default Card