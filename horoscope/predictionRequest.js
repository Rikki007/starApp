import predictionWindow from "./predictionWindow.js";

const predictionRequest = () => {
    const btn = document.querySelectorAll('.sign-block__button');
    btn.forEach(item => {
        item.addEventListener('click', () => {
            const zodiacSign = item.getAttribute('data-sign').toLowerCase();

            fetch('http://localhost:3000/api/starAppBack', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    todayDate: new Date().toISOString().split('T')[0],
                    sign: zodiacSign
                })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network error');
                }
                return response.json();
            })
            .then(data => predictionWindow(data.sign, data.description))
            .catch(error => console.error('Error:', error));
        });
    });
};

export default predictionRequest;