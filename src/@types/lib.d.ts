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
  [key: string]: React.ReactNode;
}

/**Dictionary node description
 * @member name Generate the corresponding key of the target object
 * @member type The component corresponding to this node
 */
declare interface IDictionary {
  name: string;
  type: keyof IDictionaryType;
  label?: string;
  props?: {
    ref?: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
    ownStruct?: IDictionary;
    value?: any;
    option?: Array<{
      [keys: string]: string | number;
    }>;
    mapProps?: {
      [key: string]: any;
    };
  };
  nested?: Number;
  defaultValue?: any;
  children?: IDictionary[];
  changeByModel?: IChangeModel;
}
