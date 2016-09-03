import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Invites from './components/Invites'

class App extends Component {
	render () {
		return(
			<div>
			    Hello React!
			    <Invites />
            </div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))