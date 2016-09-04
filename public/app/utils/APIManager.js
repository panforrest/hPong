import superagent from 'superagent'

export default {

	handleGet: function(endpoint, params, completion){
		superagent
		.get(endpoint)
		.query(params)
		.set('Accept', 'application/jason')
	    .end(function(err, res){
	    	if (err) {
	    		if (completion != null)
	    			completion(err, null)
	    		return
	    	}

	    	if (completion != null){
	    		if (res.body.confirmation == 'success'){
	    			completion(null, res.body)
	    		}
	    		else{
	    			completion({message: res.body.message}, null)
	    		}

	    	}
	    })

	},

    handlePost: function(endpoint, body, completion){
    	superagent
    	.post(endpoint)
    	.send(body)
    	.set('Accept', 'application/json')
    	.end(function(err, res){
    		if (err) {
    			if (completion != null)
    				completion = (err, null)
    		}
    		else{
    			if (completion != null)
                    completion(null, res.body)
    	    }   		    		
    	})
    },

    handlePut: function(endpoint, body, completion){
    	superagent
    	.put(endpoint)
    	.send(body)
    	.set('Accept', 'applicaiton/json')
    	.end(function(err, res){
    		if (err){
    			if (completion != null)
    				completion(err, null)
    		}
    		else {
    			if (completion != null)
    				completion(null, res.body)

    		}
    	})
    }
}