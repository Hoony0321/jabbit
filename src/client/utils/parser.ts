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

export const getCurrentTimestamp = () => {
  const now = new Date();
  const yyyy = now.getFullYear();
  const MM = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  return `${yyyy}-${MM}-${dd}-${hh}-${mm}`;
};

export const parseTimeFromTimestamp = (timestamp: string | null) => {
  if (!timestamp) {
    throw new Error('Invalid timestamp format');
  }
  const parts = timestamp.split('-');
  if (parts.length !== 5) {
    throw new Error('Invalid timestamp format');
  }
  const hh = parts[3];
  const mm = parts[4];
  return `${hh}:${mm}`;
};

export const extractDateOnly = (timestamp?: string): string => {
  if (!timestamp) return '';
  return timestamp.split('-').slice(0, 3).join('-');
};
export const formatKoreanDate = (dateString: string) => {
  const [, month, day] = dateString.split('-');
  return `${Number(month)}월 ${Number(day)}일`;
};

export const groupMessagesByDate = (
  items: { date: string; component: React.ReactNode }[],
): Record<string, React.ReactNode[]> => {
  return items.reduce(
    (acc, item) => {
      if (!item.date) return acc;
      if (!acc[item.date]) acc[item.date] = [];
      acc[item.date].push(item.component);
      return acc;
    },
    {} as Record<string, React.ReactNode[]>,
  );
};
