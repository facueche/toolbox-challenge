export const getFiles = async () => {
    try {
        const response = await fetch("http://localhost:3000/files/data", {
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