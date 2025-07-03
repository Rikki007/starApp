const dateComparison = (todayDate, solsticeEquinoxDate) => {
    const todayComparableDate = new Date(todayDate).setHours(0, 0, 0, 0);
    const solsticeEquinoxComparableDate = new Date(solsticeEquinoxDate).setHours(0, 0, 0, 0);

    const dayDifference = (solsticeEquinoxComparableDate - todayComparableDate) / (1000 * 60 * 60 * 24);

    return dayDifference;
}

export default dateComparison;