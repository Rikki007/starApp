import coronalMassEjection from "./coronalMassEjection.js";
import formatDate from "./getDate.js";
import getPastDate from "./getPastDate.js";

const coronalMassFormingData = async () => {
    try {
        const data = await coronalMassEjection();
        console.log(data)
        const oneDayAgoDate = getPastDate(1);
        const twoDayAgoDate = getPastDate(2);
        const threeDayAgoDate = getPastDate(3);
        const ejectionOneDayAgo = data.filter( item => {
            return item.activityID.split('T')[0] === oneDayAgoDate
        });
        const ejectionTwoDayAgo = data.filter( item => {
            return item.activityID.split('T')[0] === twoDayAgoDate
        });
        const ejectionThreeDayAgo = data.filter( item => {
            return item.activityID.split('T')[0] === threeDayAgoDate
        });
        // ejectionOneDayAgoParameters = ejectionOneDayAgo.map(item => {
        //     return {
        //         "speed": item.cmeAnalyses[0].speed,
        //         "isEarthGB": item.cmeAnalyses[0].enlilList[0].isEarthGB ? item.cmeAnalyses[0].enlilList[0].isEarthGB : false,
        //         "estimatedShockArrivalTime": item[0].cmeAnalyses[0].enlilList[0].estimatedShockArrivalTime ? item[0].cmeAnalyses[0].enlilList[0].estimatedShockArrivalTime : false,
        //     }
        // })

        // console.log(ejectionOneDayAgoParameters)
    } catch (error) {
        console.error("Ошибка обработки данных о коронарных выбросах", error);
    }
}

export default coronalMassFormingData;