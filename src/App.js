import React from 'react';
import Button from './components/Button';
import Card from './components/Card';

function App() {
  return (
    <div className="flex flex-col">
      <p className="m-8 text-yellow-600 self-center">Welcome to Iraguha Digital Services</p>
      <Card />
      <div className="self-center mt-8">
        <Button />
      </div>
    </div>
  );
}

export default App;
