/** @format */

import React, { useState, createRef } from "react";
import MonacoEditor, { EditorDidMount } from "react-monaco-editor";
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
	const { path } = props;
	const [componentType, setComponentType] = useState<keyof IDictionaryType>();
	const resultSetRef = createRef<MonacoEditor>();
	const dictionaryRef = createRef<MonacoEditor>();

	const editorDidMountHandle: EditorDidMount = (e) => {
		e.trigger("", "editor.action.formatDocument", "");
	};

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
			<div className="right" style={{ textAlign: "left" }}>
				<h3>result set</h3>
				<MonacoEditor
					ref={resultSetRef}
					width="100%"
					height="40%"
					language="javascript"
					theme="vs-light"
					value={JSON.stringify(state, null, 2)}
					options={{
						selectOnLineNumbers: true,
					}}
					onChange={(v: string) => {
						try {
							if (JSON.stringify(state) != v) {
								setState(JSON.parse(v));
							}
						} catch (error) {
							console.warn("struct was warning");
						}
					}}
					editorDidMount={editorDidMountHandle}
				/>
				<h3>dictionary</h3>
				<MonacoEditor
					ref={dictionaryRef}
					width="100%"
					height="40%"
					language="javascript"
					theme="vs-light"
					value={JSON.stringify(dic, null, 2)}
					options={{
						selectOnLineNumbers: true,
					}}
				/>
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
