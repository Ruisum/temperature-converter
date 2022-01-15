const celsiusToFahrenheit = CTemperature => {
    if (isNaN(CTemperature)) {
        throw new Error('Temperature is not a number');
    }
    const FTemperature = CTemperature * 1.8 + 32;
    return Math.round(FTemperature);
};

const fahrenheitToCelsius = FTemperature => {
    if (isNaN(FTemperature)) {
        throw new Error('Temperature is not a number');
    }
    const CTemperature = (FTemperature - 32) / 1.8;
    return Math.round(CTemperature);
};

module.exports = {celsiusToFahrenheit, fahrenheitToCelsius};