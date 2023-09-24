import React from 'react';
import Card from './Card';
import '../index.css';

const gridContainer = {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    padding: '10px'
  };
  

function SearchList({ filteredTrucks }) {
  const filtered = filteredTrucks.map(truck =>  <Card key={truck.id} truck={truck} />); 
  
  return (
    <div style={gridContainer}>
      {filtered}
    </div>
  );
}

export default SearchList;