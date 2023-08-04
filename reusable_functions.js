const hostName = 'http://192.168.43.138:5000'; // Replace this with your actual host name

const createFinalUrl = (endpoint) => {
    return `${hostName}${endpoint}`;
};

const handlePostRequest = async (jsonData, endpoint) => {
    const url = createFinalUrl(endpoint);

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        const errorResponse = {
            responseType: 'error',
            message: error.message,
        };
        return errorResponse;
    }
};

const handleGetRequest = async (endpoint) => {
    const url = createFinalUrl(endpoint);

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        const errorResponse = {
            responseType: 'error',
            message: error.message,
        };
        return errorResponse;
    }
};

export { handlePostRequest, handleGetRequest };