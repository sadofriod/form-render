const setIntsertPath: EditorStore.ReducerHandle = (state, action) => {
	state.system.path = action.payload;
	return state;
};

export default setIntsertPath;
