const getDayOfYear = () => {
    const today = new Date(); 
    const startOfYear = new Date(today.getFullYear(), 0, 0);
    const diff = today - startOfYear; // Разница в миллисекундах
    const oneDay = 1000 * 60 * 60 * 24; // Миллисекунд в одном дне
    const dayOfYear = Math.floor(diff / oneDay); // Рассчитываем номер дня
    return dayOfYear;
}

export default getDayOfYear;