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

  describe('powerSavingMode', function() {
    it('can be switched on', function() {
      thermostat.powerSavingModeSwitch();
      expect(thermostat.powerSavingMode).toEqual(false);
    });

    it('has a max temp of 25 when on', function() {
      thermostat.temperature = 25;
      expect(function() {
        thermostat.up();
      }).toThrow('Power saving mode is on. Max temp is 25.');
    });
    it('has a max temp of 32 when off', function() {
      thermostat.powerSavingModeSwitch();
      thermostat.temperature = 32;
      expect(function() {
        thermostat.up();
      }).toThrow('Max temp is 32');
    });
  });

  describe('.reset', function() {
    it('resets temp to 20', function() {
      thermostat.temperature = 25;
      thermostat.reset();
      expect(thermostat.temperature).toBe(20);
    });
  });

  describe('.energyUsage', function() {
    it("returns 'low-usage' when temperature is under 18", function() {
      thermostat.temperature = 17;
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });

    it("returns 'medium-usage' when temperature is above 18 and below 25", function() {
      thermostat.temperature = 23;
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });

    it("returns 'high-usage' when temperature is above 25", function() {
      thermostat.temperature = 26;
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });
  });
});
