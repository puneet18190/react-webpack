import React from "react";
import {connect} from "react-redux";
import { User } from './user'
import { Main } from './main'

class App extends React.Component{
	// constructor(){
	// 	super();
	// 	this.state = {
	// 		username: "puneet"
	// 	}
	// }

	onChange(a){
		// this.setState({username: a})
		this.props.setName(a)
	}

	render(){
		return(
			<div>
				<h1>In Index page</h1>
				<Main username={this.props.user.username} onChange={this.onChange.bind(this)}/>
				<User username={this.props.user.username}/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return{
		user: state.userReducer,
		math: state.mathReducer
	}
}

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch({
        type: "SET_NAME",
        payload: name
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
