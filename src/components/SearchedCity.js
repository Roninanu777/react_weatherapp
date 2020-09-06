import React, {useState} from  'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: white;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    cursor: pointer;
    padding: 2rem;
    margin-top: 2rem;
    transition: all 0.2s ease;
    border-radius: 5px;
    box-shadow: 0 .1rem 1rem 5px rgba(0,0,0,0.07);
    &:hover{
        box-shadow: 0 .1rem 1rem 5px rgba(0,0,0,0.16);
        transform: translateY(-3px);
    }
`;
let ids = [];
const SearchedCity = (props) => {
    

    let storeId = () => {
        let exists = false;
        if(ids.length > 0){
            for(let i = 0; i < ids.length; i++){
                if(ids[i] === props.cityId){
                    exists = true;
                    break;
                }
            }
            if(!exists){
                ids.push(props.cityId);
                localStorage.setItem('ids', JSON.stringify(ids));
            }
            props.close();
        }
        else{
            ids.push(props.cityId);
            localStorage.setItem('ids', JSON.stringify(ids));
            props.close();
        }
    } 

    return (
        <Container onClick={storeId}>
            {props.children}
        </Container>      
    )
}

export default SearchedCity
