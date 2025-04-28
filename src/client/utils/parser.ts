import { ExpertActivity } from '@/src/server/types/domains';

export const parseDescription = (description: string) => {
  return description.split('\n').map((line) => line);
};

interface PressActivity {
  string: string;
  url?: string;
}

export const parseActivity = (activities: ExpertActivity[]) => {
  const parsedActivity = {
    education: [] as string[],
    press: [] as PressActivity[],
  };

  activities.map((activity) => {
    if (activity.type === '교육/강연')
      parsedActivity.education.push(`${activity.year} ${activity.description}`);
    else if (activity.type === '보도/방송')
      parsedActivity.press.push({
        string: `${activity.year} ${activity.description}`,
        url: activity.url,
      });
  });

  parsedActivity.education.sort((a, b) => {
    const yearA = a.split(' ')[0];
    const yearB = b.split(' ')[0];
    return parseInt(yearB) - parseInt(yearA);
  });

  parsedActivity.press.sort((a, b) => {
    const yearA = a.string.split(' ')[0];
    const yearB = b.string.split(' ')[0];
    return parseInt(yearB) - parseInt(yearA);
  });

  return parsedActivity;
};

export const parseLastTwoNumberOfYear = (date: Date) => {
  return `${String(date.getFullYear()).slice(2)}.${String(
    date.getMonth() + 1,
  ).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
};
