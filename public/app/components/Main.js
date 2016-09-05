import React, { Component } from 'react'
import Register from './layout/Register'
import Invites from './Invites'
import Account from './layout/Account'

class Main extends Component {

	componentDidMount(){
		console.log('Main: '+this.props.page)
	}

	render() {
        var content = null
        var page = this.props.page
        if (page == 'home')
        	content = <Invites />

        if (page == 'register')
        	content = <Register />

        if (page == 'account')
        	content = <Account />

		return(
			<div>
			    {content}
  
            </div>
		)
	}
}

export default Main