import { Container } from './Components/Styles/Container.styled'
import Cloud from './Assets/images/cloudy.png'
import Search from './Assets/Icons/bx-search.svg'
import getFormatedData from './weatherService'
import { useEffect, useState } from 'react'
import Properties from './Components/component/Properties'


function App() {

  const [input, setInput] = useState('');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const FetchWeatherData = async () => {
      const FetchData = await getFormatedData('Addis Ababa');
      setWeather(FetchData)
    }
    FetchWeatherData()
  }, [])

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearchClick()
    }
  }

  const handleSearchClick = () => {
    console.log(input,"input")
    const FetchWeatherData = async () => {
      const FetchData = await getFormatedData(input);
      setWeather(FetchData)
    }
    FetchWeatherData()
    console.log(input,"input",weather.name)
    setInput('')
  }
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDay();
  const dayName = daysOfWeek[day]
  const hour = now.getHours();
  const minute = now.getMinutes();


  return (
    <Container>
      <div className="search-container">
        <input type="text" placeholder='Enter Location' value={input} onChange={event => setInput(event.target.value)} onKeyPress={handleKeyPress} />
        <button><img src={Search} onClick={handleSearchClick} alt="" /></button>
      </div>
      {
        weather && (
          <div className="weather-informaion">
            <div className="temprature-info box">
              <h2>{Math.floor(weather.temp)}<sup>o</sup></h2>
              <div className="country-date">
                <h3>{weather.name}{weather.city}</h3>
                <h4>{hour}:{minute} - {dayName} {day} - {month} - {year}</h4>
              </div>
              <img src={Cloud} width="50px" height="50px" alt="" />
            </div>
            <Properties weather={weather} />
          </div>
        )
      }
      <footer>© 2023 Ephrem</footer>
    </Container>
  );
}

export default App;
