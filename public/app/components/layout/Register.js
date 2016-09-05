import React, { Component } from 'react'
import APIManager from '../../utils/APIManager'

class Register extends Component {

    constructor(props, context){
    	super(props, context)
    	this.updateProfile = this.updateProfile.bind(this)
    	this.submit = this.submit.bind(this)
        this.login = this.login.bind(this)
    	this.state = {
    		user: {
    			userName:'',
    			password:''
    		}
 
    	}   	
    }


    updateProfile(event){
    	console.log('updateProfile: '+event.target.id+' == '+event.target.value)
    	var updatedProfile = Object.assign({}, this.state.user)
    	updatedProfile[event.target.id] = event.target.value
    	this.setState({
    		user: updatedProfile
    	})
    }

    submit(event){
        event.preventDefault()
        console.log('submit: '+JSON.stringify(this.state.user))
        APIManager.handlePost('/api/profile', this.state.user, function(err, response){
            if (err) {
                alert(err.message)
                return
            }

            console.log('Profile Registered: '+JSON.stringify(response))
            window.location.href = '/account'
        })
    }

    login(event){
        event.preventDefault()
        // console.log('LOGIN: '+JSON.stringify(this.state.user))

        APIManager.handlePost('/account/login', this.state.user, function(err, response){
            if (err) {
                alert(err.message)
                return
            }

            console.log('LOGIN: '+JSON.stringify(response))
            window.location.href ='/account'
        })
    }

	render() {
		return(
			<div>
			    <h3>Register page</h3>
                <input onChange={this.updateProfile} type="text" id="userName" placeholder="User Name" /><br />
                <input onChange={this.updateProfile} type="text" id="password" placeholder="Password" /><br />
                <button onClick={this.submit}>Submit</button><br />


                <input onChange={this.updateProfile} type="text" id="userName" placeholder="User Name" /><br />
                <input onChange={this.updateProfile} type="text" id="password" placeholder="Password" /><br />
                <button onClick={this.login}>Login</button>
             
			</div>
		)
	}
}

export default Register