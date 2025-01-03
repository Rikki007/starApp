function calculateLunarDay(date) {
  const lunarCycleDays = 29.53;
  const firstNewMoonDate = new Date('2024-12-31T00:00:00');
  const differenceInDays = (date - firstNewMoonDate) / (1000 * 60 * 60 * 24);
  const currentLunarDay = (differenceInDays % lunarCycleDays);
  return Math.round(currentLunarDay) || 0;
}

export default calculateLunarDay;