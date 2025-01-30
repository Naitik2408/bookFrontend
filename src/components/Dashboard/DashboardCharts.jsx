import { useEffect } from "react";
import PropTypes from 'prop-types';
import ApexCharts from 'apexcharts'; // Now used in useEffect

const DashboardCharts = ({ charts }) => {
  useEffect(() => {
    if (charts) {
      // Example chart initialization (use your actual chart config)
      const chart = new ApexCharts(
        document.querySelector("#totalRevenueChart"), 
        charts.totalRevenue
      );
      chart.render();

      return () => chart.destroy(); // Cleanup
    }
  }, [charts]);

  return (
    <div className="col-12 col-lg-8 order-2 order-md-3 order-lg-2 mb-4">
      <div className="card">
      <div className="row row-bordered g-0">
          <div className="col-md-8">
            <h5 className="card-header m-0 me-2 pb-3">Total Revenue</h5>
            <div id="totalRevenueChart" className="px-2"></div>
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <div className="text-center">
                <div className="dropdown">
                  <div className="font-semibold">2025</div>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="#">2021</a>
                    <a className="dropdown-item" href="#">2020</a>
                    <a className="dropdown-item" href="#">2019</a>
                  </div>
                </div>
              </div>
            </div>
            <div id="growthChart"></div>
            <div className="text-center fw-medium pt-3 mb-2">Author Projected Growth</div>
          </div>
        </div>
      </div>
    </div>
  );
};

DashboardCharts.propTypes = {
  charts: PropTypes.shape({
    totalRevenue: PropTypes.object.isRequired,
    growth: PropTypes.object.isRequired,
    profileReport: PropTypes.object.isRequired
  }).isRequired
};



export default DashboardCharts;