import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24, 
    message:'random message',
  });

  const [name, setName] = useState('peter')
  const [age, setage] = useState(24)
  const [message, setMessage] = useState('random message')


  const changeMessage = () =>{
    // setPerson({...person, message:'Hello World'})
    setMessage('Hello world')

  }
  return (
   <>
    <h3>{name}</h3>
    <h3>{age}</h3>
    <h3>{message}</h3>
    <button className='btn' onClick={changeMessage}>
    change mesage
    </button>
  </>
  )
};

export default UseStateObject;
