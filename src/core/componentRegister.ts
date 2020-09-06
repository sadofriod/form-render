/** @format */

import Text from "../component/ui/TextInput";
import Default from "../component/ui/Default";
import withFormItem from "../component/editor/withFormItem";
import { Radio } from "../component/ui/Radio";
import { RadioGroup } from "../component/ui/RadioGroup";
import { Select } from "../component/ui/Select";

class ComponentRegister {
	private componentsMap: {
		[key: string]: React.ReactNode;
	} = {
		Text: withFormItem(Text),
		Default: withFormItem(Default),
		Radio: withFormItem(Radio),
		RadioGroup: withFormItem(RadioGroup),
		Select: withFormItem(Select),
	};
	register = (maps: { [key: string]: React.ReactNode }) => {
		Object.assign(this.componentsMap, maps);
	};
	getMap = (key: string) => {
		return this.componentsMap[key];
	};
	get = () => {
		return this.componentsMap;
	};
}
export default new ComponentRegister();
