import constants from '../constants/constants'

var initialState = {
	profiles: {},
	profilesArray: []
}

export default function(state=initialState, action){
    switch(action.type){
    	case constants.PROFILES_RECEIVED:
    	    console.log('PROFILES RECEIVED: '+JSON.stringify(action.profiles))
    	    var newState = Object.assign({}, state)
    	    var array = []
    	    for (var i=0; i<action.profiles.length; i++){
    	    	var p = action.profiles[i]
    	    	array.push(p)
    	    }
    	    newState['profilesArray'] = array
    	    return newState

    	case constants.PROFILE_CREATED:
    	    // console.log('PROFILES CREATED: '+JSON.stringify(action.profiles))
    	    var newState = Object.assign({}, state)
    	    var array = Object.assign([], newState.profilesArray)    
    	    array.push(action.profile)
    	    newState['profilesArray'] = array
    	    return newState    	        

    	default:
    	    return state
    }
}