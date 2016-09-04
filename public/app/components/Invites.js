import React, { Component } from 'react'
import APIManager from '../utils/APIManager'

class Invites extends Component {

	constructor(props, context){
		super(props, context)
		this.updateInvite = this.updateInvite.bind(this)
		this.submit = this.submit.bind(this)
		this.state = {
			invite: {
                startTime: '',
                endTime: '',
                location: ''
			}
		}
	}

	updateInvite(event){
		console.log('updateInvite: '+event.target.id+' -- '+event.target.value)
		var updatedInvite = Object.assign({}, this.state.invite)
		updatedInvite[event.target.id] = event.target.value
		this.setState({
			invite: updatedInvite
		})
	}

	submit(){
		//console.log('submit: '+JSON.stringify(this.state.invite))
		APIManager.handlePost('/api/invite', this.state.invite, function(err, response){
			if (err) {
				alert(err)
				return
			}

			console.log('Invite Created: '+JSON.stringify(response.result))
		})
	}

	render() {

		return(
			<div>
			    <h3>This is Invites component!</h3>

			    <input onChange={this.updateInvite} id="startTime" name="startTime" placeholder="Start time" type="text"/><br />
			    <input onChange={this.updateInvite} id="endTime" name="endTime"  placeholder="End time" type="text"/><br />
			    <input onChange={this.updateInvite} id="location" name="location"  placeholder="Location" type="text"/><br />
			    <button onClick={this.submit}>Submit</button>

			</div>

		)
	}

}

export default Invites