/** @format */

import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import dictionary from "./dictionary";
import Core from "./core";

// const generator = new Core(dictionary, getNode, getSubGraph);

function App() {
	const [state, setState] = useState<any>();
	return (
		<div className="App">
			<div style={{ flex: 1 }}>
				<div style={{ height: "100%", width: "100%", textAlign: "left", padding: "5px", border: "2px solid #000" }} contentEditable={true}>
					{JSON.stringify(state, null, 2)}
				</div>
			</div>
			<div style={{ flex: 1 }}>
				<Core onChange={setState} dictionary={dictionary} />
			</div>
		</div>
	);
}

export default App;
