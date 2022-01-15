const celsiusToFahrenheit = CTemperature => {
    const FTemperature = CTemperature * 1.8 + 32;
    return FTemperature;
};

module.exports = {celsiusToFahrenheit};