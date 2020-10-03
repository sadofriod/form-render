import setDictionaryByModel from "../../../util/setDictionaryByModel";

const setDictionary: EditorStore.ReducerHandle = (state, action) => {
	setDictionaryByModel(state.system.dictionary, state.system.path, action.payload);
	return state;
};

export default setDictionary;
