import { activity } from '../types/activity';

export const parseDescription = (description: string) => {
  return description.split('\n').map((line) => line);
};

export const parseActivity = (activities: activity[]) => {
  const parsedActivity = {
    education: [] as string[],
    press: [] as string[],
  };

  activities.map((activity) => {
    if (activity.type === '교육/강연')
      parsedActivity.education.push(`${activity.year} ${activity.description}`);
    else if (activity.type === '보도/방송')
      parsedActivity.press.push(`${activity.year} ${activity.description}`);
  });

  parsedActivity.education.sort((a, b) => {
    const yearA = a.split(' ')[0];
    const yearB = b.split(' ')[0];
    return parseInt(yearB) - parseInt(yearA);
  });

  parsedActivity.press.sort((a, b) => {
    const yearA = a.split(' ')[0];
    const yearB = b.split(' ')[0];
    return parseInt(yearB) - parseInt(yearA);
  });

  return parsedActivity;
};
