export interface UserDTO {
  name: string;
  role: 'doctor' | 'patient';
}

export interface DateDTO {
  id: number;
  date: Date;
  type: string;
  tag: 'first' | 'recurrent' | 'scheduled';
  doctor: string;
}

export interface CategoryDTO {
  id: string;
  name: string;
}
