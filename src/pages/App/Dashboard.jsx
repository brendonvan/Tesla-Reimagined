import './Dashboard.css';
import Header from '../../components/Header';

function Dashboard() {

  return (
    <>
      <Header />
      <div className='dashboard-page'>
        <h1>Dashboard</h1>
        <div className="dashboard-list">
          <div className="dashboard-item">
            <div className="design-img">
              <img src="/icons/cybertruck-preview.png" alt="/icons/dashboard.svg" />
            </div>
            <div className="dashboard-item-info">
              <div className="design-info">
                <h4>Cybertruck</h4>
                <p>RN11534534</p>
              </div>
              <a href="#">Manage</a>
            </div>
          </div>
          <div className="dashboard-item">
            <div className="design-img">
              <img src="/icons/model3-preview.png" alt="/icons/dashboard.svg" />
            </div>
            <div className="dashboard-item-info">
              <div className="design-info">
                <h4>Model 3</h4>
                <p>RN11534534</p>
              </div>
              <a href="#">Manage</a>
            </div>
          </div>
          <div className="dashboard-item">
            <div className="design-img">
              <img src="/icons/models-preview.png" alt="/icons/dashboard.svg" />
            </div>
            <div className="dashboard-item-info">
              <div className="design-info">
                <h4>Model S</h4>
                <p>RN11534534</p>
              </div>
              <a href="#">Manage</a>
            </div>
          </div>
          <div className="dashboard-item">
            <div className="design-img">
              <img src="/icons/roadster-preview.png" alt="/icons/dashboard.svg" />
            </div>
            <div className="dashboard-item-info">
              <div className="design-info">
                <h4>Roadster</h4>
                <p>RN11534534</p>
              </div>
              <a href="#">Manage</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard;