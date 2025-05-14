const requestOfPic = async () => {

    const date = new Date();
    const currentDate = date.toISOString().split('T')[0];

    const data = {
        style: {
            moonStyle: "default",
            backgroundStyle: "solid",
            backgroundColor: "transparent",
            headingColor: "transparent",
            textColor: "transparent"
        },
        observer: {
            latitude: 37.9838,
            longitude: 23.7278,
            date: currentDate,
        },
        view: {
            type: "portrait-simple",
            parameters: {}
        }
    };

    try {
        const authString = btoa(`02f929d6-fd60-4272-ad56-3915b5175033:0e473934fd372bd294e1f959eccb53154f9e2af83aeb958562fccc8c30c07701040aae43ce3e745fd87b1f723e4deba6a0fdef0aa4116d715d995ab00e61c7b081136f9505aa3b0d77ea646afbabaf24fe8535a4270efec241c3319c5a3038bf35e95aa204b03bd1e32fefdb29d95839`);

        const response = await fetch('https://api.astronomyapi.com/api/v2/studio/moon-phase', {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${authString}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json();
        return responseData.data.imageUrl;
    } catch (error) {
        console.error('Error:', error);
    }
};

export default requestOfPic;