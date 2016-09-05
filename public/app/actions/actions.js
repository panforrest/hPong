import constants from '../constants/constants'

export default {
    invitesReceived: function(invites){
		return {
			type: constants.INVITES_RECEIVED,
			invites: invites 
		}	
	},

	inviteCreated: function(invite){
		return{
			type: constants.INVITE_CREATED,
	        invite: invite
        } 
	},

	profilesReceived: function(profiles){
		return {
			type: constants.PROFILES_RECEIVED,
			profiles: profiles
		}
	},

	profileCreated: function(profile){
		return{
			type: constants.PROFILE_CREATED,
			profile: profile
		}
	}
}

