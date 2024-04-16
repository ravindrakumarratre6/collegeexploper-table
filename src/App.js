import React from 'react';
import CollegeTable from './CollegeTable';
import dummyData from './dummyData.json';

const App = () => {
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Colleges Information</h1>
      <CollegeTable data={dummyData} />
    </div>
  );
};

export default App;
