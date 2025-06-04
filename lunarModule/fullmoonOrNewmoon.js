const fullmoonOrNewmoon = (fraction) => {
    let fullmoonNewmoon;
    if (fraction < 0.007) {
        fullmoonNewmoon = 'Новолуние.';
    } else if (fraction > 0.093) {
        fullmoonNewmoon = 'Полнолуние.';
    } else {
        fullmoonNewmoon = ' ';
    }
    return fullmoonNewmoon;
}

export default fullmoonOrNewmoon;