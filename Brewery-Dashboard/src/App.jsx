import React, { useState, useEffect } from 'react'
import AppSidebar from './components/AppSidebar';
import './App.css'

const App = () => {
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    // Make a GET request to the Open Brewery DB API
    fetch('https://api.openbrewerydb.org/v1/breweries')
      .then(response => response.json())
      .then(data => setBreweries(data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div className="App">
      <h1>List of Breweries</h1>
      <AppSidebar/>
      <div className="app-row">
        
      </div>
      <div className="app-row"></div>
      <div className='app-page'>
        <div className="Table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>City</th>
                <th>State</th>
              </tr>
            </thead>
            <tbody>
              {breweries.map(brewery => (
                <tr key={brewery.id}>
                  <td>{brewery.name}</td>
                  <td>{brewery.brewery_type}</td>
                  <td>{brewery.city}</td>
                  <td>{brewery.state}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;