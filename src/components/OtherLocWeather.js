import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from './Modal';

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

const AddError = styled(P)`
    color: red;
    font-size: 1rem;
`;

//----------------------------------------------------------------------------------//

const OtherLocWeather = () => {

    return (
        <Container>
            <Other>
                <FontAwesomeIcon style={{marginRight: '.6rem'}} icon={faMapMarkedAlt}></FontAwesomeIcon>
                <P>Other Locations</P>
            </Other>
            <AddError>Click below to add locations</AddError>
            
        </Container>
    )
}

export default OtherLocWeather;
