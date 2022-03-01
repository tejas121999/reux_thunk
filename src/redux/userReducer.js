import { ADD_USER, DELETE_USER, GET_USER, GET_USER_BY_ID, UPDATE_USER } from "./constType";

const initialState = {
    users: [],
    user: {},
    loading: true
}

const userReducer = (state = initialState, action) => {

    switch (action.type) {

        // get profile
        case GET_USER: {
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        }


        case DELETE_USER:
        case ADD_USER:
        case UPDATE_USER:
            {
                return {
                    ...state,
                    loading: false
                }
            }

        case GET_USER_BY_ID: {
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default userReducer;