const updateClouds = (clouds, hasClouds) => {
    clouds.forEach((cloud, index) => {
        cloud.classList.toggle('cloud1', hasClouds && index === 0);
        cloud.classList.toggle('cloud2', hasClouds && index === 1);
    });
};

export default updateClouds;