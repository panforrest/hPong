import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import inviteReducer from '../reducers/inviteReducer'

var reducers = combineReducers({
	inviteReducer: inviteReducer
})

var store = createStore(
	reducers,
	applyMiddleware(thunk)
)

export default store
