//the whole app goes right 'ere

import React, { Component } from "react";
import Login from './Login';
import CreateAcct from './CreateAcct';
import Board from './message_board/Board';

class App extends Component 
{
	constructor(props) {
		super(props);
		this.state = 
		{
			currentPage: <Login updateCredentials={this.updateCredentials} swapState={this.swapState} />,
			username: '',
			password: ''
		}
	}

	updateCredentials = (username, password) =>
	{
		this.setState({username: username, password: password});
	}

	swapState = (num) =>
	{
		switch (num) 
		{
			case 0:
				this.setState({currentPage: <Login updateCredentials={this.updateCredentials} swapState={this.swapState} /> });
				break;
			case 1:
				this.setState({currentPage: <CreateAcct updateCredentials={this.updateCredentials} swapState={this.swapState} />});
				break;
			case 2:
				this.setState({currentPage: <Board username={this.state.username} password={this.state.password} />});
				break;
			default:
				this.setState({currentPage: <p>🚨 ERR: incorrect value passed into swapState in App 🚨</p>});
		}
	}

	render() {
		return(
			<>
				{this.state.currentPage}
			</>
		)
	}
}

export default App;
