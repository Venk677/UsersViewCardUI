import * as actiontypes from "../actions/actiontypes";
import {combineReducers} from "redux";


const initialState ={
    userDetails : []
}

const userReducer = (state = initialState,action) => {
    switch (action.type) {
        case actiontypes.USER_DETAILS:
            return { ...state, userDetails:action.payload.userDetails};
        

        case actiontypes.DELETE_ITEM:
            return { ...state, userDetails: action.payload.userDetails };
    
        
        default:
            return state;
    }
};

const reducer = combineReducers({
    user:userReducer
})

export default reducer;