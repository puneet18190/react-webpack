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

export default mathReducer;