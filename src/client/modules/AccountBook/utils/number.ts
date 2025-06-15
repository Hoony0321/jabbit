export const formatNumberWithCommas = (value: string | number) =>
  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const unformatNumber = (value: string) => value.replace(/[^\d]/g, '');
