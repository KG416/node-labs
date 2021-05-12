// import stuff we need for tests
const { expect } = require('chai');

// import randomNumFunc from server.js
const { randomNumFunc } = require('../server');

// test 1
describe('Random num function', () => {
    it('should return random num between 0-1023', () => {
        const result = randomNumFunc();
        console.log('result = ' + result); // returns undefined

        // the actual test = is result.number a number?
        expect(result.number).to.be.eq(typeof number);
    })
});

/* describe('Random number', function () {
    it('should return a random number', function () {
        request.get({ url: baseUrl + '/api/random' },
            function (error, response, body) {
                let bodyObj = JSON.parse(body);
                expect(bodyObj.name);

                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    })
}); */

// test 2

// test 3

// test 4