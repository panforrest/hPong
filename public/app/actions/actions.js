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
	}
}

