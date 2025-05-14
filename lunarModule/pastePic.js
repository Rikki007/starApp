import requestOfPic from "./lunarPicRequest.js";

const pastePic = async () => {
    const picPath = await requestOfPic();
    const moonImagePhasePicture = document.querySelector(".phase__pic");

    moonImagePhasePicture.src = picPath;
}

export default pastePic;