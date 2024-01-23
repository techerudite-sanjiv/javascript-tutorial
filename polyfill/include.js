
    Array.prototype.includesy = function(searchElement, fromIndex) {
      fromIndex = fromIndex || 0;
      for (let i = fromIndex; i < this.length; i++) {
        if (this[i] === searchElement) {
          return true; 
        }
      }
      return false;
    };
  

  console.log([1, 2, 3].includesy(2,2));     // true