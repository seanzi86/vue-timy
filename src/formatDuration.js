const formatDuration = (ms, config) => {
  if (ms < 0) ms = -ms;
  const time = {
    year: Math.floor(ms / 31536000000),
    month: Math.floor(ms / 2592000000) % 365,
    day: Math.floor(ms / 86400000) % 30,
    week: Math.floor(ms / 604800000) % 7,
    hour: Math.floor(ms / 3600000) % 24,
    minute: Math.floor(ms / 60000) % 60,
    second: Math.floor(ms / 1000) % 60,
    millisecond: Math.floor(ms) % 1000
  };
  if (time.year > 1) return `${time.year} ${config.yearsAgo}`;
  if (time.year == 1) return `${config.aYearAgo}`;
  if (time.month > 1) return `${time.month} ${config.monthsAgo}`;
  if (time.month == 1) return `${config.aMonthAgo}`;
  if (time.week > 1) return `${time.week} ${config.weeksAgo}`;
  if (time.week == 1) return `${config.aWeekAgo}`;
  if (time.day > 1) return `${time.day} ${config.daysAgo}`;
  if (time.day == 1) return `${config.aDayAgo}`;
  if (time.hour > 1) return `${time.hour} ${config.hoursAgo}`;
  if (time.hour == 1) return `${config.anHourAgo}`;
  if (time.minute > 1) return `${time.minute} ${config.minutesAgo}`;
  if (time.minute == 1) return `${config.aMinuteAgo}`;
  if (time.second >= 30) return `${time.second} ${config.secondsAgo}`;
  if (time.second >= 15) return `${config.aFewSecondsAgo}`;
  return `${config.justNow}`;
};

export default formatDuration;
