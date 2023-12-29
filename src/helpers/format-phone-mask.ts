export const formatPhoneMask = (number: string): string => {
  const cleaned = ('' + number).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{2})(\d{0,5})(\d{0,4})$/);

  if (match) {
    return `(${match[1]}) ${match[2]}${match[3] ? `-${match[3]}` : ''}`;
  }

  return number.slice(0, 15);
};

export const formatPhoneUnmask = (number: string): string => {
  const cleaned = ('' + number).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{2})(\d{0,5})(\d{0,4})$/);

  if (match) {
    return `${match[1]}${match[2]}${match[3]}`;
  }

  return number.slice(0, 15);
};
