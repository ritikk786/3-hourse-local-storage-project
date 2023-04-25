import React from 'react'


 const Display = (props) => {
    
    const deletehandler=(id)=>{
        props.onDelete(id)
        
    }
   
  return (
      <div>
        <h2>Orders</h2>
        <ul>
            <h3>Table-1</h3>
            {props.list.map((orders)=>orders.catagory==="table1"?(<li key={orders.id}>{orders.item}--{orders.amount} <button onClick={()=> deletehandler(orders.id)}>Delete</button></li>):(""))}
        </ul>

        <ul>
            <h3>Table-2</h3>
            {props.list.map((orders)=>orders.catagory==="table2"?(<li key={orders.id}>{orders.item}--{orders.amount}<button>Delete</button></li>):(""))}
        </ul>

        <ul>
            <h3>Table-3</h3>
            {props.list.map((orders)=>orders.catagory==="table3"?(<li key={orders.id}>{orders.item}--{orders.amount}<button>Delete</button></li>):(""))}
        </ul>
       
        </div>  
    
  )
        }

export default Display;
