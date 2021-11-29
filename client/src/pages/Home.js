import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:8000').then((res) => {
      setTodos(res.data);
    });
  }, []);

  console.log(todos);

  return (
    <div>
      <h1> Todo List </h1>
      { todos.map((todo, index) => 
           (
            <div key={index}>
              <h2> {todo.title} </h2>
            </div>
          ))
      }
    </div>
  );
}

export default Home;
