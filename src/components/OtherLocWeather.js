import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
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

const Add = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    margin-top: 4%;
    justify-content: center;
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

const OtherLocWeather = ({ show, handleOpen }) => { 
    const [ids, setIds] = useState([]);
    const [data, setData] = useState([]);

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
                    setData(prev => [...prev, result.data]);
                }
            }
        }
        fetchData();
    }, [ids]);

    return (
        <Container>
            <Other>
                <FontAwesomeIcon style={{marginRight: '.6rem',color: '#2b7a78'}} icon={faMapMarkedAlt}></FontAwesomeIcon>
                <P>Other Locations</P>
            </Other>
            <Add>
              <Button onClick={handleOpen}><FontAwesomeIcon style={{fontSize: '1.7rem', color: 'white'}} icon={faPlus}></FontAwesomeIcon></Button>
            </Add>
            {data.length === ids.length ? <SavedLoc blob={data} /> : <AddError>You don't have any saved location. Click above to add.</AddError>}
        </Container>
    )
}

export default OtherLocWeather;
