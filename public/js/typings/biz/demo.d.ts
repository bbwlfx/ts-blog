export interface DemoProps {
  count?: number;
  outstr?: string;
  Add?: React.MouseEventHandler<HTMLButtonElement>;
  Reverse?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface DemoState {
  count: Number;
  outstr: String;
}
