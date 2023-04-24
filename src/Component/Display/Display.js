import React from 'react'
import Orderlist from './Orderlist';

 const Display = (props) => {
    if(props.list.length>1){
  return (
    <div>
        {props.list.map(orders=>(
            <Orderlist orderlist={orders}/>
        ))}
        
    </div>
  )
        }
}
export default Display;
