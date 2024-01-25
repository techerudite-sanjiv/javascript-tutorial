// what is callback hell?
// Callback hell is a phenomenon that afflicts a JavaScript developer when he tries to execute
// multiple asynchronous operations one after the other.'


asyncFunction1(function () {
    asyncFunction2(function () {
      asyncFunction3(function () {
        // More nested callbacks...
      });
    });
  });
  