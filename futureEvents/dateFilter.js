const dateFilter = (arr) => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const todayDate = `${year}-${month}-${day}`;

    const rez = arr.find((item) => {
        const date1 = new Date(todayDate);
        const date2 = new Date(item.date);
        return date1 < date2;
    });
    return rez;
}

export default dateFilter;