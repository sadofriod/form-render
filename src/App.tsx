/** @format */

import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import dictionary from "./dictionary";
import FormRender from "./core";
import Editor from "./component/editor";
import NewFormItemDialog from "./component/editor/newFormItemDialog";
// import FormRender from "../../form-render/src/core";

function App() {
  const [state, setState] = useState<any>();
  const [dic, setDic] = useState<IDictionary[]>(dictionary);
  const [isOpen, setOpen] = useState(false);
  const [path, setPath] = useState(".root");
  const [componentType, setComponentType] = useState<keyof IDictionaryType>();

  return (
    <div className="App">
      <div className="left">
        <h3>可选表单组件</h3>
        <Editor
          setDic={setDic}
          createNewFormItem={(val: keyof IDictionaryType) => {
            setOpen(true);
            setComponentType(val);
          }}
        />
      </div>
      <div className="center">
        <h3>表单结构预览</h3>
        <h4 style={{ textAlign: "left" }}>当前路径：{path}</h4>
        <FormRender
          setPath={(val: string) => {
            setPath(val);
          }}
          onChange={setState}
          dictionary={dic}
        />
      </div>
      <div className="right">
        <h3>结果集</h3>
        <pre
          suppressContentEditableWarning={true}
          contentEditable={true}
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
        <h3>字典</h3>
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
      <NewFormItemDialog
        compType={componentType}
        setOpen={setOpen}
        dictionary={dic}
        isOpen={isOpen}
        setDic={setDic}
        path={path}
      />
    </div>
  );
}

export default App;
