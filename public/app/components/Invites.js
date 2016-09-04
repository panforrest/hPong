import React, { Component } from 'react'
import APIManager from '../utils/APIManager'
import actions from '../actions/actions'
import store from '../stores/store'
import { connect } from 'react-redux'

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

	componentDidMount(){
		// console.log('componentDidMount: ')
		APIManager.handleGet('/api/invite', null, function(err, response){
			if (err){
				alert(err)
				return
			}
            store.dispatch(actions.invitesReceived(response.results))
            // console.log('componentDidMount: '+JSON.stringify(response.results))

		})
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

		var invitesList = this.props.invites.map(function(invite, i){
			return <li key={invite.id}>{invite.location}</li>
		})

		return(
			<div>
			    <h3>This is Invites component!</h3>

			    <input onChange={this.updateInvite} id="startTime" name="startTime" placeholder="Start time" type="text"/><br />
			    <input onChange={this.updateInvite} id="endTime" name="endTime"  placeholder="End time" type="text"/><br />
			    <input onChange={this.updateInvite} id="location" name="location"  placeholder="Location" type="text"/><br />
			    <button onClick={this.submit}>Submit</button>

			    {invitesList}

			</div>

		)
	}

}

const stateToProps = function(state){

	return {
		invites: state.inviteReducer.invitesArray
	}
}

export default connect(stateToProps)(Invites)