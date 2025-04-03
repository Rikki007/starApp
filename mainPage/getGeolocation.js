const getGeolocation = () => {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject("Геолокация не поддерживается");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            position => resolve({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }),
            error => reject(error)
        );
    });
};

export default getGeolocation;