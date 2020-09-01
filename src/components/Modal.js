import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchedCity from './SearchedCity';
import Loader from './Loader';
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Styles
//--------------------------------------------------------------------------//

const Form = styled.form`
    padding: 3rem 2rem;
    background-color: #bfdfe0;
    border-radius: 5px;
    display: flex;
    width: 30%;
    justify-content: center;
    flex-direction: row;
    font-family: 'Varela Round', sans-serif;
`;

const Input = styled.input`
    border: none;
    outline: none;
    padding: 12px 9px;
    width: 100%;
    background-color: #fff;
    border-radius: 5px;
`;

const Btn = styled.button`
    outline: none;
    padding: .5em 1.5em;
    border-radius: 5px;
    background-color: #bfdfe0;
    margin-left: 1rem;
    border: 2px solid #2b7a78;
    color: #2b7a78;
    cursor: pointer;
    font-family: 'Varela Round', sans-serif;
    font-size: 1.2rem;
    transition: all 0.1s ease-in;
    &:hover{
        background-color: #2b7a78;
        color: white;
    }
`;

const ModalWrapper = styled.div`
    position: absolute;
    align-self: center;
    width: 100vw;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: ${props => props.show ? 'translateY(10vh)' : 'translateY(-100vh)'}; 
    opacity: ${props => props.show ? '1' : '0'};
    transition: all 1s cubic-bezier(0.67, 0.08, 0.47, 1.15);
`;

const Country = styled.h3`
    color: #0e0e0e;
`;

const City = styled.p`
    color: #2b7a78;
    font-size: 1.3rem;
    margin-top: .5rem;
`;

const CityList = styled.div`
    width: 100%;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow-y: scroll;
    scroll-behaviour: smooth;
    height: 39vh;
    &::-webkit-scrollbar {
        width: 0em;
    }
`;

//--------------------------------------------------------------------------//

const Modal = (props) => {
    const [city, setCity] = useState('');
    const [cityData, setCityData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});

    const handleInputChange = (e) => {
        setCity(e.target.value);
    }

    let resetInput = () => {
        return setCity('');
    }

    let getWeather = (e) => {
        e.preventDefault();
        setLoading(true)
        fetch(`https://fierce-castle-13645.herokuapp.com/weather?city=${city}`)
            .then(res => res.json())
            .then(response => {
                resetInput();
                if(response.message){
                    setError(response);
                    resetInput();
                }
                else{
                    setError('');
                    setCityData(response);
                }
                setLoading(false);
            })
            .catch(err => console.log(err));
    }

    let renderCity = () => {
        if(loading){
            return (<SearchedCity><Loader /></SearchedCity>)
        }
        else{
            if(cityData.length > 0 && !error.message){
                return (
                    <CityList>
                        {cityData.map(city => {
                            return (
                                <SearchedCity key={city.id}>
                                    <Country><FontAwesomeIcon icon={faMapPin} style={{marginRight: '10px'}}></FontAwesomeIcon>{city.country}</Country>
                                    <City>{city.name}</City>
                                </SearchedCity>
                            )
                        })}
                    </CityList>
                )
            }
            else if(error.message){
                return (
                    <SearchedCity><City style={{color: 'red'}}>{error.message}</City></SearchedCity>
                )
            }
        }
    }

    return (
        <ModalWrapper show={props.show}>
            <Form type="submit" onSubmit={getWeather}>
                <Input type="text" value={city} onChange={handleInputChange} placeholder="Enter city name..." />
                <Btn type="submit" onClick={getWeather}>Search</Btn>
            </Form>
            {renderCity()}
        </ModalWrapper>
    )

}

export default Modal;