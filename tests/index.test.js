const { celsiusToFahrenheit } = require('../src/index');

test("30 celsius is 86 fahrenheit", () => {
    expect(celsiusToFahrenheit(30)).toBe(86);
});

test("0 celsius is 32 fahrenheit", () => {
    expect(celsiusToFahrenheit(0)).toBe(32);
});

test("100 celsius is 212", () => {
    expect(celsiusToFahrenheit(100)).toBe(212);
});

