const mainPage = () => {
    const main = document.querySelector(".main");
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Создаём основную структуру один раз
    main.innerHTML = `
        <section class="main-wrapper">
            <div class="main-wrapper-block time">
                <p class="block__description">Часовой пояс: ${timeZone}</p>
                <p id="current-date" class="block__description">Текущая дата: </p>
                <p id="current-time" class="block__description">Текущее время: </p>
            </div>
            <div class="main-wrapper-block weather">
                <button class="weather-button">запрос погоды</button>
                <p class="block__description temperature">Температура:</p>
                <p class="block__description humidity">Влажность:</p>
                <p class="block__description feelsLike">Ощущается:</p>
                <p class="block__description cloudiness">Облачность:</p>
                <p class="block__description precipitation"></p>
            </div>
            <div class="main-wrapper-block"></div>
        </section>

    `;

    // Получаем ссылки на элементы для обновления
    const dateElement = document.getElementById("current-date");
    const timeElement = document.getElementById("current-time");

    // Обновляем только время и дату, не трогая остальной DOM
    setInterval(() => {
        const currentDate = new Date();
        dateElement.textContent = `Текущая дата: ${currentDate.toLocaleDateString()}`;
        timeElement.textContent = `Текущее время: ${currentDate.toLocaleTimeString()}`;
    }, 1000);

    
    // определение координат
    let latitude;
    let longitude;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
      
            console.log(`Широта: ${latitude}, Долгота: ${longitude}`);
      
            // Вы можете использовать эти координаты для вашего API-запроса
          },
          error => {
            console.error("Ошибка получения геолокации:", error);
          }
        );
      } else {
        console.error("Геолокация не поддерживается вашим браузером.");
    }
      // фетч запрос погоды с Open-Meteo API
      const weatherButton = document.querySelector(".weather-button");
      weatherButton.addEventListener('click', () => {
          fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=sunrise,sunset&hourly=relative_humidity_2m,temperature_2m,apparent_temperature,cloud_cover,rain,snowfall&forecast_days=1&timezone=${timeZone}`, {
              method: "GET"
          })
              .then(response => response.json())
              .then(data => {
                  console.log(data);
                  const currentTime = new Date();
                  const hours = currentTime.getHours();
                  console.log(hours);
      
                  const temperature = document.querySelector(".temperature");
                  const humidity = document.querySelector(".humidity");
                  const feelsLike = document.querySelector(".feelsLike");
                  const cloudiness = document.querySelector(".cloudiness");
                  const precipitation = document.querySelector(".precipitation"); // Исправлено с .temperature
      
                  temperature.textContent = `Температура: ${Math.floor(data.hourly.temperature_2m[hours])}${data.hourly_units.temperature_2m}`;
                  humidity.textContent = `Влажность воздуха: ${data.hourly.relative_humidity_2m[hours]}${data.hourly_units.relative_humidity_2m}`;
                  feelsLike.textContent = `Ощущается как: ${Math.floor(data.hourly.apparent_temperature[hours])}${data.hourly_units.apparent_temperature}`;
                  cloudiness.textContent = `Облачность: ${data.hourly.cloud_cover[hours]}${data.hourly_units.cloud_cover}`;
      
                  // Проверка выхода за границы массива
                  const maxIndex = data.hourly.rain.length - 1;
                  const getSafeValue = (array, index) => index <= maxIndex ? array[index] : 0;
      
                  // Обработка дождя
                  let rainStatus = '';
                  const currentRain = getSafeValue(data.hourly.rain, hours);
                  const nextHourRain = getSafeValue(data.hourly.rain, hours + 1);
                  const nextTwoHoursRain = getSafeValue(data.hourly.rain, hours + 2);
      
                  if (currentRain > 0) {
                      rainStatus = 'Дождь';
                  } else {
                      if (currentRain === 0 && nextHourRain === 0 && nextTwoHoursRain === 0) {
                          rainStatus = '';
                      } else if (currentRain === 0 && nextHourRain === 0 && nextTwoHoursRain > 0) {
                          rainStatus = 'Возможен дождь';
                      } else if (currentRain === 0 && nextHourRain > 0 && nextTwoHoursRain > 0) {
                          rainStatus = 'В течение часа ожидается дождь';
                      }
                  }
      
                  // Обработка снега
                  let snowStatus = '';
                  const currentSnow = getSafeValue(data.hourly.snowfall, hours);
                  const nextHourSnow = getSafeValue(data.hourly.snowfall, hours + 1);
                  const nextTwoHoursSnow = getSafeValue(data.hourly.snowfall, hours + 2);
      
                  if (currentSnow > 0) {
                      snowStatus = 'Снег';
                  } else {
                      if (currentSnow === 0 && nextHourSnow === 0 && nextTwoHoursSnow === 0) {
                          snowStatus = '';
                      } else if (currentSnow === 0 && nextHourSnow === 0 && nextTwoHoursSnow > 0) {
                          snowStatus = 'Возможен снег';
                      } else if (currentSnow === 0 && nextHourSnow > 0 && nextTwoHoursSnow > 0) {
                          snowStatus = 'В течение часа ожидается снег';
                      }
                  }
      
                  // Формирование итогового сообщения
                  const messages = [];
                  if (rainStatus) messages.push(rainStatus);
                  if (snowStatus) messages.push(snowStatus);
                  precipitation.textContent = messages.join(', ') || ''; // Очищает, если оба пусты
      
              })
              .catch(error => {
                  console.error("Ошибка:", error);
              });
      });
      
      
};

export default mainPage;