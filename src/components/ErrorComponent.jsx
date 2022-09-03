import React, { useEffect } from 'react';

const ErrorComponent = () => {
  useEffect(() => {
    throw new Error('This is error Message');
  }, []);
  return <div>ErrorComponent</div>;
};

export default ErrorComponent;
