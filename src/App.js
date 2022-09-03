import { useEffect } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Counters from './components/Counters';
import EmailsForm from './components/EmailsForm';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorComponent from './components/ErrorComponent';
import ProductType from './components/ProductType';
import NotFound from './NotFound';
import HomePage from './pages/HomePage';
import Product from './pages/Product';

const DEFAULT_DATA = {
  id: 'sdax12',
  name: 'Ridho Data',
  content: [
    {
      id: 1,
      imageUrl:
        'https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg',
      name: 'Nasi Padang',
    },
    {
      id: 2,
      imageUrl:
        'https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png',
      name: 'Sate',
    },
  ],
};

function App() {
  return (
    <div className='max-w-5xl mx-auto'>
      <Routes>
        <Route path='/' element={<HomePage />}>
          <Route path='/product' element={<Product data={DEFAULT_DATA} />} />
          <Route path='/product/:id' element={<ProductType />} />
        </Route>
        <Route path='/counters' element={<Counters />} />
        <Route path='/emails' element={<EmailsForm />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
