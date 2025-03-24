import predictionWindow from "./predictionWindow.js";

const predictionRequest = () => {
    const btns = document.querySelectorAll('.sign-block__button');
    const preloader = document.querySelector(".loader-container");
  
    const toggleLoader = (show) => {
      preloader.classList.toggle("loader-container_disable", !show);
    };
  
    const handleButtonState = (button, disabled) => {
      button.disabled = disabled;
      button.style.opacity = disabled ? "0.7" : "1";
    };
  
    btns.forEach(item => {
      item.addEventListener('click', async () => {
        try {

          handleButtonState(item, true);
          toggleLoader(true);
          window.scrollTo({
            top: 0
          });
  
          const zodiacSign = item.dataset.sign.toLowerCase();
  
          const response = await fetch('http://localhost:3000/api/starAppBack', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              todayDate: new Date().toISOString().split('T')[0],
              sign: zodiacSign
            })
          });
  
          if (!response.ok) throw new Error('Ошибка сервера');
          
          const data = await response.json();
          predictionWindow(data.sign, data.description);
  
        } catch (error) {

          console.error('Error:', error);
          alert('Не удалось получить предсказание. Попробуйте позже.');

        } finally {

          handleButtonState(item, false);
          toggleLoader(false);

        }
      });
    });
  };

export default predictionRequest;