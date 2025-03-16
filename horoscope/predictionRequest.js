const predictionRequest = () => {
    const btn = document.querySelectorAll('.sign-block__button');
    btn.forEach(item => {
        item.addEventListener('click', () => {
            fetch('http://localhost:3000/api/starAppBack', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    todayDate: new Date().toISOString().split('T')[0],
                    sign: item.getAttribute('data-sign').toLowerCase()
                })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network error');
                }
                return response.json();
            })
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
        });
    });
};

export default predictionRequest;