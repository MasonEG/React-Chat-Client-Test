import React, { Component } from "react";
import Axios from "axios";

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

	handleLogin = (event) => 
	{
		event.preventDefault(); //this is done to avoid page redirection
		var url = 'https://wdmegil.wd.its.iastate.edu/PHPsampleAPI/api.php?action=1&username=' + this.state.username + '&password=' + this.state.password;
		Axios.get(url)
			.then(function(response)
			{
				let json = response.json();
				console.log('After getting the login command: ' + json);
				if(json.success)
				{
					this.props.updateCredentials(this.state.username, this.props.password);
					this.props.swapState(3);
				}
				else
				{
					this.setState({username: '', password: '', isIncorrect: true});
				}
			})
	}

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
			</>
		);
	}
}

export default Login;
