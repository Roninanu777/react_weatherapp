import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
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
    color: #ed4040;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 1.5rem;
    text-align: center;
`;

const SavedCity = styled.div`
    width: 100%;
    padding: 0 1rem 1rem 1rem;
    overflow-x: scroll;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
        width: 0em;
    }
`;

//----------------------------------------------------------------------------------//

const OtherLocWeather = ({ show }) => { 
    const [ids, setIds] = useState([]);
    const [data, setData] = useState(null);

    useEffect(() => {
        if(show === false){
            setIds(() => localStorage.getItem('ids') ? [...JSON.parse(localStorage.getItem('ids'))] : []);
        }
    }, [show]);

    useEffect(() => {
        const fetchData = async () => {
            if(ids.length > 0){
                setData([]);
                for(let i = 0; i < ids.length; i++){
                    const result = await axios(`${process.env.REACT_APP_BASEURL}?id=${ids[i]}&appid=${process.env.REACT_APP_API_KEY}`);
                    setData(prev => [...prev, result]);
                }
            }
        }
        fetchData();
    }, [ids]);

    useEffect(() => {

    })

    return (
        <Container>
            <Other>
                <FontAwesomeIcon style={{marginRight: '.6rem',color: '#2b7a78'}} icon={faMapMarkedAlt}></FontAwesomeIcon>
                <P>Other Locations</P>
            </Other>
            {data ? <SavedLoc /> : <AddError>You don't have any saved location. Click below to add.</AddError>}
        </Container>
    )
}

export default OtherLocWeather;
