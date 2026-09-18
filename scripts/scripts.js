
document.addEventListener("DOMContentLoaded", function () {

   
    const currentYear = new Date().getFullYear();
    document.getElementById("current-year").textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById("last-modified").textContent = lastModified;

    
    const temperature = 22;   // °C (Metric) - typical Querétaro temperature
    const windSpeed = 12;      // km/h (Metric)

    /**
     * calculateWindChill - Returns the wind chill factor.
     * Formula (Metric): WC = 13.12 + 0.6215*T - 11.37*V^0.16 + 0.3965*T*V^0.16
     * @param {number} temp - Temperature in °C
     * @param {number} speed - Wind speed in km/h
     * @returns {number} Wind chill value rounded to 1 decimal
     */
    function calculateWindChill(temp, speed) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
    }

    
    const windChillElement = document.getElementById("wind-chill");

    if (temperature <= 10 && windSpeed > 4.8) {
        const windChillValue = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = windChillValue + " °C";
    } else {
        windChillElement.textContent = "N/A";
    }
});