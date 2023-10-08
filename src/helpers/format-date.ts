import {format} from 'date-fns';

export const formatDate = (stringDate: string) => {
  const parts = stringDate.split('-');
  const formattedDate = new Date(
    Number(parts[0]),
    Number(parts[1]),
    Number(parts[2]),
  );

  return {
    day: format(formattedDate, 'dd'),
    month: format(formattedDate, 'MMM'),
  };
};
