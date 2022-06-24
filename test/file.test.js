const { expect, assert } = require('chai');
const File = require('../src/core/domain/file.js');
const Line = require('../src/core/domain/line.js');

describe('File creation', function () {
    it('Filename is required', function () {
        expect(() => File.make("")).to.throw('Filename is required');
        expect(() => File.make()).to.throw('Filename is required');
    });

    it('Lines should be added to file', function () {
        let filename = 'file1.csv';
        let file = new File(filename);

        assert.equal(file.getLines().length, 0);

        let line = new Line("RgTya", 64075909, "70ad29aacf0b690b0467fe2b2767f765");
        file.addLine(line);

        assert.equal(file.getLines().length, 1);
    });

    it('File should show flag for display or not, depends if it has lines', function () {
        let filename = 'file1.csv';
        let file = new File(filename);

        assert.isFalse(file.shouldShow());

        let line = new Line("RgTya", 64075909, "70ad29aacf0b690b0467fe2b2767f765");
        file.addLine(line);

        assert.isTrue(file.shouldShow());
    });
});