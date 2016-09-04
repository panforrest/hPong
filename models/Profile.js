var mongoose = require('mongoose')

var ProfileSchema = new mongoose.Schema({
	userName: {type:String, trim:true, lowercase:true},
	password: {type:String, trim:true}
})

ProfileSchema.methods.summary = function(){
	var summary = {
		userName: this.userName,
		password: this.password,
		id: this.id
    }

    return summary
}

module.exports = mongoose.model('ProfileSchema', ProfileSchema)