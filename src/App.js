import React, {useState} from 'react'
import Form from './Component/Form';
import Display from './Component/Display/Display';

function App() {
 const [order, setOrder] = useState([])

 const addOrder=(id,price,name,table)=>{
  setOrder({
    id:id,
    item:name,
    amount:price,
    catagory:table
  })
  
 }
  return (
    <div>
      <Form addorder={addOrder}/>
      <Display list={order}/>
    </div>
  );
}

export default App;
