import React from "react"
import '../Styles/Container.styled'
function Properties({ weather }) {
    const cards = [
        {
            id: 1,
            title: "Min",
            data: weather.temp_min,
            units: ' \u00B0C'
        },
        {
            id: 2,
            title: "Max",
            data: weather.temp_max,
            units: ' \u00B0C'
        },
        {
            id: 3,
            title: "Pressure",
            data: weather.pressure,
            units: ' hpa'
        },
        {
            id: 4,
            title: "Humidity",
            data: weather.humidity,
            units: ' %'
        },
        {
            id: 5,
            title: "speed",
            data: weather.speed,
            units: ' m/s'
        },
        {
            id: 6,
            title: "Latitude",
            data: weather.lat,
            units: ' \u00B0C'
        },
        {
            id: 7,
            title: "Longitude",
            data: weather.lon,
            units: ' \u00B0C'
        }
    ]
    return (
        <div className="other-info box">
            {cards.map((card) => (
                <div className="conditions min">
                    <h3>{card.title}</h3>
                    <h4>{card.data}{card.units}</h4>
                </div>
            ))}
        </div>
    )
}

export default Properties
