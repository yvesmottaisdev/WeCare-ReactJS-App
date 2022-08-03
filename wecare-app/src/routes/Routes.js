import React from 'react'
import { Routes as ReactDomRoutes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
// import Product from '../pages/Product/Product'
// import TheLab from '../pages/TheLab/TheLab'
// import Cart from '../pages/Cart/Cart'

const Routes = () => {

    return (

            <ReactDomRoutes>
                <Route exact path='/' element = {<Home/>}/>
                {/* <Route exact pacth='/product' element = {<Product/>}/>
                <Route exact pacth='/products/thelab' element = {<TheLab/>}/>
                <Route exact pacth='/cart' element = {<Cart/>}/> */}

            </ReactDomRoutes>

    )

}

export default Routes