import React, { Component } from 'react';
import styled from 'styled-components';
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2.5rem;
`;

const Other = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
`;

const P = styled.p`
    font-size: 1.1rem;
    font-family: 'Varela Round', sans-serif;
`;

class OtherLocWeather extends Component {
    render() {
        return (
            <Container>
                <Other>
                    <FontAwesomeIcon style={{marginRight: '.6rem'}} icon={faMapMarkedAlt}></FontAwesomeIcon>
                    <P>Other Locations</P>
                </Other>
            </Container>
        )
    }
}

export default OtherLocWeather;
