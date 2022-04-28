import { combineReducers } from 'redux';
import { LOADING } from './actions';
const dataState = {
    loading: true
};

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case LOADING:
            state = Object.assign({}, state, { loading: action.loading });
            return state;
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    dataReducer,
});

export default rootReducer;