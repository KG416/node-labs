const app = require("../server");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;

chai.use(chaiHttp);

// random
describe("/api/random", () => {
    it("Should return a number between 0-1023", done => {
        chai
            .request(app)
            .get("/api/random")
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.number < 1023 && res.body.number > 0);
                done();
            });
    });
});

// counter
describe("/api/counter", () => {
    it("Should return a number", done => {
        chai
            .request(app)
            .get("/api/counter")
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.status).to.equals("success");
                expect(res.body.counter).to.be.a('number');
                done();
            });
    });
});

// counter +1
describe("/api/plus", () => {
    it("Should return a number", done => {
        chai
            .request(app)
            .get("/api/plus")
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.status).to.equals("success");
                expect(res.body.counter).to.be.a('number');
                done();
            });
    });

    it("Should be value of counter +1", done => {
        chai
            .request(app)
            .get("/api/plus")
            .end((err, res) => {
                expect(res.body.counter).to.equals(res.body.countBeforeAdd + 1);
                done();
            });
    });

});

// counter -1
describe("/api/minus", () => {
    it("Should return a number", done => {
        chai
            .request(app)
            .get("/api/minus")
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.status).to.equals("success");
                expect(res.body.counter).to.be.a('number');
                done();
            });
    });

    it("Should be value of counter -1", done => {
        chai
            .request(app)
            .get("/api/minus")
            .end((err, res) => {
                expect(res.body.counter).to.equals(res.body.countBeforeAdd - 1);
                done();
            });
    });

});