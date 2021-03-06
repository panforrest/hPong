var mongoose = require('mongoose')
var Profile = require('../models/Profile')
var bcrypt = require('bcrypt')




function convertToJson(profiles){
	var results = new Array()
	for (var i=0; i<profiles.length; i++){
		var p = profiles[i]
		results.push(p.summary())
	}

	return results
}

module.exports = {

	pluralKey: function(profiles){
	    return 'proifles'
    },

    get: function(params, completion){


    	if (params.id != null) {
            Profile.findById(params.id, function(err, profile){
                if (err){
                    completion({message: 'Profile '+profile.id+' not found'}, null)
                	return
                }

                if (profile == null) {
                	completion({message: 'Profile '+profile.id+' not found'}, null)
                	return
                }

                completion(null, profile.summary())
            })
            return
    	}


    	
    	var limit = params.limit
    	if (limit == null)
    		limit = 0

    	delete params['limit']

    	Profile.find(params, function(err, profiles){
    		if (err){
                completion({confirmation:'fail', message:err.message}, null)
    			return
    		}

    		completion(null, convertToJson(profiles))            
    	})
    },

    post: function(profileInfo, completion){
        var password = profileInfo['password']
        profileInfo['password'] = bcrypt.hashSync(password, 10)

    	Profile.create(profileInfo, function(err, profile){
    		if (err) {
    			completion({confirmation: 'fail', message: err.message}, null)
                return
    		}

    		completion(null, profile.summary())
    		return
    	})
    },



    put: function(profileId, profileInfo, completion){
    	Profile.findByIdAndUpdate(id, profileInfo, function(err, profile){
    		if (err) {
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