export const getFiles = async () => {
    try {
        const response = await fetch("http://localhost:3000/files/data", {
            mode: "no-cors",
            headers: {
                Accept: "application/json",
            }
        });
        console.log(response);
        const jsonResponse = await response.json();

        if (response.status !== 200)
            throw new Error(jsonResponse.message);

        return jsonResponse;
    } catch (error) {
        throw new Error(error.message);
    }
}