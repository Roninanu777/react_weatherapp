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
    width: 100%;
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
    @media (max-width: 450px){
        font-size: .9rem;
    }
`;

const AddError = styled(P)`
    color: #ed4040;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 1.5rem;
    text-align: center;
    @media (max-width: 450px){
        font-size: .7rem;
    }
`;

const Add = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    margin-top: 5%;
    justify-content: center;
`;

const Button = styled.button`
    border: none;
    padding: 7px 10px;
    border-radius: 50%;
    background-color: white;
    outline: none;
    font-size: 2rem;
    cursor: pointer;
    @media (max-width: 450px){
        font-size: 1.7rem;
    }
`;

//----------------------------------------------------------------------------------//

const OtherLocWeather = ({ show, handleOpen }) => { 
    const [ids, setIds] = useState([]);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(show === false){
            setIds(() => localStorage.getItem('ids') ? [...JSON.parse(localStorage.getItem('ids'))] : []);
        }
    }, [show]);

    useEffect(() => {
        const fetchData = async () => {
            if(ids.length > 0){
                setData([]);
                setLoading(true)
                for(let i = 0; i < ids.length; i++){
                    
                    const result = await axios(`${process.env.REACT_APP_BASEURL}?id=${ids[i]}&appid=${process.env.REACT_APP_API_KEY}`);
                    setData(prev => [...prev, result.data]);
                }
                setLoading(false);
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
            
            {data.length > 0 ? <SavedLoc loading={loading} blob={data} /> : <AddError>You don't have any saved location. Click below to add.</AddError>}
            <Add>
              <Button onClick={handleOpen}><FontAwesomeIcon style={{color: '#2b7a78'}} icon={faPlus}></FontAwesomeIcon></Button>
            </Add>
        </Container>
    )
}

export default OtherLocWeather;
