import {ADD_PRODUCT, 
    DELETE_PRODUCT, 
    GET_STORE_NAME} from './types'

const initialState = {
   list: [],
   storeName: ""
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            
            break;
    
        default:
            break;
    }
};

export default rootReducer;
