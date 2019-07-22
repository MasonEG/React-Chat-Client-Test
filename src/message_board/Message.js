import React, { Component } from "react";

/*
    props: username, date, message
    creates a neat box to throw a user's message in
*/
class Message extends Component
{
    render() {
        return (
            <div
            width="60%"
            padding="20px"
            margin="20px"
            style={{border: '10px solid ' + this.props.color}}
            >
                {this.props.username + ' at ' + this.props.date}
                <p>{this.props.message}</p>
            </div>
        );
    }
}

export default Message;