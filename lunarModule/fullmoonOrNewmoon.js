const fullmoonOrNewmoon = (fraction) => {
    let fullmoonNewmoon;
    if (fraction < 0.004) {
        fullmoonNewmoon = 'Новолуние.';
    } else if (fraction > 0.096) {
        fullmoonNewmoon = 'Полнолуние.';
    } else {
        fullmoonNewmoon = ' ';
    }
    return fullmoonNewmoon;
}

export default fullmoonOrNewmoon;