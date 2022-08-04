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
                {/* <Route exact path='/product' element = {<Product/>}/>
                <Route exact path='/products/thelab' element = {<TheLab/>}/>
                <Route exact path='/cart' element = {<Cart/>}/> */}

            </ReactDomRoutes>

    )

}

export default Routes