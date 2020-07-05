/** @format */

declare interface BaseComponent {
  model: string;
  absolutePath: string;
  value?: any;
  label?: string;
  onChange?: any;
}

declare interface FormField extends BaseComponent {
  // collection:(model:string)
}
