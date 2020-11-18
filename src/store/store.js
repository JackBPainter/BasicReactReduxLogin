import { composeWithDevTools } from 'redux-devtools-extension'
import loginReducer from './reducers/loginReducer'

const store = createStore(
    composeWithDevTools(loginReducer)
)

export default store