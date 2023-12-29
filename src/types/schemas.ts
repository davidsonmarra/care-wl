export interface ValidationLoginSchemaProps {
  email: string;
  password: string;
}

export interface ValidationSignUpSchemaProps {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export interface ValidationScheduleAppointmentSchemaProps {
  type: string;
  date: string;
  obs?: string;
}

export interface ValidationScheduleEditDateSchemaProps {
  date: string;
}

export interface ValidationPersonalSchemaProps {
  name: string;
  email: string;
  phone: string;
}
