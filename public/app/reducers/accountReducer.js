import constants from '../constants/constants'

var initialState = {
	currentUser: {
		userName:'',
        password:''
	}
}

export default function(state=initialState, action){
	switch(action.type) {
		case constants.CURRENT_USER_RECEIVED:
		console.log('CURRENT_USER_RECEIVED: '+JSON.stringify(action.user))
        

		default: 
		    return state
	}
}