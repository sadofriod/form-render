/** @format */

interface IChangeModel {
  model: string | string[];
  handle: (data: any) => void;
}

interface IFormComponentDictionary {
  CommonConfig: React.ReactNode;
  Switch: React.ReactNode;
  Checkbox: React.ReactNode;
  ColorPicker: React.ReactNode;
  Select: React.ReactNode;
  Number: React.ReactNode;
  Text: React.ReactNode;
  TextArea: React.ReactNode;
  Slider: React.ReactNode;
  Collapse: React.ReactNode;
  Formatter?: React.ReactNode;
  FormSize?: React.ReactNode;
  FormPos?: React.ReactNode;
  FormRect?: React.ReactNode;
  FormFont?: React.ReactNode;
  Default: React.ReactNode;
  Option: React.ReactNode;
}

interface IDictionaryType extends IFormComponentDictionary {
  // [key: string]: React.ReactNode;
}

declare interface HandleLabel {
  (
    relativePath: string,
    absolutePath: string,
    value: any,
    resultSet: string,
  ): string;
}

declare type LabelType = string | string[] | HandleLabel;

/**Dictionary node description
 * @member name Generate the corresponding key of the target object
 * @member type The component corresponding to this node
 * @member label Form label content
 * @member props Extra props to pass component
 * @member nested Generate same struct if it's value be true
 * @member defaultValue Current form item value
 * @member changeByModel may unnecessary?
 */
declare interface IDictionary {
  name: string;
  type: keyof IDictionaryType;
  model?: string;
  label?: LabelType;
  props?: {
    ref?: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
    ownStruct?: IDictionary;
    value?: any;
    mapProps?: {
      [key: string]: any;
    };
  };
  nested?: number;
  defaultValue?: any;
  children?: IDictionary[];
  changeByModel?: IChangeModel;
  changeAction?(model: string, value: any): void;
  verification?(value): boolean;
  uiHook?: {
    custom?(ref: HTMLElement, callback): void;
    hidden?(value): void;
    display?(value): void;
    distroy?(value): void;
    onFocus?(value): void;
    onBlur?(value): void;
    onClick?(value): void;
  };
}
