import { ListItem } from "../state";
export interface todolistProps {
  list: Array<ListItem>;
  addItem: (text: string) => {};
  deleteItem: (id: string) => {};
  asyncDelete: (id: string) => {};
}

export interface todolistState {
  text: string;
}
