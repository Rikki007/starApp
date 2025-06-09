const fullmoonOrNewmoon = (angel) => {
    let fullmoonNewmoon;
    if (angel > 354 || angel < 6) {
        fullmoonNewmoon = 'Новолуние.';
    } else if (angel > 174 && angel < 186) {
        fullmoonNewmoon = 'Полнолуние.';
    } else {
        fullmoonNewmoon = ' ';
    }
    return fullmoonNewmoon;
}

export default fullmoonOrNewmoon;