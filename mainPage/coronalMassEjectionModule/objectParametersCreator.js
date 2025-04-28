const objectParametersCreator = (data) => {
    return data.map(item => {
        return {
            activityID: item.activityID.split("T")[0],
            speed: item.cmeAnalyses?.[0]?.speed || 0,
            isEarthGB: item.cmeAnalyses?.[0]?.enlilList?.[0]?.isEarthGB || false,
            estimatedShockArrivalTime: item.cmeAnalyses?.[0]?.enlilList?.[0]?.estimatedShockArrivalTime || false,
            kpIndex: item.cmeAnalyses?.[0]?.enlilList?.[0]?.kp_135 || false,
        };
    });
}

export default objectParametersCreator;