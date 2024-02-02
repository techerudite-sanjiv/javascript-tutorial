// Function that returns a promise resolving after a specified time
function delayPromise(time, value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate success
        resolve(value);
        // Simulate an error
        // reject(new Error("Something went wrong"));
      }, time);
    });
  }
  
  // Promise 1
  const promise1 = delayPromise(1000, "Promise 1");
  
  // Promise 2
  const promise2 = delayPromise(1500, "Promise 2");
  
  // Promise 3
  const promise3 = delayPromise(500, "Promise 3");
  
  // Handling promises using then and catch
  promise1
    .then((result) => {
      console.log("Promise 1 resolved:", result);
    })
    .catch((error) => {
      console.error("Promise 1 rejected:", error);
    });
  
  // Chaining promises
//   promise1
//     .then((result) => {
//       console.log("Promise 1 resolved:", result);
//       return promise2;
//     })
//     .then((result) => {
//       console.log("Promise 2 resolved:", result);
//       return promise3;
//     })
//     .then((result) => {
//       console.log("Promise 3 resolved:", result);
//     })
//     .catch((error) => {
//       console.error("Error in the promise chain:", error);
//     });
  
  // Using Promise.all to handle multiple promises
//   Promise.all([promise1, promise2, promise3])
//     .then((results) => {
//       console.log("All promises resolved:", results);
//     })
//     .catch((error) => {
//       console.error("Error in Promise.all:", error);
//     });
  
  // Using Promise.race to handle the fastest resolving promise
//   Promise.race([promise1, promise2, promise3])
//     .then((result) => {
//       console.log("The first promise resolved:", result);
//     })
//     .catch((error) => {
//       console.error("Error in Promise.race:", error);
//     });
  
  // Using async/await to handle promises
//   async function handlePromises() {
//     try {
//       const result1 = await promise1;
//       console.log("Promise 1 resolved:", result1);
  
//       const result2 = await promise2;
//       console.log("Promise 2 resolved:", result2);
  
//       const result3 = await promise3;
//       console.log("Promise 3 resolved:", result3);
//     } catch (error) {
//       console.error("Error in async/await:", error);
//     }
//   }
  
//   handlePromises();
  