import React from "react";
import Info from "./components/info";
import FormComponent from "./components/formComponent";
import Weather from "./components/weather";
import { Container } from "semantic-ui-react"



const API_KEY = "ac0644ddecc565f5c69d936ba1606980";



class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined
  }

  retrievingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if(city) {
      const api_url = await 
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();

      var sunset = data.sys.sunset;
      var date = new Date(sunset * 1000); 
      var hours = date.getUTCHours(); 
      var minutes = date.getUTCMinutes(); 
      var seconds = date.getSeconds(); 

      var sunset_date = hours.toString().padStart(2, '0') 
          + ':' + minutes.toString().padStart(2, '0') 
          + ':' + seconds.toString().padStart(2, '0'); 

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: sunset_date,
        error: undefined
      });
    } else {
      this.setState ({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: "Type your city in English"
      });
    }
  }

  render() {
      return (
      <Container textAlign="center">
        <Info />
        <Weather 
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          pressure={this.state.pressure}
          sunset={this.state.sunset}
          error={this.state.error}
        />
        <FormComponent findWeather={this.retrievingWeather}/>
      </Container>
      );
    }
  }

  export default App;