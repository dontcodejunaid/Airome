import React from 'react';

export default function FeaturesBanner() {
  return (
    <section className="features-grid-section">
      <div className="feature-col-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80')" }}>
        <div className="feature-col-content">
          <h3 className="feature-col-title">Expert Drivers</h3>
          <p className="feature-col-desc">
            Voluptas consequuntur dolore nesciunt fugit obcaecati a nisi enim veritatis, doloremque, saepe id possimus tempore
          </p>
        </div>
      </div>

      <div className="feature-col-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80')" }}>
        <div className="feature-col-content">
          <h3 className="feature-col-title">No Hidden Charges</h3>
          <p className="feature-col-desc">
            Voluptas consequuntur dolore nesciunt fugit obcaecati a nisi enim veritatis, doloremque, saepe id possimus tempore
          </p>
        </div>
      </div>

      <div className="feature-col-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')" }}>
        <div className="feature-col-content">
          <h3 className="feature-col-title">Friendly Behavior</h3>
          <p className="feature-col-desc">
            Voluptas consequuntur dolore nesciunt fugit obcaecati a nisi enim veritatis, doloremque, saepe id possimus tempore
          </p>
        </div>
      </div>
    </section>
  );
}
