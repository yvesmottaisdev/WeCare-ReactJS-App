import React from 'react'
import { Routes as ReactDomRoutes, Route } from 'react-router-dom'
import Cart from '../pages/Cart/Cart'
import Home from '../pages/Home/Home'
import Products from '../pages/Products/Products'

const Routes = () => {

    return (

            <ReactDomRoutes>
                <Route exact path='/' element = {<Home/>}/>
                <Route exact path='/thelab' element= {<Products/>}/>
                <Route exact path='/cart' element= {<Cart/>}/>
            </ReactDomRoutes>

    )

}

export default Routes