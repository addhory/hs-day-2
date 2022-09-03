import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = (props) => {
  const { data } = props;
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className='flex flex-row gap-10'>
      {data?.content.map((item) => {
        return (
          <div
            className='w-[400px] h-fit hover:cursor-pointer hover:shadow-2xl shadow-slate-500'
            onClick={() => handleClick(item?.id)}
          >
            <div className='h-64'>
              <img className='h-full' src={item?.imageUrl} alt={item?.name} />
            </div>
            <div>
              <h6>{item?.name}</h6>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
