import produce from "immer";
import { SET_INSERT_PATH } from "../actions/actionConstant";
import setIntsertPath from "./handle/setInserPath";
import dictionary from "../../dictionary";

const reducer = produce(
	(
		state: EditorStore.Store = {
			form: {},
			system: {
				path: ".root",
				dictionary: dictionary,
			},
		},
		action: EditorStore.Action
	) => {
		switch (action.type) {
			case SET_INSERT_PATH:
				return setIntsertPath(state, action);
			default:
				return state;
		}
	}
);

export default reducer;
