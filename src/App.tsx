import React from 'react';
import './app.css';
import Button from './components/Button';
import TableRow from './components/Table/TableRow';

function App() {
  console.log('Log a debug level message.');
  console.warn('Log a warn level message.');
  console.error('Log an error level message.');
  return (
    <div className='app-wrapper'>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>

      {/* <button className='px-4 py-2 bg-blue-500 rounded-xl hover:bg-blue-400'>
        This is Primary Button
      </button>

      <button className='px-4 py-2 bg-yellow-400 rounded-xl hover:bg-yellow-300'>
        This is Secondary Button
      </button> */}
      {/* <div className='flex flex-row gap-4 py-4 items-center'>
        <h2 className='text-xl font-bold underline'>Button Type {'-->'}</h2>

        <Button id='button-1'>This is Primary</Button>
        <Button id='button-1' variant='secondary'>
          This is Secondary
        </Button>
      </div> */}

      <table className='table-auto'>
        <thead>
          <TableRow>
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </TableRow>
          <TableRow>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </TableRow>
          <TableRow>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </TableRow>
        </tbody>
      </table>
    </div>
  );
}

export default App;
