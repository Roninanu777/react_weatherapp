import React, { Component } from 'react'
import Title from './components/Title'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = '2870e042874453c6dfd4719bc74e5778';

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {

    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if(city && country){
      this.setState({
        temperature: data.main.temp,
        city: city,
        country: country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: (data.cod === "404")? data.message : null
      })
    }
  }

  render() {
    return (
      <div>
        <Title />
        <Form getWeather={this.getWeather} />
        <Weather blob={this.state}/>
      </div>
    )
  }
}

export default App;
