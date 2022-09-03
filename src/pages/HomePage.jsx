import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

const HomePage = () => {
  const navigate = useNavigate();

  const goToProduct = () => {
    navigate('/product');
  };

  return (
    <>
      <NavBar />
      <div className='mt-1 pt-6'>
        <Outlet />
      </div>
      <button onClick={() => goToProduct()}>Go To Product</button>
    </>
  );
};

export default HomePage;
