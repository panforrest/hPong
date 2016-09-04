import React, { Component } from 'react'
import store from './stores/store'
import Main from './compoennts/Main'
import { Provider } from 'react-redux' 

class App extends Component {

	render(){
		return(
			<Provider store={store}>
			    <Mian />

            </Provider>
		)
	}

}

export default App