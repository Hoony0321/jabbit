import { CONSULTATION_CARDS_ITEMS } from '../constants/CONSULTATION';

export const calculateByItem = (
  item: keyof typeof CONSULTATION_CARDS_ITEMS,
  price: number,
) => {
  return Math.floor(price / CONSULTATION_CARDS_ITEMS[item]);
};
