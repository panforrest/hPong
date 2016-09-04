import constants from '../constants/constants'

var initialState = {
	invites: {},
	invitesArray: []
}

export default function(state=initialState, action){
	switch(action.type){
		case constants.INVITES_RECEIVED:
		    console.log('INVITES RECEIVED: '+JSON.stringify(action.invites))
		    var newState = Object.assign({}, state)
		    var result = []
		    for (var i=0; i<action.invites.length; i++){
		    	var invite = action.invites[i]
		    	result.push(invite)
		    }
		    newState['invitesArray'] = result
		    return newState

		case constants.INVITE_CREATED:
		    var newState = Object.assign({}, state)
		    var result = Object.assign([], newState.invitesArray)
		    result.push(action.invite)
            newState['invitesArray'] = result
		    return newState    

		default:
		    return state
	}

}