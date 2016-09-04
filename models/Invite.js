var mongoose = require('mongoose');

var InviteSchema = new mongoose.Schema({
	startTime:{type:String, default:'', trim:true},
	endTime:{type:String, default:'', trim:true},
	location:{type:String, default:'', trim:true},
	timestamp:{type:Date, default:Date.now}
})

InviteSchema.methods.summary = function(){
	var summary = {
		startTime:this.startTime,
		endTime:this.endTime,
		location:this.location,
		timestamp:this.timestamp,
		id:this.id		
	}

	return summary
}

module.exports = mongoose.model('InviteSchema', InviteSchema)

