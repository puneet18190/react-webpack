import React from 'react';

export class User extends React.Component{
	render(){
		return (
			<div>
				<h1>User Page</h1>
				<div>Name: {this.props.username}</div>
				<hr/>
			</div>
		)
	}
}
