import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VehicleCard from '../components/VehicleCard';
import BookingModal from '../components/BookingModal';
import NewsletterCard from '../components/NewsletterCard';
import { storageService } from '../services/storageService';
import '../styles/pages.css';

export default function VehiclesPage() {
  const [searchParams] = useSearchParams();
  const [vehicles, setVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  // Filters state initialized with search params if present
  const [seats, setSeats] = useState(searchParams.get('seats') || '');
  const [model, setModel] = useState(searchParams.get('model') || searchParams.get('brand') || '');
  const [minPrice, setMinPrice] = useState(searchParams.get('min') || '');
  const [maxPrice, setMaxPrice] = useState(searchParams.get('max') || '');

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const data = storageService.getVehicles();
    setVehicles(data);
    applyFilter(data, seats, model, minPrice, maxPrice);
  }, []);

  const applyFilter = (sourceList, s, m, minP, maxP) => {
    let result = [...sourceList];

    if (s && s !== '') {
      result = result.filter(v => (v.seats || '').toLowerCase().includes(s.toLowerCase()));
    }
    if (m && m !== '') {
      result = result.filter(v => 
        (v.model || '').toLowerCase().includes(m.toLowerCase()) || 
        (v.brand || '').toLowerCase().includes(m.toLowerCase()) ||
        (v.type || '').toLowerCase().includes(m.toLowerCase())
      );
    }
    if (minP && minP !== '') {
      result = result.filter(v => Number(v.price) >= Number(minP));
    }
    if (maxP && maxP !== '') {
      result = result.filter(v => Number(v.price) <= Number(maxP));
    }

    setFilteredVehicles(result);
    setCurrentPage(1);
  };

  const handleSeatsChange = (val) => {
    setSeats(val);
    applyFilter(vehicles, val, model, minPrice, maxPrice);
  };

  const handleModelChange = (val) => {
    setModel(val);
    applyFilter(vehicles, seats, val, minPrice, maxPrice);
  };

  const handleMinPriceChange = (val) => {
    setMinPrice(val);
    applyFilter(vehicles, seats, model, val, maxPrice);
  };

  const handleMaxPriceChange = (val) => {
    setMaxPrice(val);
    applyFilter(vehicles, seats, model, minPrice, val);
  };

  const handleFilterSubmit = (e) => {
    e?.preventDefault();
    applyFilter(vehicles, seats, model, minPrice, maxPrice);
  };

  const handleReset = () => {
    setSeats('');
    setModel('');
    setMinPrice('');
    setMaxPrice('');
    setFilteredVehicles(vehicles);
    setCurrentPage(1);
  };

  // Pagination calculation
  const totalPages = Math.ceil(filteredVehicles.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentVehicles = filteredVehicles.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <Navbar />

      {/* Page Header Banner */}
      <section className="page-header-banner">
        <div className="container">
          <h1 className="page-title">All Vehicles</h1>
          <div className="breadcrumb-nav">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">All Vehicles</span>
          </div>
        </div>
      </section>

      {/* Vehicles Catalog Main Section */}
      <section className="catalog-section">
        <div className="container">
          <div className="catalog-layout">
            
            {/* Filter Sidebar */}
            <aside className="filter-sidebar">
              <h2 className="filter-sidebar-title">Filter</h2>

              <form onSubmit={handleFilterSubmit}>
                <div className="filter-group">
                  <label className="filter-label">Number Of Seats</label>
                  <select 
                    className="filter-select" 
                    value={seats} 
                    onChange={(e) => handleSeatsChange(e.target.value)}
                  >
                    <option value="">All Seats</option>
                    <option value="2">2 seater</option>
                    <option value="4">4 seater</option>
                    <option value="5">5 seater</option>
                    <option value="6">6 seater</option>
                  </select>
                </div>

                <div className="filter-group">
                  <label className="filter-label">Model / Brand</label>
                  <select 
                    className="filter-select" 
                    value={model} 
                    onChange={(e) => handleModelChange(e.target.value)}
                  >
                    <option value="">All Models</option>
                    <option value="Volkswagen">Volkswagen</option>
                    <option value="BMW">BMW</option>
                    <option value="Audi">Audi</option>
                    <option value="Mercedes">Mercedes-Benz</option>
                    <option value="Porsche">Porsche</option>
                    <option value="Camper">Camper Van</option>
                  </select>
                </div>

                <div className="filter-group">
                  <div className="filter-price-row">
                    <div>
                      <label className="filter-label">Min Price ($)</label>
                      <input 
                        type="number" 
                        className="filter-input" 
                        placeholder="Min" 
                        value={minPrice}
                        onChange={(e) => handleMinPriceChange(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="filter-label">Max Price ($)</label>
                      <input 
                        type="number" 
                        className="filter-input" 
                        placeholder="Max" 
                        value={maxPrice}
                        onChange={(e) => handleMaxPriceChange(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="filter-actions-group">
                  <button type="submit" className="btn btn-filter-submit">
                    Search Vehicle
                  </button>
                  <button type="button" className="btn btn-filter-reset" onClick={handleReset}>
                    Reset Filters
                  </button>
                </div>
              </form>
            </aside>

            {/* Catalog Grid Area */}
            <div className="catalog-grid-area">
              <div className="catalog-status-bar">
                <p className="catalog-count-text">
                  Showing <span>{currentVehicles.length}</span> of <span>{filteredVehicles.length}</span> results
                </p>
              </div>

              {filteredVehicles.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 20px', color: '#9ca3af' }}>
                  <h3>No vehicles found matching your criteria.</h3>
                  <p style={{ marginTop: '10px' }}>Try resetting or modifying your filters.</p>
                </div>
              ) : (
                <div className="vehicles-grid">
                  {currentVehicles.map(vehicle => (
                    <VehicleCard 
                      key={vehicle.id} 
                      vehicle={vehicle} 
                      onBookNow={(v) => setSelectedVehicle(v)} 
                    />
                  ))}
                </div>
              )}

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="pagination-wrapper">
                  <button 
                    className="page-btn"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  >
                    &laquo;
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      className={`page-btn ${currentPage === page ? 'active' : ''}`}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </button>
                  ))}
                  <button 
                    className="page-btn"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  >
                    &raquo;
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      <NewsletterCard />
      <Footer />

      {selectedVehicle && (
        <BookingModal 
          vehicle={selectedVehicle} 
          onClose={() => setSelectedVehicle(null)} 
        />
      )}
    </>
  );
}
