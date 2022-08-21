import { Products, TotalBestSellers, BestSellers} from '../../data/Products'



const INITIAL_STATE = {

    bestSellers: BestSellers()

}


const bestSellersReducer = (state = INITIAL_STATE, action) => {

    switch(action.type){

        default:
            return state;

    }

}

export default bestSellersReducer