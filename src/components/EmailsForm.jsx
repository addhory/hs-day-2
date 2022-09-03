import React, { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const EmailsForm = () => {
  const [isEmailValid, setIsEmailValid] = useState(false);

  const inputEmailRef = useRef();

  const submitEmailHandler = () => {
    if (isEmailValid === false) {
      inputEmailRef.current.focus();
      inputEmailRef.current.classList.add('border-red-500');
    }
  };

  const handlerInput = (e) => {
    if (e.target.value.includes('@')) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  useEffect(() => {
    inputEmailRef.current.classList.remove('border-red-500');
  }, [isEmailValid]);

  return (
    <div className='pt-6'>
      <input
        name='email'
        placeholder='input your email'
        className='border-2'
        onChange={(e) => handlerInput(e)}
        ref={inputEmailRef}
      />
      <button onClick={submitEmailHandler}>Submit Email</button>
    </div>
  );
};

export default EmailsForm;
