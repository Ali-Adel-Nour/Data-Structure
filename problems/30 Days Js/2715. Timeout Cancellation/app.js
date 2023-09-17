var cancellable = function(fn, args, t) {

  // cancelFn function//
  const cancelFn = function (){
    clearTimeout(timer);
};
const timer = setTimeout(()=>{
    fn(...args)
}, t);
return cancelFn ;
};
