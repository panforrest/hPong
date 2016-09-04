var mongoose = require('mongoose')
var Invite = require('../models/Invite')




function convertToJson(invites){
	var results = new Array()
	for (var i=0; i<invites.length; i++){
		var p = invites[i]
		results.push(p.summary())
	}

	return results
    }

module.exports = {

    pluralKey: function(){
        return 'profile'
    },

    get: function(params, completion){


        if (params.id != null) {
            Invite.findById(params.id, function(err, invite){
                if (err) {
                    completion({message: 'Invite '+params.id+' not found'}, null)
                	return
                }

                if (invite == null){
                    completion({message: 'Invite '+params.id+' not found'}, null)
                	return
                } 

                completion(null, invite(summary))
            })
            return
        }


        /* Query by filters passed intoparamemeter string*/
        var limit = params.limit
        if (limit == null)
        	limit = 0

        delete params['limit']

        Invite.find(params, function(err, invites){
            if (err){
            	completion({confirmation:'fail', message:err.message}, null)
            	return
            }

            completion(null, convertToJson(invites))
        })        
    },

    post: function(inviteInfo, completion){
        Invite.create(inviteInfo, function(err, invite){
            if (err) {
            	completion({confirmation:'fail', message:err.message}, null)
            	return
            }

            completion(null, invite.summary())
            return
        })
    },



    put: function(inviteId, inviteInfo, completion){
        Invite.findByIdAndUpdate(id, inviteInfo, function(err, profile){
        	if (err){
        		completion({confirmation:'fail', message:err.message}, null)
        		return
        	}

        	completion(null, profile.summary())
        	return
        })
    },

    delete: function(){

    }

}