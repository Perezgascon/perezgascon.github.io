import { useState, useEffect } from 'react';

import './App.css';

import mockAPI from './api/mockapi';

import Table from './components/Table';
import AddForm from './components/AddForm';

import YesOrNo from './components/YesOrNo';

import GameOfThrones from './components/GameOfThrones';

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

  const apiPost = async (newProduct) => {
    try {
      const response = await mockAPI.post('/product', newProduct);
      console.log("POST status:", response.status);
      console.log("POST data:", response.data);
      apiGet();
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    apiGet();
  }, []);

  return (
    <div className="App">
      {/* <h1>Product List</h1>
      {/* <button onClick={apiGet}>Load Products</button> 
      {products && <Table list={products} />}
  <AddForm handlerAddItem={apiPost} /> */}
      {/* <YesOrNo /> */}
      <YesOrNo />
    </div>
  );
}

export default App;
