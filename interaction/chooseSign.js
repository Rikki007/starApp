const chooseSign = () => {
    let num = 0;
    const sign = document.querySelectorAll(".rose-sign");
    const signFirstField = document.querySelector(".first-field");
    const signSecondField = document.querySelector(".second-field");
    sign.forEach(item => {
        item.addEventListener('click', () => {
            if (item.classList.contains("rose-sign__able")) {
                num -= 1;
                item.classList.remove("rose-sign__able");
                console.log(num) 
            } else {
                num += 1;
                item.classList.add("rose-sign__able");
                console.log(num) 
            }
        })
    })
}

export default chooseSign;