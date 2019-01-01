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

export default userReducer;