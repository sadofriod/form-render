/** @format */

import React, { useState } from "react";
import { Dialog, Button } from "@blueprintjs/core";
import Core from "../../core";
import formItemDictionary from "./formItemDictionary";
import setDictionaryByModel from "../../util/setDictionaryByModel";

interface Props {
	dictionary: IDictionary[];
	isOpen: boolean;
	path: string;
	setDic: any;
	compType?: keyof IDictionaryType;
	setOpen?: any;
}

const NewFormItemDialog: React.FC<Props> = (props) => {
	const { dictionary, isOpen, path, setDic, compType, setOpen } = props;
	const [config, setConfig] = useState<IDictionary>();
	const handleConfirm = () => {
		if (config) {
			const result = Object.assign([], dictionary);
			setDictionaryByModel(result, path, config);
			setOpen(false);
			setDic(result);
		}
	};
	const initValue = {
		type: compType,
	};

	return (
		<Dialog className="new-component-dialog" isOpen={isOpen} onClose={() => setOpen(false)}>
			<Core onChange={setConfig} value={initValue} dictionary={formItemDictionary} />
			<Button onClick={handleConfirm}>Confirm</Button>
			<Button onClick={() => setOpen(false)}>Conceal</Button>
		</Dialog>
	);
};

export default NewFormItemDialog;
