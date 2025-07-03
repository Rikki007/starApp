const dateComparison = (todayDate, targetDate) => {
    const oneDay = 1000 * 60 * 60 * 24;
    const firstDate = new Date(todayDate);
    const secondDate = new Date(targetDate);

    firstDate.setHours(0, 0, 0, 0);
    secondDate.setHours(0, 0, 0, 0);

    return Math.round((secondDate - firstDate) / oneDay);
};

export default dateComparison;
