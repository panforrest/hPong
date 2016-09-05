import React, { Component } from 'react'
import APIManager from '../../utils/APIManager'
import store from '../../stores/store'
import actions from '../../actions/actions'
import { connect } from 'react-redux'

class Register extends Component {

    constructor(props, context){
    	super(props, context)
    	this.updateProfile = this.updateProfile.bind(this)
    	this.submit = this.submit.bind(this)
    	this.state = {
    		profile: {
    			userName:'',
    			password:''
    		}, 
    		// profiles: {

    		// }
    	}   	
    }

    updateProfile(event){
    	console.log('updateProfile: '+event.target.id+' == '+event.target.value)
    	var updatedProfile = Object.assign({}, this.state.profile)
    	updatedProfile[event.target.id] = event.target.value
    	this.setState({
    		profile: updatedProfile
    	})
    }

    componentDidMount(){
    	// console.log('componentDidMount: ')
    	APIManager.handleGet('/api/profile', null, function(err, response){
    		if (err) {
    			alert(err.message)
    			return
    		}
            
            console.log('componentDidMount: '+JSON.stringify(response.results))
            store.dispatch(actions.profilesReceived(response.results))
            
    	})
    }

    submit(event){
    	// console.log('submit: '+JSON.stringify(this.state.profile))
    	APIManager.handlePost('/api/profile', this.state.profile, function(err, response){
    		if (err) {
    			alert(err.message)
    			return
    		}

    		console.log('Profile Registered: '+JSON.stringify(response.result))
            store.dispatch(actions.profileCreated(response.result))
    	})
    }

	render() {
        var profileList = this.props.profiles.map(function(profile, i){
        	return <li key={profile.id}>{profile.userName} {profile.password}</li>
        })

		return(
			<div>

			    <h3>Register page</h3>
                <input onChange={this.updateProfile} type="text" id="userName" placeholder="User Name" /><br />
                <input onChange={this.updateProfile} type="text" id="password" placeholder="Password" /><br />
                <button onClick={this.submit}>Submit</button><br />
                {profileList}

			</div>

		)
	}
}

const stateToProps = function(state){
	console.log('STATE TO PROPS: '+JSON.stringify(state))
	return{
		profiles: state.profileReducer.profilesArray
	}
}

export default connect(stateToProps)(Register)