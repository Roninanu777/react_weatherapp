import React, {useEffect, useState} from  'react';
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
const SearchedCity = (props) => {
    const [storedId, setId] = useLocalStorage('ids', []);

    let handleId = () => {
        let ids = JSON.parse(localStorage.getItem('ids')) || [];
        setId([...ids, props.cityId]);
        props.close();
    }

    return (
        <Container onClick={handleId}>
            {props.children}
        </Container>
    )
}


const useLocalStorage = (key, initialValue) => {
    const [storedId, setStoredValue] = useState(() => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (err) {
        console.error(err);
        return initialValue;
      }
    });
  
    const setValue = value => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedId) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (err) {
        console.error(err);
      }
    };
  
    return [storedId, setValue];
};

export default SearchedCity;