import { SET_INSERT_PATH, SET_DICTIONARY } from "./actionConstant";

export const setPath = (path: string) => {
	return {
		type: SET_INSERT_PATH,
		payload: path,
	};
};

export const setDictionary = (dictionary: IDictionary) => {
	return {
		type: SET_DICTIONARY,
		payload: dictionary,
	};
};
