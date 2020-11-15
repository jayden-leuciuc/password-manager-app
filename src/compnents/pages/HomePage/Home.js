import React from 'react'
import Hero from '../../Hero'
import Pricing from '../../Pricing'
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data'

function Home() {
    return (
        <>
           <Hero {...homeObjTwo} />
           <Hero {...homeObjThree} />
           <Hero {...homeObjFour} />

        </>
    )
}

export default Home
