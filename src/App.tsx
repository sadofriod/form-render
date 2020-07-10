/** @format */

import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import dictionary from "./dictionary";
import Core from "./core";
import Editor from "./component/editor";
import NewFormItemDialog from "./component/editor/newFormItemDialog";

// const generator = new Core(dictionary, getNode, getSubGraph);

// const initValue = {
// 	root: {
// 		name: "user name",
// 		sex: "user sex",
// 		password: "password1111232123222233333333",
// 		voke: [
// 			{
// 				rootName: "n",
// 				// pip: "start",
// 			},
// 			{
// 				rootName: "yssdsasdadsd",
// 				// pip: "end",
// 			},
// 			{
// 				rootName: "y",
// 			},
// 			{
// 				rootName: "n",
// 			},
// 		],
// 	},
// };

function App() {
	const [state, setState] = useState<any>();
	const [dic, setDic] = useState<IDictionary[]>(dictionary);
	const [isOpen, setOpen] = useState(false);
	const [path, setPath] = useState(".root");

	return (
		<div className="App">
			<div className="left">
				<h3>可选表单组件</h3>
				<Editor setDic={setDic} createNewFormItem={() => setOpen(true)} />
			</div>
			<div className="center">
				<h3>表单结构预览</h3>
				<h4 style={{ textAlign: "left" }}>当前路径：{path}</h4>
				<Core
					setPath={(val: string) => {
						setPath(val);
					}}
					onChange={setState}
					dictionary={dic}
				/>
			</div>
			<div className="right">
				<h3>结果集</h3>
				<pre suppressContentEditableWarning={true} contentEditable={true} style={{ height: "100%", width: "100%", textAlign: "left", padding: "5px", border: "2px solid #000" }}>
					{JSON.stringify(state, null, 2)}
				</pre>
			</div>
			<NewFormItemDialog dictionary={dic} isOpen={isOpen} setDic={setDic} path={path} />
		</div>
	);
}

export default App;
