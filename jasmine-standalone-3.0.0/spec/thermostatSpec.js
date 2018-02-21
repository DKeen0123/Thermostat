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

    it('has a minimum temperature of 10', function() {
      thermostat.temperature = 10;
      expect(function() {
        thermostat.down();
      }).toThrow('You have reached the minimum temperature.');
    });
  });

  describe('.up', function() {
    it('increases the temperature by 1', function() {
      thermostat.up();
      expect(thermostat.temperature).toBe(21);
    });
  });

  describe('.down', function() {
    it('decreases the temperature by 1', function() {
      thermostat.down();
      expect(thermostat.temperature).toBe(19);
    });
  });
});
