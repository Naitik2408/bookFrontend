const DashboardBooks = ({ books, orders }) => (
    <div className="row px-4">
      <div className="col-md-6 col-lg-4 col-xl-4 order-0 mb-4">
        <div className="card h-100">
          <div className="card-header d-flex align-items-center justify-content-between pb-0">
            <div className="card-title mb-0">
              <h5 className="m-0 me-2">Top Books</h5>
              <small className="text-muted">42.82k Total Sales</small>
            </div>
            <div className="dropdown">
              <button className="btn p-0" type="button" id="orederStatistics" data-bs-toggle="dropdown">
                <i className="bx bx-dots-vertical-rounded"></i>
              </button>
              <div className="dropdown-menu dropdown-menu-end" aria-labelledby="orederStatistics">
                <a className="dropdown-item" href="#">Select All</a>
                <a className="dropdown-item" href="#">Refresh</a>
                <a className="dropdown-item" href="#">Share</a>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex flex-column align-items-center gap-1">
                <h2 className="mb-2">{orders.totalOrders}</h2>
                <span>Total Orders</span>
              </div>
              <div id="orderStatisticsChart"></div>
            </div>
            <ul className="p-0 m-0">
              {books.map((book, index) => (
                <li key={index} className="d-flex mb-4 pb-1">
                  <div className="avatar flex-shrink-0 me-3">
                    <span className="avatar-initial rounded bg-label-primary">
                      <i className="bx bx-mobile-alt"></i>
                    </span>
                  </div>
                  <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                    <div className="me-2">
                      <h6 className="mb-0">{book.bookName}</h6>
                      <small className="text-muted">{book.quantityLeft}</small>
                    </div>
                    <div className="user-progress">
                      <small className="fw-medium">{book.mrp}</small>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
  
  export default DashboardBooks;