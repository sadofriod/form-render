declare namespace EditorStore {
	type ActionTypes = "SET_INSERT_PATH";

	type ActionPayloads = string & {};

	interface ReducerHandle {
		(state: Store, action: Action): Store;
	}

	interface Action {
		type: ActionTypes;
		payload: ActionPayloads;
	}

	interface Store {
		form: any;
		system: {
			path: string;
		};
	}
}
