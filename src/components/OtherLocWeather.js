import React, { Component } from 'react';
import styled from 'styled-components';
import { faMapMarkedAlt, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Styles
//----------------------------------------------------------------------------------//

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

const Add = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    margin-top: 3rem;
    justify-content: center;
`;

//----------------------------------------------------------------------------------//

class OtherLocWeather extends Component {
    render() {
        return (
            <Container>
                <Other>
                    <FontAwesomeIcon style={{marginRight: '.6rem'}} icon={faMapMarkedAlt}></FontAwesomeIcon>
                    <P>Other Locations</P>
                </Other>
                <P style={{color: 'red'}}>Click below to add locations</P>
                <Add>
                    <FontAwesomeIcon style={{fontSize: '1.7rem', color: '#5cc1d1'}} icon={faPlusCircle} size='2x'></FontAwesomeIcon>
                </Add>
            </Container>
        )
    }
}

export default OtherLocWeather;
