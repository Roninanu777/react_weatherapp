import React from 'react';
import styled from 'styled-components';

//-------------------------------------------------------------------------------------------------------
const Container = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    cursor: pointer;
    padding: 2rem 3rem;
    transition: all 0.2s ease;
    border-radius: 5px;
    box-shadow: 0 .1rem 1rem 5px rgba(0,0,0,0.05);
`;

const Condition = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 2rem 0;
    justify-content: space-evenly;
`;

const Temp = styled.p`
    font-size: 3.5rem;
    color: #2b7a78;
`;

const City = styled.p`
    font-size: 1.3rem;
    margin-bottom: 1rem;
`;
//-------------------------------------------------------------------------------------------------------

function Weather(props) {
    const { temperature, city, country, loader, status, description, icon, error} = props.blob;
    const weather_icon = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    return (
        <React.Fragment>
            <Container>
                { (status == 'fetching') ? loader : <></>}
                { city && country && <City>{city}, {country}</City> }
                <Condition>
                    { icon && <img src={weather_icon} alt="weather-icon" />}
                    { temperature && <Temp>{temperature.toFixed()}°C</Temp> }
                </Condition>
                { description && <p style={{color: '#3aafa9'}}>{description}</p> }
                { error && <p>{error}</p> }
            </Container>
        </React.Fragment>
    )
}

export default Weather;
