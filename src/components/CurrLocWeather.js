import React, { Component } from 'react';
import styled from 'styled-components';
import Weather from './Weather';
import Loader from './Loader';
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const API_KEY = '2870e042874453c6dfd4719bc74e5778';


const CurrLoc = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2.5rem;
    padding: 2rem;
`;

const CurrIcon = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
`;

const P = styled.p`
    font-size: 1.1rem;
    font-family: 'Varela Round', sans-serif;
`;

class CurrLocWeather extends Component{
    state = {
        status: 'init',
        isLoaded: false,
        loader: undefined,
        temperature: undefined,
        city: undefined,
        country: undefined,
        description: undefined,
        icon: undefined,
        error: undefined
    }

    abortController = new AbortController();
    controllerSignal = this.abortController.signal;

    weatherInit = () => {
        const success = (position) => {
            this.setState({status: 'fetching'})
            this.getWeatherData(position.coords.latitude, position.coords.longitude);
        }

        const error = () => {
            this.setState({status: 'unable', error: 'Please enable location access'});
        }

        if(navigator.geolocation){
            this.setState({status: 'fetching', loader: <Loader />});
            navigator.geolocation.getCurrentPosition(success, error);
        }
        else{
            this.setState({status: 'unsupported'});
            alert('Your browser does not support location tracking, or permission is denied');
        }
    }

    getWeatherData = (lat, lon) => {
        const weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
        fetch(weatherApi, { signal: this.controllerSignal })
        .then(response => response.json())
        .then((result) => {
            const { name } = result;
            const { country } = result.sys;
            const { temp, humidity } = result.main;
            let { description, icon } = result.weather[0];
            description = description.charAt(0).toUpperCase() + description.slice(1);
            this.setState({
                isLoaded: true,
                temperature: temp,
                status: 'fetched',
                city: name,
                country: country,
                humidity,
                description,
                icon,
                error: (result.cod === '404')? result.message: null
            })
        },(error) => {
            this.setState({
                isLoaded: true,
                error
            });
        })
    }

    componentDidMount(){
        this.weatherInit();
    }

    componentWillUnmount(){
        this.abortController.abort();
    }

    render(){
        return(
            <CurrLoc>
                <CurrIcon>
                    <FontAwesomeIcon style={{marginRight: '.6rem'}} icon={faMapMarkerAlt} ></FontAwesomeIcon>
                    <P>Current Location</P>
                </CurrIcon>
                <Weather blob={this.state} />
            </CurrLoc>
        )
    }
}

export default CurrLocWeather;
