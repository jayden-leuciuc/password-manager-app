import React from 'react'
import Hero from '../../Hero'
import Pricing from '../../Pricing'
import {homeObjOne, homeObjTwo, homeObjThree} from './Data'

function Home() {
    return (
        <>
           <Hero {...homeObjOne} />
           <Hero {...homeObjTwo} />
           <Hero {...homeObjThree} />

        </>
    )
}

export default Home
