const languageCreate = () => {
    const userLang = navigator.language || 'en'; // Определение языка пользователя
    console.log(userLang); // Выводит язык, например, 'ru' или 'en'

}

export default languageCreate;