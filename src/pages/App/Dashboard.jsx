import './Dashboard.css';
import { useState, useEffect, useRef } from 'react';
import Header from '../../components/Header';


function Dashboard() {
  let [dashboardList, setDashboardList] = useState([]);
  function fetchList() {
    const configs = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }

    fetch(`http://localhost:8080/dashboard`, configs)
    .then((res)=> res.json())
    .then((json) => {
        setDashboardList(json);
    })
    .catch(console.error)
  }

  function handleDelete(designId) {
    const configs = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
    
    fetch(`http://localhost:8080/design/${designId}`, configs)
    .then((res)=> res.json())
    .then((json) => {
      fetchList()
    })
    .catch(console.error)
  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <Header />
      <div className='dashboard-page'>
        <h1>Dashboard</h1>
        <div className="dashboard-list">
          
          {dashboardList?.map((design) => {
            return (
              <div className="dashboard-item">
                <div className="design-img">
                  <img src={`/icons/${ design.name.replace(/ /g,'').toLowerCase() }-preview.png`} alt={`${ design.name }`} />
                </div>
                <div className="dashboard-item-info">
                  <div className="design-info">
                    <h4>{ design.name }</h4>
                    <p>RN{ design.id }</p>
                  </div>
                  <img onClick={ () => { handleDelete(design.id) } } src="/icons/delete.svg" alt="delete-button" />
                  <a href={`/${design.name.replace(/ /g,'').toLowerCase()}/design/${design.id}`}>Manage</a>
                </div>
              </div>
            )} 
          )}
          
        </div>
      </div>
    </>
  )
}

export default Dashboard;