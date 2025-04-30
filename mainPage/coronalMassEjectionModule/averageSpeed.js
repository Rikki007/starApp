const averageSpeed = (data) => {
    let speed = 0;

    data.forEach(item => {
        speed += item.speed; 
    });

    return Math.floor(speed / data.length);
}

export default averageSpeed;