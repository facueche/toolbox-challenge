const File = require('../../domain/models/file');
const Line = require('../../domain/models/line');

const fetchFiles = async () => {
    const files = require('./mock/files.mock.json');

    return files.map(fileRaw => {
        const file = new File(fileRaw.file);
        fileRaw.lines.forEach(lineRaw => {
            const line = new Line(lineRaw.text, lineRaw.number, lineRaw.hex);
            file.addLine(line);
        })
    });
}

module.exports = {
    fetchFiles
};