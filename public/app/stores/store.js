import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import inviteReducer from '../reducers/inviteReducer'
import profileReducer from '../reducers/profileReducer'

var reducers = combineReducers({
	inviteReducer: inviteReducer,
	profileReducer: profileReducer
})

var store = createStore(
	reducers,
	applyMiddleware(thunk)
)

export default store
