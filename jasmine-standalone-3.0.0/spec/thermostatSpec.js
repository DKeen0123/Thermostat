// Thermostat starts at 20 degrees

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });
  describe('.temperature', function() {
    it('returns temperature which defaults to 20', function() {
      expect(thermostat.temperature).toBe(20);
    });
  });
});
