/** @format */

export type RecursionMain = (
  obj: IDictionary[],
  path: string,
  level: number,
  result: object,
) => React.ReactNode[] | React.ReactNode;
