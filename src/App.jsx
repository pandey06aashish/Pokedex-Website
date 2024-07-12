import React from 'react';
import './App.css';
import CustomRoutes from './routes/CustomRoutes';

const App = () => {
  return (
    <div className="app-container">
      <div className="background-animation"></div>
      <CustomRoutes />
    </div>
  );
}

export default App;
