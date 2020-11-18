const defaultState = {
    name: '',
    email: '',
    password: '',
    loggedIn: false
}

const loginReducer = (state = defaultState, action) => {
    switch(action.type) {
        case "LOG_IN": 
            return action.payload
        default: 
            return state
    }
}

export default loginReducer