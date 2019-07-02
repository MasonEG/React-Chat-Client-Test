import React, { Component } from "react";
import Login from './Login';
import CreateAcct from './CreateAcct';
import Board from './message_board/Board';

class App extends Component {
	state = {
		currentPage: <Login />
	}

	swapState = num = {
		switch (num) {
			case 0:
				this.setState({currentPage: <Login />});
				break;
			

		}
	}

	render() {

	}
}

export default App;
