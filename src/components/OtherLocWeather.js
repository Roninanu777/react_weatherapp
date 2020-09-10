import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SavedLoc from './SavedLoc';

// Styles
//----------------------------------------------------------------------------------//

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const Other = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
`;

const P = styled.p`
    font-size: 1.1rem;
    font-family: 'Varela Round', sans-serif;
    font-weight: bold;
    color: #4d4d4d;
`;

const AddError = styled(P)`
    color: red;
    font-size: 1rem;
`;

const SavedCity = styled.div`
    width: 100%;
    height: 30vh;
    padding: 0 1rem 1rem 1rem;
    overflow-x: scroll;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
        width: 0em;
    }
`;

//----------------------------------------------------------------------------------//

const OtherLocWeather = () => {
    

    return (
        <Container>
            <Other>
                <FontAwesomeIcon style={{marginRight: '.6rem',color: '#2b7a78'}} icon={faMapMarkedAlt}></FontAwesomeIcon>
                <P>Other Locations</P>
            </Other>
            <SavedCity>
                <SavedLoc />
            </SavedCity>
        </Container>
    )
}

export default OtherLocWeather;
