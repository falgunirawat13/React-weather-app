import { useState ,useEffect} from "react";
import { 
  WiDirectionUp,
  WiDirectionDown,
  WiHumidity,
  WiStrongWind,
  WiThermometer,
  WiCelsius,
  WiWindDeg, 
} from 
"react-icons/wi";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import bg from "../src/assets/bg6.jpg";
import "./App.css";
import { getWeatherData } from "./WeatherServices";

function App() {
  const [weather, setWeather] = useState(null);
  const [city,setCity]=useState('Bhopal')

useEffect(() => {
  const fetchData=async()=>{

    const data=await getWeatherData(city)
    setWeather(data)
    console.log(data)
  }
  fetchData();
}, [city])
const onKeySearch=(e)=>{
  if(e.keyCode===13){
    setCity(e.currentTarget.value)
  }
}
  return (
    <div className="app" style={{ backgroundImage: `url(${bg})` }}>
      
        {
        weather &&(
          <div className="container">
          <div className="row search">
          <div className="col-sm-19 input-and-btn">
            <input type="text" placeholder="Enter city name" onKeyDown={onKeySearch} />
          </div>
        </div>
        <div className="row weather">
          <div className="col-sm-12 city-name">
            <h3>{`${weather.name}, ${weather.country}`}</h3>
            <h6>{weather.description}</h6>
          </div>
          <div className="col weather-section ">
            <img src={weather.iconURL} style={{ width: "100px" }} alt="" />
            <h1>{weather.temp} <WiCelsius className="celcius" /></h1>
          </div>
        </div>
        <div className="row details">
          <div className="col-sm-4 min">
            <h6>Min Temp<WiDirectionDown className="icon min-icon" /></h6>
            <h3>{weather.temp_min}</h3>
          </div>
          <div className="col-sm-4 max">
            <h6>Max Temp<WiDirectionUp className="icon" /></h6>
            <h3>{weather.temp_max}</h3>
          </div>
          <div className="col-sm-4 feels">
            <h6>Feels Like<WiThermometer className="icon" /></h6>
            <h3>{weather.feels_like}</h3>
          </div>
          <div className="col-sm-4 pressure">
            <h6> Pressure<WiWindDeg className="icon" /></h6>
            <h3>{weather.pressure}</h3>
          </div>
          <div className="col-sm-4 humidity">
            <h6>Humidity<WiHumidity className="icon" /></h6>
            <h3>{weather.humidity}%</h3>
          </div>
          <div className="col-sm-4 wind-speed">
            <h6>Wind Speed<WiStrongWind className="icon" /></h6>
            <h3>{weather.speed}km/h</h3>
          </div>
        </div>
        </div> 
  )
        }
    </div>
  );
}

export default App;
