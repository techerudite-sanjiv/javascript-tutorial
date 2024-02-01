import React, { useEffect, useState } from 'react'
import './todo.css'

const TodoBox = () => {

  const [array, setArray] = useState([]);
  const [productData, setProductdata] = useState({
    fname: "",
    lname: "",
    age: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    setProductdata({ ...productData, [e.target.name]: e.target.value })
  }

  const addProduct = () => {
    if (productData.fname.trim() !== "" && productData.lname.trim() !== "" && productData.age.trim() !== "") {
      setArray([...array, productData]);
      setProductdata({
        fname: "",
        lname: "",
        age: ""
      })
    }
  }

  const handleDelete = (index) => {
    let temp_delete = array.filter(((item, ind) => ind != index))
    setArray(temp_delete)
  }

  useEffect(() => {
  }, [array])



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="todo_box">
          <div className="input_box">
            <input type="text" name="fname" value={productData.fname} onChange={handleChange} />
            <br />
            <br />
            <input type="text" name="lname" value={productData.lname} onChange={handleChange} />
            <br />
            <br />
            <input type="text" name="age" value={productData.age} onChange={handleChange} />
          </div>
          <button className='custom_btn' onClick={() => addProduct()}>
            Add Product
          </button>
          <div className='list_data'>
            {array?.map((item, index) => {
              return (
                <>
                  <div className='abc'>
                    <ul>
                      <li>{item.fname}</li>
                      <li>{item.lname}</li>
                      <li>{item.age}</li>
                      <p className='p-0 m-0 cursor-pointer' > <i class="material-icons cursor-pointer text-danger" onClick={(e) => handleDelete(index)}>&#xe872;</i></p>
                    </ul>
                  </div>
                </>
              )
            })}
          </div>
          <div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default TodoBox


const promise1 = new Promise((resolve) => setTimeout(() => resolve('First'), 1000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject('Error in Second'), 500));
const promise3 = new Promise((resolve) => setTimeout(() => resolve('Third'), 2000));

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log('All promises resolved:', results);
  })
  .catch((error) => {
    console.error('An error occurred:', error); // Will log 'Error in Second'
  });
