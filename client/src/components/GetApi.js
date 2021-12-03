import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GetApi.css';

const GetApi = () => {
  const [getData, setGetData] = useState([]);

  useEffect(() => {
    axios.get(`https://ejournals.herokuapp.com/`).then((res) => {
      const response = res.data.data;
      setGetData(response);
    });
  }, []);

  return (
    <div className='container'>
      { getData.map((item, index) => 
          (
            <div className='card' key={index}>
              <h2 className='title'> {item.title} </h2>
              <h6 className='author'>Author: {item.author}</h6>
              <p className='abstract'>{item.abstract}</p>
              <a href={item.content}>Get link</a>
            </div>
          ))
      }
    </div>
  );
}

export default GetApi;