
const getFormatedData = async (City) => {
    try {
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=ec7fa127304bf4605355795de5207f3f&units=metric`;
        const FetchData = await fetch(URL)
            .then((res) => res.json())
        if (!FetchData) {
            throw new Error("e");
        }
        const {
            weather,
            coord: { lon, lat },
            main: { temp, temp_min, temp_max, pressure, humidity },
            wind: { speed },
            sys: { country },
            name } = FetchData
        const { description } = weather[0]
        return {
            lon,
            lat,
            temp,
            temp_min,
            temp_max,
            pressure,
            humidity,
            speed,
            country,
            description,
            name

        }
    }
    catch (error) {
        // console.log("Error fetching weather data: ");
        throw error;
    }

}
export default getFormatedData;