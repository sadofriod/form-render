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
}

const NewFormItemDialog: React.FC<Props> = (props) => {
	const { dictionary, isOpen, path, setDic } = props;
	const [config, setConfig] = useState<IDictionary>();
	const handleConfirm = () => {
		if (config) {
			const result = Object.assign([], dictionary);
			setDictionaryByModel(result, path, config);
			console.log(result);

			setDic(result);
		}
	};

	return (
		<Dialog
			isOpen={isOpen}
			// onClose={() => setOpen(false)}
		>
			<Core onChange={setConfig} dictionary={formItemDictionary} />
			<Button onClick={handleConfirm}>Confirm</Button>
			<Button>Conceal</Button>
		</Dialog>
	);
};

export default NewFormItemDialog;
