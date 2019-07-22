import React, { Component } from "react";
import Message from "./Message";
import SendBox from "./SendBox";
import ErrHandlr from "./../FetchErrHandlr";

/*
	Basically the setup for the message board page
*/
class Board extends Component 
{
	constructor(props)
	{
		super(props);
		this.state =
		{
			messages: [] //serves as an array of JSON with username, color, date, message attributes
		}
		this.update();
		setInterval(this.update, 3000); //set the board to update every 3 secconds
	}

	update = () => //this updates the list of messages
	{
		console.log('updating...');
		let url = 'https://wdmegil.wd.its.iastate.edu/zf2-react-api/view';
		fetch(url, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				'username': this.props.username,
				'password': this.props.password
			})
		})
		.then(response => response.json())
		.then(json =>
			{
				if(!json.success)
				{
					alert("either the code is broken or you broke the code");
				}
				this.setState({messages: json.messages});
			})
		.catch(ErrHandlr);
	}

	render() 
	{
		return (
			<>
			<SendBox update={this.update} username={this.props.username} password={this.props.password} />
			{this.state.messages.slice(0).reverse().map( message =>
				<Message 
				key={message.date.date}
				username={message.username}
				color={message.color}
				date={message.date.date}
				message={message.message} 
				/>
				)}
			</>
		);
	}
}

export default Board;
