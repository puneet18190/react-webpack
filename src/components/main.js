import React from 'react';

export class Main extends React.Component{
	render(){
		return (
			<div>
				<hr/>
				<h1>Main Page</h1>
				<button onClick={() => this.props.onChange('sumeet')}>Click</button>
				<div>Name: {this.props.username}</div>
				<hr/>
			</div>
		);
	}
}
