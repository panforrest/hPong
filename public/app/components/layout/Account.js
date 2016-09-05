import React, { Component } from 'react'
import APIManager from '../../utils/APIManager'

class Account extends Component {
	constructor(props, context){
		super(props, context)
		this.state = {
			currentUser: {
				userName:'',
				password:''
			}
		}


	}

	componentDidMount(){
		var _this = this
		APIManager.handleGet('/account/currentuser', null, function(err, response){
			if (err) {
				alert(err.message)
				return
			}

			console.log(JSON.stringify(response))
			var user = response.user
			_this.setState({
				currentUser: user

			})
			return
		})

	}

	render () {
		return(
			<div>
			    <h3>This is Account component!</h3>
			    {this.state.currentUser.userName}


			</div>
		)
	}
} 

export default Account