const chai = require("chai");
const expect = chai.expect;
chai.use(require("chai-as-promised"));

// This is just an async func that takes in a bool
// and calls a callback that returns a some message
// depending on the bool value

function someMadeUpAsyncFunc(boolValue, cb) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(boolValue ? "You get a treat!!" : "You get nothing!!");
    }, 0);
  });
}

// Added the `only` tag to have only this set of tests to run
describe.only("AsyncTest", function () {
  it("should return `You get a treat!!` if `true` is passed in", function () {
    return expect(someMadeUpAsyncFunc(true)).to.eventually.equal(
      "You get a treat!!"
    );
  });

  it("should return `You get nothing!!!` if `false` is passed in", function () {
    return expect(someMadeUpAsyncFunc(false)).to.eventually.equal(
      "You get nothing!!"
    );
  });
});
