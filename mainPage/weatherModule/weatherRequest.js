import { url, key } from "./resouceUrlApi.js";

const weatherRequest = async (city) => {
    try {
        const response = await fetch(`${url}?key=${key}&q=${city}&aqi=no`);

        if(!response.ok) {
            alert('Упс! Что-то пошло не так. Проверьте название города.');
            throw new Error(`Ошибка при запросе данных о погоде ${response.status}`);
        }
        const data = await response.json();
        return data;

    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default weatherRequest;