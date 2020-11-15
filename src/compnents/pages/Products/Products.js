import React from 'react'
import Hero from '../../Hero'
import Pricing from '../../Pricing'
import {productObjOne} from './Data'

function Products() {
    return (
        <>
           <Hero {...productObjOne} />
           <Pricing />
        </>
    )
}

export default Products
