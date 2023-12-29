export interface UserDTO {
  name: string;
  phone: string;
  role: 'user' | 'admin';
}

export interface DateDTO {
  id: number;
  date: string;
  hour: string;
  type: string;
  tag: 'first' | 'recurrent' | 'scheduled';
  doctor: string;
}

export interface CategoryDTO {
  id: string;
  name: string;
}
