import React, { useState } from 'react'
import Catalog from './components/Catalog'
import Header from './components/Header'
import Carrinho from './components/Carrinho'

function App() {
  
  const [car, setCar] = useState([]);

  const [activeCar, setActiveCar] = useState(false);

  const addToCarrinho = (produto) => {
    const existingItemIndex = car.findIndex(item => item.id === produto.id);
    if (existingItemIndex !== -1) {
      const updatedCar = [...car];
      updatedCar[existingItemIndex].quantidade++;
      setCar(updatedCar);
    } else {
      setCar([...car, { ...produto, quantidade: 1 }]);
    }
  };

  const removeToCarrinho = (produto) => {
    const existingItemIndex = car.findIndex(item => item.id === produto.id);
    
    if (existingItemIndex !== -1) {
      const updatedCar = [...car];
      updatedCar[existingItemIndex].quantidade--;
      
      if (updatedCar[existingItemIndex].quantidade <= 0) {
        updatedCar.splice(existingItemIndex, 1); // Remove o item do carrinho
      }
      
      setCar(updatedCar);
    }
  };

  const toggleCarrinho = () => {
    setActiveCar(!activeCar);
  };


  return (
    <>
      <Header toggleCarrinho={toggleCarrinho}/>
      <Carrinho car={car} addToCarrinho={addToCarrinho} removeToCarrinho={removeToCarrinho} toggleCarrinho={toggleCarrinho} activeCar={activeCar}/>
      <Catalog addToCarrinho={addToCarrinho}/>
    </>
  )
}

export default App
