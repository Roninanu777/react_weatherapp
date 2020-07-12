import React, { Component } from 'react'
import Title from './components/Title'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = '2870e042874453c6dfd4719bc74e5778';

class App extends Component {

  getWeather = async () => {
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`); 
  }

  render() {
    return (
      <div>
        <Title />
        <Form />
        <Weather />
      </div>
    )
  }
}

export default App
