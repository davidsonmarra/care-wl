export interface ValidationLoginSchemaProps {
  email: string;
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
