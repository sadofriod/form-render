declare namespace EditorStore {
	type ActionTypes = "SET_INSERT_PATH";

	type ActionPayloads = string | IDictionary;

	interface ReducerHandle {
		(state: Store, action: Action): Store;
	}

	interface Action {
		type: ActionTypes;
		payload: any;
	}

	interface Store {
		form: any;
		system: {
			path: string;
			dictionary: IDictionary[];
		};
	}
}
