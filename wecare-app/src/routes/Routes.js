import React from 'react'
import { Routes as ReactDomRoutes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Products from '../pages/Products/Products'
// import TheLab from '../pages/TheLab/TheLab'
// import Cart from '../pages/Cart/Cart'

const Routes = () => {

    return (

            <ReactDomRoutes>
                <Route exact path='/' element = {<Home/>}/>
                <Route exact path='/product' element= {<Products/>}/>

            </ReactDomRoutes>

    )

}

export default Routes