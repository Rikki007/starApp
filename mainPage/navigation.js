import linkFollow from "./linkFollow.js";

const navigation = () => {
    const buttons = document.querySelectorAll(".simple-wrapper__button");
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const pointToFollow = btn.dataset.btn;
            linkFollow(pointToFollow)
        });
    });
}

export default navigation;