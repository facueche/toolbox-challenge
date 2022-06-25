class File
{
    constructor(filename)
    {
        this.assertFilenameIsValid(filename);
        this.lines = [];
    }

    assertFilenameIsValid(filename)
    {
        if(!filename instanceof String || filename == "" || filename === undefined)
            throw new Error("Filename is required");

        this.file = filename;
    }

    static make(filename)
    {
        return new File(filename);
    }

    getLines()
    {
        return this.lines;
    }

    addLine(line)
    {
        this.lines.push(line);
    }

    shouldShow()
    {
        return this.lines.length > 0;
    }
}

module.exports = File;