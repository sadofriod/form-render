/** @format */

import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import dictionary from "./dictionary";
import Core from "./core";

// const generator = new Core(dictionary, getNode, getSubGraph);

const initValue = {
	root: {
		name: "user name",
		sex: "user sex",
		password: "password1111232123222233333333",
		voke: [
			{
				rootName: "n",
				pip: "start",
			},
			{
				rootName: "yssdsasdadsd",
				pip: "end",
			},
			{
				rootName: "y",
			},
			{
				rootName: "n",
			},
		],
	},
};

function App() {
	const [state, setState] = useState<any>();
	return (
		<div className="App">
			<div style={{ flex: 1 }}>
				<pre suppressContentEditableWarning={true} contentEditable={true} style={{ height: "100%", width: "100%", textAlign: "left", padding: "5px", border: "2px solid #000" }}>
					{JSON.stringify(state, null, 2)}
				</pre>
			</div>
			<div style={{ flex: 1 }}>
				<Core onChange={setState} value={initValue} dictionary={dictionary} />
			</div>
		</div>
	);
}

export default App;
