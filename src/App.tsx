import React from 'react';
import './styles/themes.css';
import './styles/globals.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Timer from './components/Timer/Timer';
import Form from './components/Form/Form';

const App: React.FC = () => {
  return (
    <div className='container'>
      <div className='content'>
        <Header />
        <Navbar />
        <Timer />
        <Form>
          <p>Lorem ipsum dolor sit amet.</p>

          <div>
            <p>Ciclos</p>
            <div>0 0 0 0 0 0 0</div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default App;
