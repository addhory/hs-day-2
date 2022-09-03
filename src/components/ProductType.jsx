import React from 'react';
import { useParams } from 'react-router-dom';

const CONTENT = [
  {
    id: 1,
    imageUrl:
      'https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg',
    name: 'Nasi Padang',
    tag: ['western', 'junk-food'],
  },
  {
    id: 2,
    imageUrl:
      'https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png',
    name: 'Sate',
    tag: ['eastern', 'healthy-food'],
  },
];

const RECOMMENDED_MENU = [
  {
    id: 1,
    imageUrl:
      'https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png',
    name: 'Soto Lamongan',
    tag: ['western', 'junk-food'],
  },
  {
    id: 2,
    imageUrl:
      'https://pesona.travel/media/nasi-kuning-sarapan-khas-nusantara-bermakna-mendalam_144651_1140.jpg',
    name: 'Nasi Kuning',
    tag: ['eastern', 'healthy-food'],
  },
];

const ProductType = () => {
  const { id } = useParams();

  const data = CONTENT.filter((item) => item.id.toString() === id);

  return (
    <div>
      {data.map((item) => {
        return (
          <div
            className='w-[400px] h-fit hover:cursor-pointer hover:shadow-2xl shadow-slate-500'
            onClick={() => {}}
          >
            <div className=''>
              <img src={item?.imageUrl} alt={item?.name} />
            </div>
            <div>
              <h6>{item?.name}</h6>
            </div>
          </div>
        );
      })}
      <h4 className='text-xl font-medium my-4'>Menu Lainnya</h4>
      <div className='flex gap-4 recommended-menu'>
        {RECOMMENDED_MENU.map((item) => {
          return (
            <div
              className='w-[400px] h-fit hover:cursor-pointer hover:shadow-2xl shadow-slate-500'
              onClick={() => {}}
            >
              <div className='h-[200px]'>
                <img className='h-full' src={item?.imageUrl} alt={item?.name} />
              </div>
              <div>
                <h6>{item?.name}</h6>
              </div>
              <div className='flex tags gap-4'>
                {item.tag.map((tag) => {
                  return (
                    <div className='flex p-4 border-cyan-200 border-2'>
                      <p>{tag}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductType;
