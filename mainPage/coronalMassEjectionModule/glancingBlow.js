const glancingBlow = (data) => {
    const arrivalDateData = data.filter(item => {
        return item.estimatedShockArrivalTime !== false;
    });
    const glancingBlowData = arrivalDateData.filter(item => {
        return item.isEarthGB === true;
    })

    return glancingBlowData.length;
}

export default glancingBlow;