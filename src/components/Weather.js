import React from 'react';
import styled, {keyframes} from 'styled-components';

//-------------------------------------------------------------------------------------------------------
const Container = styled.div`
    background-color: white;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    cursor: pointer;
    padding: 2rem 1.5rem;
    transition: all 0.2s ease;
    border-radius: 5px;
    box-shadow: 0 .1rem 1rem 5px rgba(0,0,0,0.07);
    &:hover{
        box-shadow: 0 .1rem 1rem 5px rgba(0,0,0,0.16);
        transform: translateY(-3px);
    }
`;

const Condition = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 1.7rem 0;
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

    const renderContent = () => {
        if(status === 'fetching'){
            return loader;
        }
        else if(status === 'fetched'){
            return (
                <React.Fragment>
                    { city && country && <City>{city}, {country}</City> }
                    <Condition>
                        { icon && <img src={weather_icon} alt="weather-icon" />}
                        { temperature && <Temp>{temperature.toFixed()}°C</Temp> }
                    </Condition>
                    { description && <p style={{color: '#3aafa9'}}>{description}</p> }
                </React.Fragment>
            )
        }
        else if(status === 'unable'){
            return <p style={{color: 'red', padding: '1rem 0', fontFamily: "'Varela Round', sans-serif", fontSize: '1.2rem'}}>{error}</p>
        }
        else{
            return <p style={{color: 'red', padding: '1rem 0'}}>{error}</p>
        }
        
    }

    return (
        <React.Fragment>
            <Container>
                {renderContent()}
            </Container>
        </React.Fragment>
    )
}

export default Weather;
