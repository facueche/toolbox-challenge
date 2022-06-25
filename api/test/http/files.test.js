const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../src/index');
chai.should();

chai.use(chaiHttp);

describe('Files fetching', function () {
    it('Files response', function () {
        chai.request(server)
            .get('/files/data')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(2);
            })
    })
});