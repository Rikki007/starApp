const interaction = () => {
    const main = document.querySelector('.main');

    main.innerHTML = `
        <section class="sign-section">
            <div class="sign-section-container">
                <div class="rose">
                    <img src="../assets/icons/rose.svg" alt="pic" class="rose-pic">
                </div>
                <div class="rose-sign aries-sign">
                    <img src="../assets/icons/zodiacSighns/aries.svg" alt="pic" class="rose-sign-pic">
                </div>
                <div class="rose-sign taurus-sign">
                    <img src="../assets/icons/zodiacSighns/taurus.svg" alt="pic" class="rose-sign-pic">
                </div>
                <div class="rose-sign gemini-sign">
                    <img src="../assets/icons/zodiacSighns/gemini.svg" alt="pic" class="rose-sign-pic">
                </div>
                <div class="rose-sign cancer-sign">
                    <img src="../assets/icons/zodiacSighns/cancer.svg" alt="pic" class="rose-sign-pic">
                </div>
                <div class="rose-sign leo-sign">
                    <img src="../assets/icons/zodiacSighns/leo.svg" alt="pic" class="rose-sign-pic">
                </div>
                <div class="rose-sign virgo-sign">
                    <img src="../assets/icons/zodiacSighns/virgo.svg" alt="pic" class="rose-sign-pic">
                </div>
                <div class="rose-sign libra-sign">
                    <img src="../assets/icons/zodiacSighns/libra.svg" alt="pic" class="rose-sign-pic">
                </div>
                <div class="rose-sign scorpio-sign">
                    <img src="../assets/icons/zodiacSighns/scorpio.svg" alt="pic" class="rose-sign-pic">
                </div>
                <div class="rose-sign sagittarius-sign">
                    <img src="../assets/icons/zodiacSighns/sagittarius.svg" alt="pic" class="rose-sign-pic">
                </div>
                <div class="rose-sign capricorn-sign">
                    <img src="../assets/icons/zodiacSighns/capricorn.svg" alt="pic" class="rose-sign-pic">
                </div>
                <div class="rose-sign aquarius-sign">
                    <img src="../assets/icons/zodiacSighns/aquarius.svg" alt="pic" class="rose-sign-pic">
                </div>
                <div class="rose-sign pisces-sign">
                    <img src="../assets/icons/zodiacSighns/pisces.svg" alt="pic" class="rose-sign-pic">
                </div>
            </div>
        </section>
        <section class="description-section"></section>
    `

}

export default interaction;