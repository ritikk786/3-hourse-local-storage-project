import React from 'react'


const Orderlist = (props) => {

    return(
        <div>
            <ul>
                Table-1
                {props.orderlist.catagory==='table1'?(<li key={props.orderlist.id}>{props.orderlist.item}{props.orderlist.amount}</li>):("")}
            </ul>
        </div>
    )
//     console.log(props.orderlist)
//   if(props.orderlist.catagory==='table1')  
//   return (
//    <Table1 orders={props.orderlist}/>
//   )

//   if(props.orderlist.catagory==='table2')  
//   return (
//    <Table2 orders={props.orderlist}/>
//   )
}
export default Orderlist;
