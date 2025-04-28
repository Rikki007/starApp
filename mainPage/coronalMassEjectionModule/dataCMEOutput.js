import coronalMassFormingData from "./coronalMassFormingData.js";

const dataCMEOutput = async () => {
    const solarDescription = document.querySelector(".solar__description");
    const data = await coronalMassFormingData();

    console.log(data)

    const numOfEjections = (data) => {
        return data.length
    }

    const averageSpeed = (data) => {
        let speed = 0;

        data.forEach(item => {
            speed += item.speed; 
        });

        return Math.floor(speed / data.length);
    }

    solarDescription.innerHTML = `
        <p class="block__description">За последние три дня произошло выбросов коронарных масс: .</p>
    `

}

export default dataCMEOutput;