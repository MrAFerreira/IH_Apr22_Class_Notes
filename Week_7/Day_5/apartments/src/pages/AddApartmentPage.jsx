import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddApartmentPage() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(1);

  const navigate = useNavigate();

  const handleTitle = (e) => setTitle(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { title, pricePerDay: price };

    axios.post('https://ironbnb-m3.herokuapp.com/apartments', body).then(() => {
      setTitle('');
      setPrice(1);
      navigate('/');
    });
  };

  return (
    <div className="AddApartmentPage">
      <h3>Add New Apartment</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" value={title} onChange={handleTitle} />

        <label htmlFor="price">Price</label>
        <input type="number" name="price" value={price} onChange={handlePrice} />

        <button type="submit">Create apartment</button>
      </form>
    </div>
  );
}

export default AddApartmentPage;
