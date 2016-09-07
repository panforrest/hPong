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

			// console.log('Invite Created: '+JSON.stringify(response.result))
			store.dispatch(actions.inviteCreated(response.result))
		})
	}

	render() {

		var invitesList = this.props.invites.map(function(invite, i){
			return <li key={invite.id}>{invite.location}</li>
		})

		return(
			<div className="container clearfix">


			        






                <div className="col_three_fifth bothsidebar nobottommargin">
                    <div className="fancy-title title-border">
                        <h3>Invites</h3>
                    </div>    

                    <div id="posts" className="events small-thumb">
                        {invitesList}
                    </div>
                </div> 
                
                <h3>Sign up</h3>   

                    <div className="col_one_third nobottommargin">

                        <div className="well well-lg nobottommargin">
                            <form id="login-form" name="login-form" className="nobottommargin" action="#" method="post">

                                <h3>Login to your Account</h3>

                                <div className="col_full">
                                    <label for="login-form-username">Username:</label>
                                    <input type="text" id="login-form-username" name="login-form-username" value="" className="required form-control input-block-level" />
                                </div>

                                <div className="col_full">
                                    <label for="login-form-password">Password:</label>
                                    <input type="password" id="login-form-password" name="login-form-password" value="" className="required form-control input-block-level" />
                                </div>

                                <div className="col_full nobottommargin">
                                    <button className="button button-3d nomargin" id="login-form-submit" name="login-form-submit" value="login">Login</button>
                                    <a href="#" className="fright">Forgot Password?</a>
                                </div>

                            </form>
                        </div>

                    </div>
            
			    <input onChange={this.updateInvite} id="startTime" name="startTime" placeholder="Start time" type="text"/><br />
			    <input onChange={this.updateInvite} id="endTime" name="endTime"  placeholder="End time" type="text"/><br />
			    <input onChange={this.updateInvite} id="location" name="location"  placeholder="Location" type="text"/><br />
			    <button onClick={this.submit}>Submit</button>



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