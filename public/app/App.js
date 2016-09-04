import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Invites from './components/Invites'
import { Provider } from 'react-redux'
import store from './stores/store'

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

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'))