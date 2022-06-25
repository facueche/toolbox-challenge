export const getFiles = async () => {
    const url = "http://localhost:3000/files/data";
    return await fetchFiles(url);
}

export const searchFileByFileName = async (filename) => {
    const url = `http://localhost:3000/files/data?fileName=${filename}`
    return await fetchFiles(url);
}

const fetchFiles = async (url) => {
    try {
        const response = await fetch(url, {
            headers: {
                Accept: "application/json",
            }
        });
        const jsonResponse = await response.json();

        if (response.status !== 200)
            throw new Error(jsonResponse.message);

        return jsonResponse;
    } catch (error) {
        throw new Error(error.message);
    }
}