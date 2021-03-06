import { combineReducers } from 'redux';
import { CLOTHING_LIST, FILTER_VALUE, FILTERED_CLOTHING_LIST, BASKET, BASKET_IDS } from './actions';
const dataState = {
    clothingList: [],
    filteredClothingList: [],
    filterValue: "",
    basket: [],
    basketIDs: []
};

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case CLOTHING_LIST:
            state = Object.assign({}, state, { clothingList: action.clothingList });
            return state;
        case FILTERED_CLOTHING_LIST:
            state = Object.assign({}, state, { filteredClothingList: action.filteredClothingList });
            return state;
        case FILTER_VALUE:
            state = Object.assign({}, state, { filterValue: action.filterValue });
            return state;
        case BASKET:
            state = Object.assign({}, state, { basket: action.basket });
            return state;
        case BASKET_IDS:
            state = Object.assign({}, state, { basketIDs: action.basketIDs });
            return state;
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    dataReducer,
});

export default rootReducer;