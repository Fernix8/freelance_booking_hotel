import React from 'react';

export default function RoomsPage() {
  return (
    <div className="container-lg bg-white shadow-lg rounded-lg min-vh-100">
      <header className="p-4 bg-primary text-white rounded-top">
        <h1 className="h3 font-weight-bold">Hotel Booking - Room Listings</h1>
      </header>
      <main className="d-flex gap-4 p-4">
        <aside className="col-md-3 bg-light p-3 rounded">
          <h2 className="h5 font-weight-medium text-dark mb-4">Filters</h2>
          <div className="mb-4">
            <label className="form-label text-dark">Room Type</label>
            <select className="form-select">
              <option value="">All Types</option>
              <option value="deluxe">Deluxe Room</option>
              <option value="suite">Suite Room</option>
              <option value="standard">Standard Room</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="form-label text-dark">Price Range</label>
            <input type="range" min="50" max="500" step="10" className="form-range w-100" />
            <div className="d-flex justify-content-between text-muted small">
              <span>$50</span>
              <span>$500</span>
            </div>
          </div>
          <div className="mb-4">
            <label className="form-label text-dark">Amenities</label>
            <div className="form-check">
              <input type="checkbox" id="wifi" className="form-check-input" />
              <label htmlFor="wifi" className="form-check-label text-dark">
                Free Wi-Fi
              </label>
            </div>
            <div className="form-check">
              <input type="checkbox" id="pool" className="form-check-input" />
              <label htmlFor="pool" className="form-check-label text-dark">
                Pool
              </label>
            </div>
            <div className="form-check">
              <input type="checkbox" id="parking" className="form-check-input" />
              <label htmlFor="parking" className="form-check-label text-dark">
                Free Parking
              </label>
            </div>
          </div>
          <button className="btn btn-primary w-100">Apply Filters</button>
        </aside>
        <div className="flex-1">
          <div className="mb-4 d-flex gap-4">
            <input
              type="text"
              placeholder="Search by room type..."
              className="form-control"
            />
            <select className="form-select">
              <option value="">Filter by Price</option>
              <option value="low-high">Low to High</option>
              <option value="high-low">High to Low</option>
            </select>
            <button className="btn btn-primary">Search</button>
          </div>
          <section className="mb-4">
            <h2 className="h5 font-weight-medium text-dark mb-4">Available Rooms</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <article className="col">
                <div className="card h-100">
                  <img
                    src="https://tools-api.webcrumbs.org/image-placeholder/360/240/hotel,room/1"
                    alt="Room 1"
                    className="card-img-top rounded"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Deluxe Room</h5>
                    <p className="card-text">
                      A spacious room with all modern amenities and a beautiful view.
                    </p>
                    <p className="card-text font-weight-bold">$120/night</p>
                  </div>
                </div>
              </article>
              <article className="col">
                <div className="card h-100">
                  <img
                    src="https://tools-api.webcrumbs.org/image-placeholder/360/240/hotel,room/2"
                    alt="Room 2"
                    className="card-img-top rounded"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Suite Room</h5>
                    <p className="card-text">
                      A luxurious suite with premium facilities for a memorable stay.
                    </p>
                    <p className="card-text font-weight-bold">$200/night</p>
                  </div>
                </div>
              </article>
              <article className="col">
                <div className="card h-100">
                  <img
                    src="https://tools-api.webcrumbs.org/image-placeholder/360/240/hotel,room/3"
                    alt="Room 3"
                    className="card-img-top rounded"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Standard Room</h5>
                    <p className="card-text">
                      A comfortable room designed for budget-conscious travelers.
                    </p>
                    <p className="card-text font-weight-bold">$80/night</p>
                  </div>
                </div>
              </article>
            </div>
          </section>
          <section>
            <h2 className="h5 font-weight-medium text-dark mb-4">Why Choose Us?</h2>
            <div className="d-flex gap-4">
              <div className="col bg-light p-4 text-center rounded">
                <span className="material-symbols-outlined text-primary display-4 mb-2">
                  star
                </span>
                <h3 className="h5 font-weight-medium text-dark">Top-Rated Hotels</h3>
                <p className="text-muted">
                  We partner with the best hotels in the industry for your satisfaction.
                </p>
              </div>
              <div className="col bg-light p-4 text-center rounded">
                <span className="material-symbols-outlined text-primary display-4 mb-2">
                  verified
                </span>
                <h3 className="h5 font-weight-medium text-dark">Secure Booking</h3>
                <p className="text-muted">
                  Enjoy a seamless and secure experience booking your stays with us.
                </p>
              </div>
              <div className="col bg-light p-4 text-center rounded">
                <span className="material-symbols-outlined text-primary display-4 mb-2">
                  support_agent
                </span>
                <h3 className="h5 font-weight-medium text-dark">24/7 Support</h3>
                <p className="text-muted">
                  Our support team is available round the clock to assist you.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
