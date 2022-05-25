import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiURL = 'https://ironbnb-m3.herokuapp.com/apartments';

function Apartments() {
  const [apartments, setApartments] = useState([]);
  const [fetching, setFetching] = useState(true);

  //Will only run when the component mounts
  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setApartments(response.data);
      console.log(response.data);
      setFetching(false);
    });
  }, []);

  return (
    <div>
      <h2>Apartments for sale</h2>
      {fetching && <p>Fetching data</p>}
      {apartments.map((apt) => {
        return (
          <div key={apt._id}>
            <img src={apt.img} alt="apartment" />
            <p>{apt.title}</p>
            <p>{apt.pricePerDay}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Apartments;
