import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Form from './Form';
import Weather from './Weather';

const API_KEY = '2870e042874453c6dfd4719bc74e5778';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WeatherContainer = styled.div`
  
`;

class Modal extends Component {
  state = {
    status: 'init',
    isLoaded: false,
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

    //fetching city ids
    const city_info = await fetch(`https://fierce-castle-13645.herokuapp.com/weather?city=${city}`);
    const city_data = await city_info.json();
    let { id, name, country } = await city_data[0];
    console.log(id, name);

    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();

    if(city && country){
      this.setState({
        isLoaded: true,
        temperature: data.main.temp,
        city: city,
        country: country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: (data.cod === "404")? data.message : null
      })
    }else{
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter your location!"
      })
    }
  }

  render() {
    return (
      <Container>
        <WeatherContainer>
          <Form getWeather={this.getWeather} />
          <Weather blob={this.state}/>
        </WeatherContainer>
      </Container>
    )
  }
}

export default Modal;
