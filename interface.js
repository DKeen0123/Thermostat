$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  updateEnergyUsage();

  $('#increase-temperature-btn').click(function(event) {
    thermostat.up();
    updateTemperature();
    updateEnergyUsage();
  });

  $('#decrease-temperature-btn').click(function(event) {
    thermostat.down();
    updateTemperature();
    updateEnergyUsage();
  });

  $('#reset-btn').click(function(event) {
    thermostat.reset();
    updateEnergyUsage();
    updateTemperature();
  });

  $('#psm-switch').click(function(event) {
    thermostat.powerSavingModeSwitch();
    updateTemperature();
    updateEnergyUsage();
    $(this).html() == 'turn off'
      ? $(this).html('turn on') && $('#psm-status').html('<strong>OFF</strong>')
      : $(this).html('turn off') &&
        $('#psm-status').html('<strong>ON</strong>');
  });

  function updateTemperature() {
    $('#current-temperature').html(thermostat.getCurrentTemperature());
    $('#current-temperature').attr('class', thermostat.energyUsage());
    $('#current-energy-usage').attr('class', thermostat.energyUsage());
  }

  function updateEnergyUsage() {
    $('#current-energy-usage').html(thermostat.energyUsage());
  }
});
