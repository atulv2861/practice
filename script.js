const array = [1, 2, 3, 4, 5];

// Slice from index 1 to 3 (end index is exclusive)
const slicedArray = array.splice(1, 5); // [2, 3, 4]

console.log(array); // [1, 2, 3, 4, 5]
console.log(slicedArray); // [2, 3, 4]

document.getElementById('outer').addEventListener('click', () => {
    console.log('Outer Div Bubbling');
  });
  
  document.getElementById('inner').addEventListener('click', () => {
    console.log('Inner Div Bubbling');
  });
  
  document.getElementById('button').addEventListener('click', () => {
    console.log('Button Bubbling');
  });
  
// -------------------------------Question------------------------------------
{/*   1. function getData() { 
     return new Promise((resolve, reject) => { 
         setTimeout( () => resolve(Math.round(Math.random() * 100)),
          200 ); 
         }); } 
   create an array of 10 element and output of each element will be this function 
   */}


  // Function to get a single piece of data
function getData() {
    return new Promise((resolve, reject) => {
      setTimeout(
        () => resolve(Math.round(Math.random() * 100)),
        200
      );
    });
  }
  
  // Function to create an array of promises
  function createPromisesArray(length) {
    const promises = [];
    for (let i = 0; i < length; i++) {
      promises.push(getData());
    }
    return promises;
  }
  
  // Function to resolve all promises and handle the result
  async function resolvePromises(promises) {
    try {
      const results = await Promise.all(promises);
      console.log(results);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  
  // Main function to coordinate the process
  async function main() {
    const promises = createPromisesArray(10);
    await resolvePromises(promises);
  }
  
  // Execute the main function
  main();


  
  
  