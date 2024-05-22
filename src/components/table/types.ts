export type Columns = {
  name: string;
  uid: string;
  sortable?: boolean;
}[];

export type Search<T> = {
  mainField: keyof T;
};

export type Actions = {
  onView?: (id: number) => void;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
};
