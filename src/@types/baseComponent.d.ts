/** @format */

declare interface BaseComponent {
	value?: any;
	label?: LabelType;
	onChange?: any;
}

declare interface FormField {
	model: string;
	absolutePath: string;
	fieldProps?: FieldProps;
}
