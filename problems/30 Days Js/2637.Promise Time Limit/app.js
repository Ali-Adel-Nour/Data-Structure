var timeLimit = function(fn, t) {
	return async function(...args) {
       return new Promise((reslove,reject)=>{

        const id = setTimeout(()=>reject("Time Limit Exceeded"), t);
        //if i let it like this will happen memory leak

        fn(...args)
        .then((res)=>reslove(res))
        .catch((err)=>reject(err))
        .finally(()=>clearTimeout(id) )
        //to clear timeout
       })
    }
};

//using async and await

/*
var timeLimit = function(fn, t) {
	return async function(...args) {

    return new Promise(async (reslove,reject)=>{

      const id = setTimeout(()=>reject("Time Limit Exceeded"), t);
      try{
       const res= await fn(...args)
        reslove(res)
      }
      catch{

      }

      reject(error)
    })
};
*/