const { celsiusToFahrenheit, fahrenheitToCelsius } = require('../src/converter');

describe("Celsius to Fahrenheit", () => {
    test("30 celsius is 86 fahrenheit", () => {
        expect(celsiusToFahrenheit(30)).toBe(86);
    });
    
    test("0 celsius is 32 fahrenheit", () => {
        expect(celsiusToFahrenheit(0)).toBe(32);
    });
    
    test("100 celsius is 212", () => {
        expect(celsiusToFahrenheit(100)).toBe(212);
    });

    test("String input throws an error", () => {
        expect(() => celsiusToFahrenheit('test')).toThrow(new Error('Temperature is not a number'));
    });

    test("Object throws an error", () => {
        expect(() => celsiusToFahrenheit({})).toThrow(new Error('Temperature is not a number'));
    });
});

describe("Fahrenheit to Celsius", () => {
    test("100 fahreinheit is 38 celsius", () => {
        expect(fahrenheitToCelsius(100)).toBe(38);
    });

    test("0 fahrenheit is -18 celsius", () => {
        expect(fahrenheitToCelsius(0)).toBe(-18);
    });

    test("200 fahrenheit is 93 celsius", () => {
        expect(fahrenheitToCelsius(200)).toBe(93);
    });

    test("String input throws an error", () => {
        expect(() => fahrenheitToCelsius('test')).toThrow(new Error('Temperature is not a number'));
    });

    test("Object throws an error", () => {
        expect(() => fahrenheitToCelsius({})).toThrow(new Error('Temperature is not a number'));
    });
});
