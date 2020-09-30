import React, { Component } from 'react';
import styled from 'styled-components';
import Weather from './Weather';
import Loader from './Loader';
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Styles--------------------------------------------------------------------------------------

const CurrLoc = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10% 0;
    @media (max-width: 450px){
        margin: 5% 0 10% 0;
    }
`;

const CurrIcon = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 6%;
`;

const P = styled.p`
    font-size: 1.1rem;
    font-family: 'Varela Round', sans-serif;
    font-weight: bold;
    color: #4d4d4d;
    @media (max-width: 450px){
        font-size: .9rem;
    }
`;

//Styles--------------------------------------------------------------------------------------

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
            navigator.geolocation.getCurrentPosition(success, error, {
                enableHighAccuracy : true
            });
        }
        else{
            this.setState({status: 'unsupported'});
            alert('Your browser does not support location tracking, or permission is denied');
        }
    }

    getWeatherData = (lat, lon) => {
        const weatherApi = `${process.env.REACT_APP_BASEURL}?appid=${process.env.REACT_APP_API_KEY}&lat=${lat}&lon=${lon}&units=metric`;
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
                    <FontAwesomeIcon style={{marginRight: '.6rem',color: '#2b7a78'}} icon={faMapMarkerAlt} ></FontAwesomeIcon>
                    <P>Current Location</P>
                </CurrIcon>
                <Weather blob={this.state} />
            </CurrLoc>
        )
    }
}

export default CurrLocWeather;
