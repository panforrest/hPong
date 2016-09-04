import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main'
import { Provider } from 'react-redux'
import store from './stores/store'

class App extends Component {
    constructor(props, context){
    	super(props, context)
    	this.state = {
            page: 'home'
    	}
    }

    componentWillMount(){       //I am not sure what is doing in here
    	var path = window.location.pathname.replace('/', '');
    	console.log('componentWillMount: '+path)

    	var page = 'home'
    	if (path.length>0){
    		var parts = path.split('/')
    		page = parts[0]
       	}

       	this.setState({
       		page: page
       	})
    }

	render () {
		return(
		    <Main page = {this.state.page}/>

		)
	}
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'))