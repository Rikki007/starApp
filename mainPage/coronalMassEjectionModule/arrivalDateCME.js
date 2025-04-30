const arrivalDateCME = (data) => {
    const arrivalDateData = data.filter(item => {
        return item.estimatedShockArrivalTime !== false;
    });

    return arrivalDateData.length;
}

export default arrivalDateCME;