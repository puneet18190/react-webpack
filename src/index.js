import React from "react";
import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import ReactDOM from "react-dom";
import App from './components/app'
import {Provider} from "react-redux";
// import { User } from './components/user'
// import { Main } from './components/main'

// class App extends React.Component{
// 	constructor(){
// 		super();
// 		this.state = {
// 			username: "puneet"
// 		}
// 	}

// 	onChange(a){
// 		this.setState({username: a})
// 	}

// 	render(){
// 		return(
// 			<div>
// 				<h1>In Index page</h1>
// 				<Main username={this.state.username} onChange={this.onChange.bind(this)}/>
// 				<User username={this.state.username}/>
// 			</div>
// 		);
// 	}
// }

// ReactDOM.render(<App />, document.getElementById("index"));

const initalState1 = {
	result: 1,
	lastValues: []
}

const mathReducer = (state = initalState1, action) => {
	switch(action.type){
		case "ADD":
			state = {
				// ...state,
				result: state.result + action.payload,
				lastValues: [...state.lastValues, action.payload]
			};
			break;
		case "SUB":
			state = {
				// ...state,
				result: state.result - action.payload,
				lastValues: [...state.lastValues, action.payload]
			};
			break;
	}
	return state;
}

const initalState2 = {
	username: "max",
	age: 25
}

const userReducer = (state = initalState2, action) => {
	switch(action.type){
		case "SET_NAME":
			state = {
				// ...state,
				username: action.payload,
				age: state.age
			};
			break;
		case "SET_AGE":
			state = {
				// ...state,
				username: state.username,
				age: action.payload,
			};
			break;
	}
	return state;
}

const myLogger = (state) => (next) => (action) => {
   // console.log("Logged Action: ", action);
   next(action);
};

const store = createStore(combineReducers({mathReducer, userReducer}), {}, applyMiddleware(myLogger, logger))

store.subscribe(() => {
	// console.log("Store updated!", store.getState());
})

// store.dispatch({
// 	type: "ADD",
// 	payload: 100
// })

// store.dispatch({
// 	type: "ADD",
// 	payload: 50
// })

// store.dispatch({
// 	type: "SUB",
// 	payload: 10
// })

// store.dispatch({
// 	type: "ADD",
// 	payload: 60
// })

// store.dispatch({
// 	type: "SET_NAME",
// 	payload: 'anu'
// })

// store.dispatch({
// 	type: "SET_AGE",
// 	payload: 30
// })

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById("index"));
