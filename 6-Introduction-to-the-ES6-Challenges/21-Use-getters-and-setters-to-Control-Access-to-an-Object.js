// I learn how to build a class with constructor and setters and getters
function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor(temperature) {
      this._temperature = 5/9 * (temperature - 32);
    }
    get temperature() {
      return this._temperature;
    }
    set temperature(utemperature) {
      this._temperature = utemperature;
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
