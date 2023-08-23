import React, { useState } from 'react';
import Navbar from './Navbar';
import ProductList from './ProductList';
import Footer from './Footer';
import AddItem from './AddItem';

function App() {
  const productList = [
    {
      price: 99999999,
      name: 'Iphone X Max',
      quantity: 0,
    },
    {
      price: 999,
      name: 'Samsung Galaxy',
      quantity: 0,
    },
    {
      price: 99990,
      name: 'Oppo Reno 4',
      quantity: 0,
    }
  ];

  const [prod, setproductList] = useState(productList);
  const [totalAmount , setToalAmount] = useState(0);


  const incrementQuantity = (index) => {
    let newProductList = [...prod];
    let newTotalAmount=totalAmount;
    newProductList[index].quantity++;
    newTotalAmount+=newProductList[index].price;
    setproductList(newProductList);
    setToalAmount(newTotalAmount);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...prod];
    let newTotalAmount=totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount-=newProductList[index].price;
    } else {
      newProductList[index].quantity = 0;
    }
    setproductList(newProductList);
    setToalAmount(newTotalAmount);
  };

  const resetQuantity=(totalAmount)=>{
    let newProductList = [...productList];
    newProductList.map((products)=>{
      products.quantity=0;
    })
    setproductList(newProductList);
    let amount=totalAmount;
    amount=0;
    setToalAmount(amount);
    
  }

  const removeItem=(index)=>{
    let amount=totalAmount;
    let newProductList = [...prod];
    amount-=newProductList[index].quantity*newProductList[index].price;
    newProductList.splice(index,1);
    setproductList(newProductList);
    setToalAmount(amount);
  }

  const addItem=(name,price)=>{
    let newProductList = [...prod];
    newProductList.push({
      name:name,
      price:price,
      quantity:0
    })
    setproductList(newProductList);
  }

  return (
    <>
      <Navbar />
      <main className='container mt-5'>
       <AddItem addItem={addItem} />
        <ProductList
          productList={prod}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity ={resetQuantity}/>
    </>
  );
}

export default App;
