class Line
{
    constructor(text, number, hex)
    {
        this.assertTextIsValid(text);
        this.assertNumberIsValid(number);
        this.assertHexIsValid(hex);
    }

    static make(text, number, hex)
    {
        return new Line(text, number, hex);
    }

    assertTextIsValid(text)
    {
        if (!text instanceof String || text == "" || text === undefined)
            throw new Error("Text is required");

        this.text = text;
    }

    assertNumberIsValid(number)
    {
        if (isNaN(number))
            throw new Error("Number is required");

        this.number = number;
    }

    assertHexIsValid(hex)
    {
        if (!hex instanceof String || hex == "" || hex === undefined)
            throw new Error("Hex is required");

        const hexLength = 32;
        if (hex.length !== hexLength)
            throw new Error("Hex should have 32 characters");

        this.hex = hex;
    }
}

module.exports = Line;