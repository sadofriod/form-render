/** @format */

import React, { useState } from "react";
import "./App.css";
import dictionary from "./dictionary";
import FormRender from "./core";
import Editor from "./component/editor";
import NewFormItemDialog from "./component/editor/newFormItemDialog";
import { connect } from "react-redux";

function App(props: any) {
	const [state, setState] = useState<any>();
	const [dic, setDic] = useState<IDictionary[]>(dictionary);
	const [isOpen, setOpen] = useState(false);
	// const [path, setPath] = useState(".root");
	const { path } = props;
	const [componentType, setComponentType] = useState<keyof IDictionaryType>();

	return (
		<div className="App">
			<div className="left">
				<h3>Form Item</h3>
				<Editor
					setDic={setDic}
					createNewFormItem={(val: keyof IDictionaryType) => {
						setOpen(true);
						setComponentType(val);
					}}
				/>
			</div>
			<div className="center">
				<h3>Preview form ui struct</h3>
				<h4 style={{ textAlign: "left" }}>当前路径：{path}</h4>
				<FormRender onChange={setState} dictionary={dic} value={state} />
			</div>
			<div className="right">
				<h3>result set</h3>
				<pre
					suppressContentEditableWarning={true}
					contentEditable={true}
					onChange={(e: any) => {
						try {
							setState(JSON.parse(e.target.value));
						} catch (error) {
							console.warn("struct was warning");
						}
					}}
					style={{
						overflow: "auto",
						height: "40%",
						width: "100%",
						textAlign: "left",
						padding: "5px",
						border: "2px solid #000",
					}}
				>
					{JSON.stringify(state, null, 2)}
				</pre>
				<h3>dictionary</h3>
				<pre
					style={{
						overflow: "auto",
						height: "40%",
						width: "100%",
						textAlign: "left",
						padding: "5px",
						border: "2px solid #000",
					}}
				>
					{JSON.stringify(dic, null, 2)}
				</pre>
			</div>
			<NewFormItemDialog compType={componentType} setOpen={setOpen} dictionary={dic} isOpen={isOpen} setDic={setDic} path={path} />
		</div>
	);
}

const mapStateTopProps = (state: EditorStore.Store) => {
	return {
		path: state.system.path,
	};
};

export default connect(mapStateTopProps)(App);
