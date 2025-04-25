import formatDate from "./getDate.js";

const getPastDate = (daysAgo) => {
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    return formatDate(date);
};

export default getPastDate;