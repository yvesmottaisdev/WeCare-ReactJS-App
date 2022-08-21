import grapefruit from '../images/grapefruit-product.png'
import quavagreen from '../images/quava-green-product.png'
import lightskin from '../images/light-face-product.png'
import olongtea from '../images/olog-tea-product.png'
import goodbyedryness from '../images/peach-beach-product.png'
import highlavender from '../images/high-lavender-product-LA.png'
import mintmosturizing from '../images/mint-mosturizing-product-LA.png'
import refreshnow from '../images/refresh-product-LA.png'

export const products = [

    {
        id: 1,
        name: 'Grapefruit L Serum',
        img: `${grapefruit}`,
        price: 12.99,
        bestsellers: true,
        category: 'dryskin'

    },

    {
        id: 2,
        name: 'Quava Green Serum',
        img: `${quavagreen}`,
        price: 12.99,
        category: 'dryskin'

    },

    {
        id: 3,
        name: 'Light Skin Serum',
        img: `${lightskin}`,
        price: 12.99,
        bestsellers: true,
        category: 'dryskin'

    },

    {
        id: 4,
        name: 'Olong Tea Serum',
        img: `${olongtea}`,
        price: 12.99,
        category: 'dryskin'

    },

    {
        id: 5,
        name: 'Goodbye Dryness Serum',
        img:  `${goodbyedryness}`,
        price: 12.99,
        bestsellers: true,
        category: 'nutrients'

    },

    {
        id: 6,
        name: 'The Freshness Serum',
        img:  `${goodbyedryness}`,
        price: 12.99,
        bestsellers: true,
        category: 'nutrients'

    },

    {
        id: 7,
        name: 'Watermelon Kiss Serum',
        img:  `${goodbyedryness}`,
        price: 12.99,
        category: 'nutrients'

    },

    {
        id: 8,
        name: 'Crystal Peach Serum',
        img:  `${goodbyedryness}`,
        price: 12.99,
        bestsellers: true,
        category: 'nutrients'

    },

    {
        id: 9,
        name: 'High Lavender Serum',
        img:  `${highlavender}`,
        price: 12.99,
        bestsellers: true,
        newcollection: true,
        category: 'neutral'

    },

    {
        id: 10,
        name: 'Mint Mosturizing Serum',
        img:  `${mintmosturizing}`,
        price: 12.99,
        newcollection: true,
        category: 'neutral'

    },

    {
        id: 11,
        name: 'Re-fresh Now Serum',
        img:  `${refreshnow}`,
        price: 12.99,
        newcollection: true,
        category: 'neutral'

    },

];

export const TotalProducts = products.length;

export const Products = products.reduce((acc, products) => {

    
    if(!acc[products.category]) {
        
        acc[products.category] = []
        
    }

    acc[products.category] = [...acc[products.category], products];



    return acc;

}, {})

export const BestSellers = () => {

    let items = []

    for (let i in products){

        if(products[i].bestsellers){

            items.push(products[i])

        }
        
    }

    return items

}