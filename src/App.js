import React from 'react'
import {CardHolder} from './Component/Card/CardHolder'
import {Header} from './Component/Header/Header'
import {Hero} from './Component/Hero/Hero'
import {Ngo} from './Component/Section2/Ngo'
import {CardHolder2} from './Component/Card/CardHolder2'
import {Support} from './Component/Section5/Support'
import { About } from './Component/Section1/About'
import GlobalStyle from './GlobalStyle'

export const App = () => {
  return (
    <div>
       {/* <GlobalStyle/> */}
       {/* <Header/> */}
       <Hero/>
        <About/>
        <Ngo/>
       <Support/>
       <CardHolder2/>
       <CardHolder/>
       
    
      {/* <Footer/> */}

      </div>
  )
}

export default App