async function getAstroData() {
    try {
        const date = new Date();  
        const timeStr = date.toTimeString().split(' ')[0];

        const params = {
            latitude: 37.9838,
            longitude: 23.7275,
            elevation: 1,
            from_date: date.toISOString().split('T')[0],
            to_date: date.toISOString().split('T')[0],
            time: timeStr,
            output: "table"
        };

        const query = new URLSearchParams(params);
        const apiUrl = `https://api.astronomyapi.com/api/v2/bodies/positions/moon?${query}`;

        const authString = btoa(`02f929d6-fd60-4272-ad56-3915b5175033:0e473934fd372bd294e1f959eccb53154f9e2af83aeb958562fccc8c30c07701040aae43ce3e745fd87b1f723e4deba6a0fdef0aa4116d715d995ab00e61c7b081136f9505aa3b0d77ea646afbabaf24fe8535a4270efec241c3319c5a3038bf35e95aa204b03bd1e32fefdb29d95839`);

        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${authString}`,
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Ошибка API: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Ошибка запроса:', {
            message: error.message
        });
        throw new Error('API Error');
    }
}

export default getAstroData;