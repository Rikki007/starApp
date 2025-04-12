const getUtcOffset = async () => {
    const currentDate = new Date();
    const utcOffset = -currentDate.getTimezoneOffset() / 60;
    console.log(`0${utcOffset}:00`);

}

export default getUtcOffset;