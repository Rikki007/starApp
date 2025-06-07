const preloader = () => {
    return `
        <div class="loader-container loader-container_disable">
            <img src="./assets/images/preloader.gif" class="loader" alt="loader"/>
            <div class="quote-container">
                <p class="quote">""</p>
                <p class="author"></p>
            </div>
        </div>
    `
}

export default preloader;