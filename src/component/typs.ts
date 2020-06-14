/** @format */

export interface InitState {
  change(model: string | string[], data: any): void;
  error(message: string): void;
  trigger(data: any): void;
}

export interface baseNode {
  name: string;
  label?: string;
  model?: string | string[];
  // event?:
}
// export interface
