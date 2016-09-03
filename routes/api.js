var express = require('express');
var router = express.Router();

var invites = [
    {id:0, startTime:"09/03/2016 10:00:00", endTime:"09/03/2016 11:00:00", location:"Bryant Park"},
    {id:1, startTime:"09/03/2016 10:30:00", endTime:"09/03/2016 11:30:00", location:"Wang Chen Table Tennis Club"}
]

/* GET api page. */
router.get('/:resource', function(req, res, next) {

    var resource = req.params.resource
    if (resource == 'invite') {
        res.json({
	    	confirmation: 'success',
	    	invites: invites
	    })
    }
});

router.get('/:resource/:id', function(req, res, next) {

    var resource = req.params.resource
    var id = req.params.id
    if (resource == 'invite') {
    	var invite = invites[id]

        res.json({
	    	confirmation: 'success',
	    	invite: invite
	    })
    }
});

module.exports = router;