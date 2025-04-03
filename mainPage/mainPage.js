import initializeTimeUpdater from "./initializeTimeUpdater.js";
import getGeolocation from "./getGeolocation.js";

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
            <div class="main-wrapper-block weather-preview">
                <img src="./assets/icons/weather/weatherAlert.svg" alt="weather picture" class="weather-preview__icon"/>
                <img src="./assets/icons/weather/cloud.svg" alt="weather picture" class="weather-preview__icon clouds"/>
                <img src="./assets/icons/weather/cloud.svg" alt="weather picture" class="weather-preview__icon clouds"/>
            </div>
            <div class="main-wrapper-block"></div>
        </section>

    `;

    initializeTimeUpdater();

    
    // определение координат
    let latitude;
    let longitude;
    getGeolocation();
    console.log(latitude)
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
                  const sunRise = data.daily.sunrise[0].split("T")[1];
                  const sunSet = data.daily.sunset[0].split("T")[1];
                  const weatherTime = timeElement.textContent.slice(0,5);
                  const weatherIcon = document.querySelector(".weather-preview__icon");
                  const clouds = document.querySelectorAll(".clouds");

                  const hours = currentTime.getHours();      
                  const temperature = document.querySelector(".temperature");
                  const humidity = document.querySelector(".humidity");
                  const feelsLike = document.querySelector(".feelsLike");
                  const cloudiness = document.querySelector(".cloudiness");
                  const precipitation = document.querySelector(".precipitation");
      
                  temperature.textContent = `Температура: ${Math.floor(data.hourly.temperature_2m[hours])}${data.hourly_units.temperature_2m}`;
                  humidity.textContent = `Влажность воздуха: ${data.hourly.relative_humidity_2m[hours]}${data.hourly_units.relative_humidity_2m}`;
                  feelsLike.textContent = `Ощущается как: ${Math.floor(data.hourly.apparent_temperature[hours])}${data.hourly_units.apparent_temperature}`;
                  cloudiness.textContent = `Облачность: ${data.hourly.cloud_cover[hours]}${data.hourly_units.cloud_cover}`;

                  if (data.hourly.cloud_cover[hours] < 25) {
                    if (weatherTime > sunRise && weatherTime < sunSet) {
                        weatherIcon.src = "./assets/icons/weather/dayClear.svg";
                      } else {
                        weatherIcon.src = "./assets/icons/weather/nightClear.svg";
                      }
                  }

                  if (data.hourly.cloud_cover[hours] > 25 && data.hourly.cloud_cover[hours] < 70) {
                    if (weatherTime > sunRise && weatherTime < sunSet) {
                        weatherIcon.src = "./assets/icons/weather/dayClear.svg";
                        clouds.forEach((element, index) => {
                            if (index === 0) {
                                element.classList.add('cloud1');
                            } else if (index === 1) {
                                element.classList.add('cloud2');
                            }
                        });
                      } else {
                        weatherIcon.src = "./assets/icons/weather/nightClear.svg";
                        clouds.forEach((element, index) => {
                            if (index === 0) {
                                element.classList.add('cloud1');
                            } else if (index === 1) {
                                element.classList.add('cloud2');
                            }
                        });
                      }
                  }

                  if (data.hourly.cloud_cover[hours] > 70) {
                    if (weatherTime > sunRise && weatherTime < sunSet) {
                        weatherIcon.src = "../assets/icons/weather/dayCloudy.svg";
                        clouds.forEach((element, index) => {
                            if (index === 0) {
                                element.classList.remove('cloud1');
                            } else if (index === 1) {
                                element.classList.remove('cloud2');
                            }
                        });
                      } else {
                        weatherIcon.src = "../assets/icons/weather/nightCloudy.svg";
                        clouds.forEach((element, index) => {
                            if (index === 0) {
                                element.classList.remove('cloud1');
                            } else if (index === 1) {
                                element.classList.remove('cloud2');
                            }
                        });
                      }
                  }
      
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
                      if (weatherTime > sunRise && weatherTime < sunSet) {
                        clouds.forEach((element, index) => {
                            if (index === 0) {
                                element.classList.remove('cloud1');
                            } else if (index === 1) {
                                element.classList.remove('cloud2');
                            }
                        });
                        weatherIcon.src = "./assets/icons/weather/dayRain.svg";
                      } else {
                        clouds.forEach((element, index) => {
                            if (index === 0) {
                                element.classList.remove('cloud1');
                            } else if (index === 1) {
                                element.classList.remove('cloud2');
                            }
                        });
                        weatherIcon.src = "./assets/icons/weather/nightRain.svg";
                      }
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
                      if (weatherTime > sunRise && weatherTime < sunSet) {
                        clouds.forEach((element, index) => {
                            if (index === 0) {
                                element.classList.remove('cloud1');
                            } else if (index === 1) {
                                element.classList.remove('cloud2');
                            }
                        });
                        weatherIcon.src = "./assets/icons/weather/daySnow.svg";
                      } else {
                        clouds.forEach((element, index) => {
                            if (index === 0) {
                                element.classList.remove('cloud1');
                            } else if (index === 1) {
                                element.classList.remove('cloud2');
                            }
                        });
                        weatherIcon.src = "./assets/icons/weather/nightSnow.svg";
                      }
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