import React, { Component } from "react";
import ErrHandlr from "./FetchErrHandlr";

/*
	login screen pretty self explanatory
*/
class Login extends Component 
{
	state = 
	{
		username: '',
		password: '',
		isIncorrect: false
	}

	//sends a request to the login endpoint of the API, and then handles the result
	handleLogin = (e) => 
	{
		e.preventDefault();
		let url = 'https://wdmegil.wd.its.iastate.edu/zf2-react-api/login';
		fetch(url, { //mess with this at your sanity's risk
			method: 'POST',
			mode: 'cors',
			body: JSON.stringify({
				"username": this.state.username,
				"password": this.state.password
			})
		})
		.then(response => response.json())
		.then(json => 
			{
				if(json.success) 
				{
					this.props.updateCredentials(this.state.username, this.state.password);
					this.props.swapState(2);
				}
				else
				{
					alert("you entered incorrect credentials");
					this.setState({username: '', password: '', isInocrrect: true});
				}
			})
		.catch(ErrHandlr);
	}

	// handleLogin = async (event) =>
	// {
	// 	event.preventDefault();
	// 	let json = await this.handleLoginRequest(); 
	// 	console.log(json);
	// 	if(json.success) 
	// 	{
	// 		console.log(json);
	// 		console.lot(this.props);
	// 		this.props.updateCredentials(this.state.username, this.state.password);
	// 		this.props.swapState(2);
	// 	}
	// 	else
	// 	{
	// 		alert("you entered incorrect credentials");
	// 		this.setState({username: '', password: '', isInocrrect: true});
	// 	}
	// }

	updatePassword = (event) =>
	{
		this.setState({password: event.target.value});
	}

	updateUsername = (event) =>
	{
		this.setState({username: event.target.value});
	}

	render()
	{
		let tag = '';
		if(this.state.isIncorrect)
		{
			tag = <p color="red">Incorrect Username/Password!</p>
		}
		return (
			<>
				<h2>Log In</h2>
				{tag}
				<form onSubmit={this.handleLogin}>
					<label>
						Username: <input type="text" value={this.state.username} onChange={this.updateUsername} /><br />
						Password: <input type="password" value={this.state.password} onChange={this.updatePassword} /><br />
					</label>
					<input type="submit" value="Submit" />
				</form>
				<button onClick={() => this.props.swapState(1)}>Create an account</button>
			</>
		);
	}
}

export default Login;