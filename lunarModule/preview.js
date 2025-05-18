const preview = () => {
  const previewButton = document.querySelector(".preview__button");
  const moonImage = document.querySelector(".preview__picture");
  let currentIndex = 0;
  let animationInterval = null;

  const loadImages = () => {
    const promises = [];
    for (let i = 0; i < 29; i += 1) {
      const img = new Image();
      img.src = `./assets/images/moon/lunarCycle${i}.png`;
      promises.push(
        new Promise((resolve) => {
          img.onload = () => resolve(img.src);
        })
      );
    }
    return Promise.all(promises);
  };

  let cachedPaths = null;
  loadImages().then(paths => {
    cachedPaths = paths.map(item => 
      `./${item.split("/").splice(4, item.length).join("/")}`
    );
    console.log(cachedPaths)
  });

  previewButton.addEventListener('click', () => {

    if (animationInterval) clearInterval(animationInterval);
    previewButton.disabled = true;
    previewButton.classList.add("cycle-block__preview_disable");

    const lunarAnimation = async () => {

      const neededPath = cachedPaths || await loadImages().then(paths => 
        paths.map(item => 
          `./${item.split("/").splice(4, item.length).join("/")}`
        )
      );

      currentIndex = 0;
      animationInterval = setInterval(() => {
        
        
        currentIndex = (currentIndex + 1) % neededPath.length;
        moonImage.src = neededPath[currentIndex];

        if (currentIndex === 0) {
          clearInterval(animationInterval);
          previewButton.disabled = false;
          previewButton.classList.remove("cycle-block__preview_disable");
        }
      }, 60);
    };

    lunarAnimation();
  });
};


export default preview;