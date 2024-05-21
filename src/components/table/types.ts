export type Columns = {
  name: string;
  uid: string;
  sortable?: boolean;
}[];

export type Search<T> = {
  mainField: keyof T;
};

export type Actions = {
  onView?: (id: string) => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
};
