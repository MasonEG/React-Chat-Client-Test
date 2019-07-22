import React, { Component } from "react";
import ErrHandlr from "./../FetchErrHandlr";

/*
	props: update
	This component is essentially a text box and a submit button
	that sends the create message command to the api on submit and
	clears the text in the text box
*/
class SendBox extends Component {
	
	state = 
	{
		message: ''
	}

	updateMessage = (event) =>
	{
		this.setState({message: event.target.value});
	}

	handleSend = (event) => 
	{
		event.preventDefault();
		let url = 'https://wdmegil.wd.its.iastate.edu/zf2-react-api/send';
		fetch(url, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				'username': this.props.username,
				'password': this.props.password,
				'message': this.state.message
			})
		})
		.then(response => response.json())
		.then(json => 
			{
				if(json.success)
				{
					this.props.update();
				}
				else
				{
					alert("mason you wrote broken code");
				}
			}) 

	}

	render() {
		return (
			<form onSubmit={this.handleSend}>
				<input type="text" value={this.state.message} onChange={this.updateMessage} />
				<input type="submit" value="Send a message" />
			</form>
		);
	}
}

export default SendBox;
