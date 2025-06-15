export function getCurrentLocalDateTimeString(date: string): string {
  const dateTime = new Date(date);
  const time = new Date();

  const year = dateTime.getFullYear();
  const month = String(dateTime.getMonth() + 1).padStart(2, '0');
  const day = String(dateTime.getDate()).padStart(2, '0');

  const hours = String(time.getHours()).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');
  const seconds = String(time.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
}

export const formatDateKoreanWeekday = (dateTime: string): string => {
  const date = new Date(dateTime);
  const day = date.getDate();
  const weekday = new Intl.DateTimeFormat('ko-KR', { weekday: 'long' }).format(
    date,
  );

  return `${day}일 ${weekday}`;
};
