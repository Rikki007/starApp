import { url, key } from "./resouceUrlApi.js";

const weatherRequest = async () => {
    try {
        const response = await fetch(`${url}?key=${key}&q=minsk&aqi=no`);

        if(!response.ok) {
            throw new Error(`Ошибка при запросе данных о погоде ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        return data;

    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default weatherRequest;