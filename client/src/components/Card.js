import React from 'react';
import { useNavigate } from "react-router-dom";




function Card({ truck }) {

  const navigate = useNavigate();

  const navigateToAssignPage = (truck) => {
    navigate(`/assign-truck/${truck._id}`);
  }

  return (

    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 grid-item" style={{ backgroundColor: '#EAF3E7', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
  <img className="br-100 h2 w2 dib" src={truck.image} style={{ height:'200px', width: '250px', marginBottom: '10px' }} />
  <div style={{ textAlign: 'center' }}>
    <h2>{truck.vehicleNumber}</h2>
    <p>{truck.chasisNumber}</p>
    <p>{truck.manufacturer}</p>
    <p>{truck.fuelType}</p>
    <p>{truck.power}</p>
    <p>{truck.noOfStaff}</p>
  </div>
  <button className='btn btn-success btn-lg px-5' onClick={() => navigateToAssignPage(truck)}>SELECT TRUCK</button>
</div>


  );
}

export default Card;