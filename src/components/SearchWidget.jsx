import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchWidget() {
  const [brand, setBrand] = useState('BMW');
  const [seats, setSeats] = useState('4 seater');
  const [model, setModel] = useState('Sports');
  const [minPrice, setMinPrice] = useState('$199');
  const [maxPrice, setMaxPrice] = useState('$499');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const cleanMin = minPrice.replace(/[^0-9]/g, '');
    const cleanMax = maxPrice.replace(/[^0-9]/g, '');
    navigate(`/vehicles?brand=${encodeURIComponent(brand)}&seats=${encodeURIComponent(seats)}&model=${encodeURIComponent(model)}&min=${cleanMin}&max=${cleanMax}`);
  };

  return (
    <div className="search-widget-wrapper">
      <div className="search-widget-card">
        <div className="search-widget-header">
          <h2 className="search-widget-title">Book a Car</h2>
          <p className="search-widget-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          </p>
        </div>

        <form className="search-form" onSubmit={handleSearch}>
          <div className="search-form-grid">
            <div className="form-group">
              <label className="form-label">Select Brand</label>
              <select 
                className="form-control" 
                value={brand} 
                onChange={(e) => setBrand(e.target.value)}
              >
                <option value="BMW">BMW</option>
                <option value="Audi">Audi</option>
                <option value="Mercedes">Mercedes</option>
                <option value="Camper">Camper</option>
                <option value="Volkswagen">Volkswagen</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Number Of Seats</label>
              <select 
                className="form-control" 
                value={seats} 
                onChange={(e) => setSeats(e.target.value)}
              >
                <option value="2 seater">2 seater</option>
                <option value="3 seater">3 seater</option>
                <option value="4 seater">4 seater</option>
                <option value="6 seater">6 seater</option>
                <option value="8 seater">8 seater</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Model</label>
              <select 
                className="form-control" 
                value={model} 
                onChange={(e) => setModel(e.target.value)}
              >
                <option value="Sports">Sports</option>
                <option value="SUV">SUV</option>
                <option value="Camper Van">Camper Van</option>
                <option value="Luxury Sedan">Luxury Sedan</option>
                <option value="Convertible">Convertible</option>
              </select>
            </div>
          </div>

          <div className="search-form-row-2">
            <div className="form-group">
              <label className="form-label">Minimum Price</label>
              <select 
                className="form-control" 
                value={minPrice} 
                onChange={(e) => setMinPrice(e.target.value)}
              >
                <option value="$99">$99</option>
                <option value="$149">$149</option>
                <option value="$199">$199</option>
                <option value="$249">$249</option>
                <option value="$299">$299</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Maximum Price</label>
              <select 
                className="form-control" 
                value={maxPrice} 
                onChange={(e) => setMaxPrice(e.target.value)}
              >
                <option value="$299">$299</option>
                <option value="$399">$399</option>
                <option value="$499">$499</option>
                <option value="$699">$699</option>
                <option value="$999">$999</option>
              </select>
            </div>
            <button type="submit" className="btn btn-search">Search</button>
          </div>
        </form>
      </div>
    </div>
  );
}
