import { SET_INSERT_PATH } from "./actionConstant";

export const setPath = (path: string) => {
	return {
		type: SET_INSERT_PATH,
		payload: path,
	};
};
