var promiseAll = function(functions){
  return new Promise(async(resolve,reject)=>{
    const results = []
        // Helper function to execute a single async function and handle resolution/rejection

        const executeAsyncFunction = async (func, index) => {
          try {
            const result = await func();
            results[index] = result;
          } catch (error) {
            reject(error); // If any promise is rejected, reject the main promise
          }
        };

        // Execute all async functions in parallel
        const promises = functions.map((func, index) => executeAsyncFunction(func, index));

        try {
          // Wait for all promises to settle (either resolve or reject)
          await Promise.all(promises);

          // If no rejection occurred, resolve the main promise with the array of results
          resolve(results);
        } catch (error) {
          // This catch block is needed to handle rejections from the Promise.all
          // If any promise in Promise.all is rejected, it will throw an error,
          // and we catch that error here.
          reject(error);
        }
      });
    };