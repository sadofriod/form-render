/** @format */

import Text from "../component/ui/TextInput";
import Default from "../component/ui/Default";
import withFormItem from "../component/editor/withFormItem";

class ComponentRegister {
	private componentsMap: {
		[key: string]: React.ReactNode;
	} = {
		Text: withFormItem(Text),
		Default: withFormItem(Default),
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
