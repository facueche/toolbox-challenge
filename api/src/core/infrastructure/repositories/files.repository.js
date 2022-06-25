const fetch = require("node-fetch");
const { Headers } = require('node-fetch');
const File = require("../../domain/models/file");
const Line = require("../../domain/models/line");

const fetchFiles = async () => {
    try {
        const response = await fetch("https://echo-serv.tbxnet.com/v1/secret/files", {
            headers: new Headers({
                Accept: "application/json",
                Authorization: "Bearer aSuperSecretKey"
            })
        });

        const jsonResponse = await response.json();

        if (response.status !== 200)
            throw new Error(jsonResponse.message);

        const files = await Promise.all(jsonResponse.files.map(fetchFileByFileName));

        return files;
    } catch (error) {
        throw new Error(error.message);
    }
}

const fetchFileByFileName = async (filename) => {
    const file = new File(filename);

    try {
        await fetchFileLinesAndPush(filename, file);
    } catch (error) {
        // Just skip
    }

    return file;
}

const fetchFileLinesAndPush = async (filename, file) => {
    try {
        const response = await fetch(`https://echo-serv.tbxnet.com/v1/secret/file/${filename}`, {
            headers: new Headers({
                Accept: "application/json",
                Authorization: "Bearer aSuperSecretKey"
            })
        })

        if (response.status !== 200) {
            const jsonResponse = await response.json();
            throw new Error(jsonResponse.message);
        }

        const textResponse = await response.text();

        const csvLines = textResponse.split('\n');
        for (let i = 1; i < csvLines.length; i++) {
            const currentLine = csvLines[i].split(',');
            try {
                const line = new Line(currentLine[1], currentLine[2], currentLine[3]);
                file.addLine(line);
            } catch (error) {
                continue;   // Skip
            }
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    fetchFiles,
    fetchFileByFileName
};