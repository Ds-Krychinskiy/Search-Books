export interface SelectMenuProps {
  name: string;
  list: string[];
}

const category: string[] = [
  "all",
  "art",
  "biography",
  "computers",
  "history",
  "medical",
  "poetry",
];

const sort: string[] = ["relevance", "newest"];

export const SelectMenu: SelectMenuProps[] = [
  {
    name: "Category",
    list: category,
  },
  {
    name: "Sorting by",
    list: sort,
  },
];
