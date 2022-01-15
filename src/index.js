const celsiusToFahrenheit = CTemperature => {
    const FTemperature = CTemperature * 1.8 + 32;
    return Math.round(FTemperature);
};

const fahrenheitToCelsius = FTemperature => {
    const CTemperature = (FTemperature - 32) / 1.8;
    return Math.round(CTemperature);
};

module.exports = {celsiusToFahrenheit, fahrenheitToCelsius};