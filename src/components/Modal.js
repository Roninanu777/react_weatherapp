import React, { Component } from 'react';
import styled from 'styled-components';
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const API_KEY = '2870e042874453c6dfd4719bc74e5778';

//--------------------------------------------------------------------------//

const Form = styled.div`
    padding: 3rem 0;
    background-color: #bfdfe0;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    font-family: 'Varela Round', sans-serif;
`;

const Input = styled.input`
    border: none;
    outline: none;
    padding: 9px;
    background-color: #f7f7f7;
    border-radius: 5px;
`;

const Btn = styled.button`
    outline: none;
    padding: 7px 16px;
    border-radius: 5px;
    background-color: #bfdfe0;
    margin-left: 1rem;
    border: 2px solid #2b7a78;
    color: #2b7a78;
    cursor: pointer;
    transition: all 0.1s ease-in;
    &:hover{
        background-color: #2b7a78;
        color: white;
    }
`;

//--------------------------------------------------------------------------//

class Modal extends Component {
  state = {
    status: 'init',
    isLoaded: false,
    temperature: undefined,
    city: undefined,
    country: undefined,
    description: undefined,
    error: undefined
  }

  handleInputChange = (e) => {
    let city = e.target.value;
    this.setState({city: city});
  }

  getWeather = async (e) => {

    let city = this.state.city;
    e.preventDefault();

    //fetching city ids
    try {
      const city_info = await fetch(`https://fierce-castle-13645.herokuapp.com/weather?city=${city}`);
      const city_data = await city_info.json();
      let { id, name, country } = await city_data[0];
      console.log(id, name);

      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${API_KEY}&units=metric`);
      const data = await api_call.json();
      console.log(data);

      if (city && country) {
        this.setState({
          isLoaded: true,
          temperature: data.main.temp,
          city: city,
          country: country,
          description: data.weather[0].description,
          error: (data.cod === "404") ? data.message : null
        })
      } else {
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          description: undefined,
          error: "Please enter your location!"
        })
      }
    } catch (error) {
      console.log(this.setState({error: error}))
    }

  }

    render() {
        return (
            <div style={{ position: 'absolute',alignSelf: 'center',transform: this.props.show ? 'translateY(10vh)' : 'translateY(-100vh)', opacity: this.props.show ? '1' : '0'}}>
                <FontAwesomeIcon onClick={this.props.close} style={{color: 'black', cursor: 'pointer', zIndex: 5}} size='2x' icon={faTimesCircle}></FontAwesomeIcon>
                <Form onSubmit={this.getWeather}>
                    <Input type="text" onChange={this.handleInputChange} name="city" placeholder="City..." />
                    <Btn type="submit" onClick={this.getWeather}>Search</Btn>
                </Form>
                {this.state.error ? <p>City not found</p> : null}              
            </div>
        )
    }
}

export default Modal;