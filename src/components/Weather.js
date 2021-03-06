import React from 'react';
import styled from 'styled-components';

// Styles
//-------------------------------------------------------------------------------------------------------

const Container = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    cursor: pointer;
    padding: 3% 6%;
    transition: all 0.2s ease;
    border-radius: 5px;
    box-shadow: 0 .1rem 1rem 5px rgba(0,0,0,0.07);
    &:hover{
        box-shadow: 0 .1rem 1rem 5px rgba(0,0,0,0.16);
        transform: translateY(-3px);
    }
    @media (max-width: 760px){
        width: 90%;
        margin-top: 3%;
    }
`;

const Condition = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 1.7rem 0;
    justify-content: space-around;
    @media (max-width: 760px){
        justify-content: space-between;
        margin: 1rem 0;
    }
`;

const Temp = styled.p`
    font-size: 3.8rem;
    color: #2b7a78;
    @media (max-width: 760px){
        font-size: 3rem;
    }
`;

const City = styled.p`
    font-size: 1.3rem;
    margin-bottom: 1rem;
    @media (max-width: 760px){
        font-size: 1.1rem;
        margin-bottom: .5;
    }
`;

const P = styled.p`
    color: red;
    padding: 1rem 0;
    font-family: 'Varela Round', sans-serif;
    font-size: 1rem
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
                    { description && <p style={{color: '#2b7a78'}}>{description}</p> }
                </React.Fragment>
            )
        }
        else if(status === 'unable'){
            return <P>{error}</P>
        }
        else{
            return <P>{error}</P>
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
