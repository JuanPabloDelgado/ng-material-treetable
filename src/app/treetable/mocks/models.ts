export interface Folder {
  name: string;
  owner: string;
  column2: string,
  column3: string,
  column4: string,
  column5: string,
  column6: string,
  column7: string,
  protected: boolean;
  backup: boolean;
}

export interface Task {
  name: string;
  completed: boolean;
  owner: string;
}

