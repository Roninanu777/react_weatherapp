import React from 'react';
import styled from 'styled-components';
import Loader from './Loader';

const Container = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    cursor: pointer;
    padding: 3% 0 2% 0;
    margin-top: 3%;
    transition: all 0.2s ease;
    border-radius: 5px;
    box-shadow: 0 .1rem 1rem 5px rgba(0,0,0,0.07);
    &:hover{
        box-shadow: 0 .1rem 1rem 5px rgba(0,0,0,0.16);
        transform: translateY(-3px);
    }
`;

const SavedCity = styled.div`
    width: 100%;
    padding: 3% 1% 3% 1%;
    overflow-y: scroll;
    max-height: 35vh;
    margin-top: .5rem;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
        width: 0em;
    }
    @media (max-width: 450px){
        width: 92%;
    }
`;

const City = styled.p`
    font-size: 1rem;
    margin-top: 1%;
    @media (max-width: 450px){
        font-size: .8rem;
    }
`;

const Main = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

const Description = styled.div`
    display: flex;
    align-items: center;
`;

const Condition = styled.p`
    color: #2b7a78;
    @media (max-width: 450px){
        font-size: .9rem;
    }
`;

const Temp = styled.p`
    color: #2b7a78;
    font-size: 2.5rem;
    margin-right: 5%;
    @media (max-width: 450px){
        font-size: 1.5rem;
    }
`;

export default function SavedLoc({blob, loading}) {

    let renderSavedCity = () => {
        if(loading){
            return <Container><Loader /></Container>
        }
        else{
            return (
                blob.map(city => (
                    <Container key={city.id}>
                        <City>{`${city.name}, ${city.sys.country}`}</City>
                        <Main>
                            <Description>
                                <img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt="weather-icon"></img>
                                <Condition>{city.weather[0].main}</Condition>
                            </Description>
                            <Temp>{`${(city.main.temp - 273.15).toFixed()}°C`}</Temp>
                        </Main>
                    </Container>
                ))
            )
        }
    }

    return (
        <SavedCity>
            {renderSavedCity()}
        </SavedCity>
    )
}