import { useState, useEffect } from 'react';

import './App.css';

import mockAPI from './api/mockapi';

import Table from './components/Table';

function App() {
  const [products, setProducts] = useState([]);

  function apiGet() {
    mockAPI.get('/product')
      .then((response) => {
        console.log("GET status:", response.status);
        console.log("GET data:", response.data);
        setProducts(response.data);
      })
      .catch((error) => console.log(error.message));
  }

  useEffect(() => {
    apiGet();
  }, []);

  return (
    <div className="App">
      <h1>Product List</h1>
      {/* <button onClick={apiGet}>Load Products</button> */}
      {products && <Table list={products} />}

    </div>
  );
}

export default App;
