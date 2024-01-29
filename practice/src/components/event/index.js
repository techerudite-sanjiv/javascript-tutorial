import React, { useState } from 'react'

const HandleEvent = () => {

  const [selectedIndex, setSelectedIndex] = useState(null)

  const style = {
    width: "50%",
    margin: "50px auto",
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",

  }
  const deactive = {
    height: "100px",
    backgroundColor: "gray",
    border: "1px solid #fff",
    padding: 5,
  }

  const activeColor = {
    height: "100px",
    backgroundColor: "red",
    border: "1px solid #fff",
    padding: 5,
  }
  
  return (
    <div>
      <div className="" style={style}>
        {[...Array(12)].map((item, index) => {
          return (
            <div key={index} className=' mx-1' style={selectedIndex == index ? activeColor : deactive} onClick={(e) => setSelectedIndex(index)}>

            </div>
          )
        })}
      </div>

    </div>
  )
}

export default HandleEvent