const { expect, assert } = require('chai');
const Line = require('../src/core/domain/line.js');

describe('Line creation', function () {
    it('Text is require', function () {
        let tempLine = { ...line };
        tempLine.text = "";
        let lineWithoutText = tempLine;

        expect(() => Line.make(lineWithoutText.text, lineWithoutText.number, lineWithoutText.hex)).to.throw('Text is required');

        lineWithoutText.text = undefined;

        expect(() => Line.make(lineWithoutText.text, lineWithoutText.number, lineWithoutText.hex)).to.throw('Text is required');
    });

    it('Number is required', function () {
        let tempLine = { ...line };
        tempLine.number = "not_number";
        let lineWithoutNumber = tempLine;

        expect(() => Line.make(lineWithoutNumber.text, lineWithoutNumber.number, lineWithoutNumber.hex)).to.throw('Number is required');

        lineWithoutNumber.number = undefined;

        expect(() => Line.make(lineWithoutNumber.text, lineWithoutNumber.number, lineWithoutNumber.hex)).to.throw('Number is required');
    });

    it('Hex is required', function () {
        let tempLine = { ...line };
        tempLine.hex = "";
        let lineWithoutHex = tempLine;

        expect(() => Line.make(lineWithoutHex.text, lineWithoutHex.number, lineWithoutHex.hex)).to.throw('Hex is required');

        lineWithoutHex.hex = undefined;

        expect(() => Line.make(lineWithoutHex.text, lineWithoutHex.number, lineWithoutHex.hex)).to.throw('Hex is required');
    });

    it('Hex should have 32 characters', function () {
        let tempLine = { ...line };
        tempLine.hex = "less than 32";
        let lineWithoutHex = tempLine;

        expect(() => Line.make(lineWithoutHex.text, lineWithoutHex.number, lineWithoutHex.hex)).to.throw('Hex should have 32 characters');

        lineWithoutHex.hex = "more than 32. this is a phrase that has a lot of characters, as you can see";

        expect(() => Line.make(lineWithoutHex.text, lineWithoutHex.number, lineWithoutHex.hex)).to.throw('Hex should have 32 characters');
    });

    it('Line should be created with correct data', function () {
        const newLine = new Line(line.text, line.number, line.hex);
        expect(newLine).to.have.own.property('text');
        assert.equal(newLine.text, line.text);
        expect(newLine).to.have.own.property('number');
        assert.equal(newLine.number, line.number);
        expect(newLine).to.have.own.property('hex');
        assert.equal(newLine.hex, line.hex);
    });

    const line = {
        text: "RgTya",
        number: 64075909,
        hex: "70ad29aacf0b690b0467fe2b2767f765"
    };
});