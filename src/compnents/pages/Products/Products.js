import React from 'react'
import Hero from '../../Hero'
import Pricing from '../../Pricing'
import {homeObjThree} from './Data'

function Products() {
    return (
        <>
           <Pricing />
           <Hero {...homeObjThree} />
        </>
    )
}

export default Products
