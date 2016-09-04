import React, { Component } from 'react'
import Invites from './Invites'

class Main extends Component {

	componentDidMount(){
		console.log('Main: '+this.props.page)
	}

	render() {
		return(
			<div>
			    <Invites />
  
            </div>
		)
	}
}

export default Main