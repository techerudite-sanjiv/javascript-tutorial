// import React, { useState, useEffect, useCallback } from 'react';

// const DebounceExample = () => {


//   const [inputValue, setInputValue] = useState('');



//   const handleSearch = (value) => {
//     setInputValue(value)
// }

// function debounce(func, wait) {


//     let timeout;
//     return function (...args) {
//         const context = this;
//         if (timeout) clearTimeout(timeout);
//         timeout = setTimeout(() => {
//             timeout = null;
//             func.apply(context, args);
//         }, wait);
//     };
// }
// const debounceOnChange = useCallback(debounce(handleSearch, 1000), []);

//   return (
//     <div>
//       <label>
//         Type something:
//         <input type="text" value={inputValue} onChange={(e)=>debounceOnChange(e.target.value)} />
//       </label>
//     </div>
//   );
// };

// export default DebounceExample;



import React, { useState, useEffect } from 'react';

const DebounceExample = () => {
  const [inputValue, setInputValue] = useState('');

  // const debounce = (func, delay) => {
  //   let timerId;
  //   return function (...args) {
  //     if (timerId) {
  //       clearTimeout(timerId);
  //     }
  //     timerId = setTimeout(() => {
  //       func(...args);
  //     }, delay);
  //   };
  // };

  // const handleInputChange = debounce((value) => {
  //   console.log("Debounced input:", value);
  // }, 2000);

  // const handleChange = (event) => {
  //   const { value } = event.target;
  //   setInputValue(value);
  //   handleInputChange(value);
  // };


  function debounce(fn, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      setTimeout(() => {
        fn.apply(this, args)
      }, delay);
    }
  }


  function search(e) {
    console.log(e.target.value)
    fetch(`https://jsonplaceholder.typicode.com/todos`)
  }


  const handleChange = debounce(search, 2000)

  


  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default DebounceExample;
