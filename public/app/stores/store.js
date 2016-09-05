import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import inviteReducer from '../reducers/inviteReducer'
import profileReducer from '../reducers/profileReducer'
import accountReducer from '../reducers/accountReducer'

var reducers = combineReducers({
	inviteReducer: inviteReducer,
	profileReducer: profileReducer,
	accountReducer: accountReducer
})

var store = createStore(
	reducers,
	applyMiddleware(thunk)
)

export default store
