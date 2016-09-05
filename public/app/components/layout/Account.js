import React, { Component } from 'react'
import APIManager from '../../utils/APIManager'
import store from '../../stores/store'
import actions from '../../actions/actions'
import { connect } from 'react-redux'
import accountReducer from '../../reducers/accountReducer'

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
		// var _this = this
		APIManager.handleGet('/account/currentuser', null, function(err, response){
			if (err) {
				alert(err.message)
				return
			}

			console.log(JSON.stringify(response))
			// var user = response.user
			// _this.setState({
			// 	currentUser: user

			// })
            store.dispatch(actions.currentUserReceived(response.user))
			return
		})

	}

	render () {

		return(
			<div>
			    This is Account component!
			    <h1>Hi, {this.props.currentUser.userName}</h1>


			</div>
		)
	}
} 

const stateToProps = function(state){
	console.log('STATE TO PROPS: '+JSON.stringify(state))
	return {
		currentUser: state.accountReducer.currentUser
	}
}

export default connect(stateToProps)(Account)