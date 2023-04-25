import React, {useState} from 'react'
import Form from './Component/Form';
import Display from './Component/Display/Display';

function App() {
 const [order, setOrder] = useState([])

 const addOrder=(id,price,name,table)=>{
  const neworder = {
    id:id,
    item:name,
    amount:price,
    catagory:table
  }
  const store = JSON.stringify(neworder)
  localStorage.setItem(id,store)
  setOrder([...order,neworder])
 }

 const deleteorder=(orderId)=>{
  localStorage.removeItem(orderId)
  setOrder(prevorder =>{
    const updatedOrder = prevorder.filter(order => order.id!==orderId)
    return updatedOrder
  }

  )
 }
  return (
    <div>
      <Form addorder={addOrder}/>
      <Display list={order} onDelete={deleteorder}/>
    </div>
  );
}

export default App;
