/**
* Module dependencies
*/
var expect =  require('chai').expect;
var converter = require('..');

describe('Temperature Conversor', function (){
	describe('celsius to Fahrenheit Conversion', function () {
		it('Converts 100C to Fahrenheit', function () {
			var fh = converter.toFahrenheit(100);
			expect(fh).to.equal(212);
		})
	})
	describe('Fahrenheit to celsius Conversion', function () {
		it('Converts 212F to Celsius', function () {
			var fh = converter.toCelsius(212);
			expect(fh).to.equal(100);
		})
	})
})