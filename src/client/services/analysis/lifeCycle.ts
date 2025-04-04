import { LIFE_CYCLE_DESCRIPTION } from '../../constants/MYPAGE';

export const lifeCycleDescription = (age: number) => {
  if (age >= 28 && age <= 31) {
    return LIFE_CYCLE_DESCRIPTION[0];
  }
  if (age >= 32 && age <= 39) {
    return LIFE_CYCLE_DESCRIPTION[1];
  }
  if (age >= 40 && age <= 49) {
    return LIFE_CYCLE_DESCRIPTION[2];
  }
  if (age >= 50 && age <= 57) {
    return LIFE_CYCLE_DESCRIPTION[3];
  }
  if (age >= 58) {
    return LIFE_CYCLE_DESCRIPTION[4];
  }
  return LIFE_CYCLE_DESCRIPTION[0];
};
