import React from 'react'
import { Routes as ReactDomRoutes, Route } from 'react-router-dom'
import Cart from '../pages/Cart/Cart'
import Home from '../pages/Home/Home'
import Products from '../pages/Products/Products'
// import TheLab from '../pages/TheLab/TheLab'
// import Cart from '../pages/Cart/Cart'

const Routes = () => {

    return (

            <ReactDomRoutes>
                <Route exact path='/' element = {<Home/>}/>
                <Route exact path='/product' element= {<Products/>}/>
                <Route exact path='/cart' element= {<Cart/>}/>
            </ReactDomRoutes>

    )

}

export default Routes