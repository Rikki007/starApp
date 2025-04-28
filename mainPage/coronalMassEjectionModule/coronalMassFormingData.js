import coronalMassEjection from "./coronalMassEjection.js";
import objectParametersCreator from "./objectParametersCreator.js";

const coronalMassFormingData = async () => {
    try {

        const data = await coronalMassEjection();

        // select the necessary parameters
        const dataNeededParameters = objectParametersCreator(data);

        return dataNeededParameters;
        
    } catch (error) {

        console.error("Ошибка обработки данных о коронарных выбросах", error);

    }
}

export default coronalMassFormingData;