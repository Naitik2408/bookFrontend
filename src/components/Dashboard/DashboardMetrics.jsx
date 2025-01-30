const DashboardMetrics = ({ metrics }) => (
    <div className="col-lg-4 col-md-4 order-1">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-6 mb-4">
          <div className="card">
            <div className="card-body">
              <div className="card-title d-flex align-items-start justify-content-between">
                <div className="avatar flex-shrink-0">
                  <img
                    src="/assets/img/icons/unicons/chart-success.png"
                    alt="chart success"
                    className="rounded"
                  />
                </div>
                <div className="dropdown">
                  <button className="btn p-0" type="button" id="cardOpt3" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded"></i>
                  </button>
                  <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt3">
                    <a className="dropdown-item" href="#">View More</a>
                    <a className="dropdown-item" href="#">Delete</a>
                  </div>
                </div>
              </div>
              <span className="fw-medium d-block mb-1">Total Profit</span>
              <h3 className="card-title mb-2">${metrics.profit.value}</h3>
            </div>
          </div>
        </div>
        {/* Repeat for other metrics */}
      </div>
    </div>
  );
  
  export default DashboardMetrics;