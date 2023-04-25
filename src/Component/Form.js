import React,{useState} from 'react'

 const Form = (props) => {

  const [id, setId] = useState('')
  const [price, setPrice] = useState('')
  const [dishname, setDishname] = useState('')
  const [table, setTable] = useState('')

  const submithandler= (event)=>{
    event.preventDefault()
    props.addorder(id,price,dishname,table)
    setId('')
    setPrice('')
    setDishname('')
    setTable('')
    }

    const orderIdvalue=(event)=>{
      setId(event.target.value)
    }
    const pricevalue=(event)=>{
     setPrice(event.target.value)
    }
    const dishnamevalue=(event)=>{
      setDishname(event.target.value)
    }
    const tablevalue=(event)=>{
      setTable(event.target.value)
    }

  return (
    <div>
     <form onSubmit={submithandler}>
        <label htmlFor='orderId'>Unique OrderId:</label>
        <input type='number' id='orderId' value={id} onChange={orderIdvalue}></input>
        <label htmlFor='price'>Price:</label>
        <input type='number' id='price' value={price} onChange={pricevalue}></input>
        <label htmlFor='dishname'>Dish Name:</label>
        <input id='dishname' type='text' value={dishname} onChange={dishnamevalue}></input>
        <label htmlFor='table'>Table:</label>
        <select id='table' value={table} onChange={tablevalue}>
            <option value='table1'>Table 1</option>
            <option value='table2'>Table 2</option>
            <option value='table3'>Table 3</option>
        </select>
        <button type='submit' >Add Order</button>
        </form>   
    </div>
  )
}
export default Form;
