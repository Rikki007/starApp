const straightBlow = (data) => {
    const arrivalDateData = data.filter(item => {
        return item.estimatedShockArrivalTime !== false;
    });
    const straightBlowData = arrivalDateData.filter(item => {
        return item.isEarthGB !== true;
    })

    return straightBlowData.length
}

export default straightBlow;