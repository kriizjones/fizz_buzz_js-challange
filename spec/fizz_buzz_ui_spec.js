describe('Partial sample', function() {
  beforeEach(function() {
    // We can load fixtures using this method:
    // jasmine.getFixtures().clearCache();
    // var f = jasmine.getFixtures();
    // f.fixturesPath = 'base/spec/fixtures';
    // f.load('sample_partial.html');
    // $.holdReady(false);

    // Or this:
    jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
    loadFixtures('sample_partial.html');
    $.holdReady(false);
  });

  afterEach(function() {
    $("#fizzBuzzInput").val(NaN);
  });

  describe("displays text", function() {
    it("returns fizz", function(){
      $("#fizzBuzzInput").val(3);
      $("#fizzBuzzer").click();
      expect($("#fizzBuzzOutput").text()).toEqual ("fizz");
        });
      });

  describe("You should be able to press team1 button", function(){
    it (" and give you your roll result", function(){
      $("#team1roll").click();
      expect($("#team1result").text()).toEqual (jasmine.any(String));
        });
      });
    });
