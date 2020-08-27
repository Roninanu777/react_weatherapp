import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { faMapMarkedAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
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

const Add = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    margin-top: 3rem;
    justify-content: center;
`;

const AddError = styled(P)`
    color: red;
    font-size: 1rem;
`;

const Button = styled.button`
    border: none;
    padding: 7px 10px;
    border-radius: 50%;
    background-color: #2b7a78;
    outline: none;
    cursor: pointer;
`;

//----------------------------------------------------------------------------------//

const OtherLocWeather = () => {
    let [clicked, setClicked] = useState(false);

    
    return (
        <Container>
            <Other>
                <FontAwesomeIcon style={{marginRight: '.6rem'}} icon={faMapMarkedAlt}></FontAwesomeIcon>
                <P>Other Locations</P>
            </Other>
            { clicked ? <Modal /> : <AddError>Click below to add locations</AddError>}
            <Add>
                <Button onClick={() => setClicked(!clicked)}><FontAwesomeIcon style={{fontSize: '1.7rem', color: 'white'}} icon={faPlus}></FontAwesomeIcon></Button>
            </Add>
        </Container>
    )
}

export default OtherLocWeather;
