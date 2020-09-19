import React from 'react';
import styled from 'styled-components';
import Loader from './Loader';

const Container = styled.div`
    background-color: white;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    cursor: pointer;
    padding: 1rem 0 0 0;
    margin-top: 2rem;
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
    padding: 0 1rem 1rem 1rem;
    overflow-y: scroll;
    height: 30vh;
    margin-top: .5rem;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
        width: 0em;
    }
`;

const City = styled.p`
    font-size: 1rem;
    font-weight: 600;
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
`;

const Temp = styled.p`
    color: #2b7a78;
    font-size: 2.5rem;
    margin-right: 5%;
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
                                <img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}></img>
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