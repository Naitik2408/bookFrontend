const DashboardQuotes = () => (
    <div className="col-md-6 col-lg-4 order-2 mb-4">
      <div className="card h-100">
        <div className="card-header d-flex align-items-center justify-content-between">
          <h5 className="card-title m-0 me-2">Quotes</h5>
          <div className="dropdown">
            <button className="btn p-0" type="button" id="transactionID" data-bs-toggle="dropdown">
              <i className="bx bx-dots-vertical-rounded"></i>
            </button>
            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="transactionID">
              <a className="dropdown-item" href="#">Last 28 Days</a>
              <a className="dropdown-item" href="#">Last Month</a>
              <a className="dropdown-item" href="#">Last Year</a>
            </div>
          </div>
        </div>
        <div className="card-body">
          <ul className="p-0 m-0 flex flex-col gap-4">
            <li className="font-semibold italic">
              &quot;A writer is someone for whom writing is more difficult than it is for other people.&quot; – Thomas Mann
            </li>
            <li className="font-semibold italic">
              &quot;The role of a writer is not to say what we all can say, but what we are unable to say.&quot; – Anaïs Nin
            </li>
            <li className="font-semibold italic">
              &quot;There is no greater agony than bearing an untold story inside you.&quot; – Maya Angelou
            </li>
            <li className="font-semibold italic">
              &quot;The scariest moment is always just before you start.&quot; – Stephen King
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
  
  export default DashboardQuotes;