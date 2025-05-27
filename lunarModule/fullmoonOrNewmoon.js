const fullmoonOrNewmoon = (fraction) => {
    let fullmoonNewmoon;
    if (fraction < 0.07) {
        fullmoonNewmoon = 'Новолуние.';
    } else if (fraction > 0.93) {
        fullmoonNewmoon = 'Полнолуние.';
    } else {
        fullmoonNewmoon = '';
    }

    return fullmoonNewmoon;
}

export default fullmoonOrNewmoon;