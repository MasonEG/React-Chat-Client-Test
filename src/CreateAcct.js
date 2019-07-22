import React, { Component } from "react";
import ErrHandlr from "./FetchErrHandlr";
/*
	The create account screen component, does all the stuff with the api,
	don't need much explanation
*/
class CreateAcct extends Component
{
	state = 
	{
		username: "",
		password: "",
		color: "",
		isIncorrect: false
	}

	handleCreateAcct = (event) => 
	{
		event.preventDefault(); //this is done to avoid page redirection
		let url = 'https://wdmegil.wd.its.iastate.edu/zf2-react-api/create';
		fetch(url, { //mess with this at your sanity's risk
			method: 'POST',
			mode: 'cors',
			body: JSON.stringify({
				"username": this.state.username,
				"password": this.state.password,
				"color": this.state.color
			})
		})
		.then(response => response.json())
		.then(json => //the fetch function returns a promise, promise.then tells JS what to do when the promise is resolved
			{
				if(json.success) 
				{
					this.props.swapState(0);
				}
				else
				{
					this.setState({username: '', password: '', isInocrrect: true});
					alert("username is taken");
				}
			}
		)
		.catch(ErrHandlr);
		
	}

	updatePassword = (event) =>
	{
		this.setState({password: event.target.value});
	}

	updateUsername = (event) =>
	{
		this.setState({username: event.target.value});
	}

	updateColor = (event) =>
	{
		this.setState({color: event.target.value});
	}

	render() 
	{
		let tag = '';
		if(this.state.isIncorrect)
		{
			tag = <p color="red">Username is taken!</p>
		}

		return (
			<>
				<h2>Create an Account</h2>
				{tag}
				<form onSubmit={this.handleCreateAcct}>
					<label>
						Username: <input type="text" value={this.state.username} onChange={this.updateUsername} /><br />
						Password: <input type="password" value={this.state.password} onChange={this.updatePassword} /><br />
						Color (use HTML color picker): <input type="text" value={this.state.color} onChange={this.updateColor} /><br /> 
					</label>
					<input type="submit" value="Submit" />
				</form>
			</>
		);
	}
}

export default CreateAcct;
