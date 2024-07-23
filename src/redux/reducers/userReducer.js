import * as actions from "../actions/actionTypes"

const initialState = { 
    user: null, 
}

const userReducer = (state = initialState , action) => { 
    switch(action.type) { 
        case actions.SET_USER: 
            return { 
                ...state , 
                user:action.user,
            }
        default: 
            return state ;
    }
}

export default userReducer ;