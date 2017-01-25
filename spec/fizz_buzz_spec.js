describe("fizzBuzzer", function() {
  var subject;

  beforeEach(function() {
    subject = new fizzBuzzer();
  });

it("should be one", function() {
  expect(fizzBuzzer(1)).toEqual(1);
});

it("should be fizz", function() {
  expect(fizzBuzzer(3)).toEqual('fizz');
});

it("should be buzz", function() {
  expect(fizzBuzzer(5)).toEqual('buzz');
});

it("should be fizzbuzz", function() {
  expect(fizzBuzzer(15)).toEqual('fizzbuzz');
});

});
