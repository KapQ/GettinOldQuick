function C(value){
  document.getElementById("calculator").value=val;
}
function value(val){
  document.getElementById("calculator").value+=val;
}
function result(){
  try {
    C(result(document.getElementById("calculator").value))
  }
  catch(evaluate){
    C('Error')
    function increment(number){
      return number + 1;
      function decrement(number){
        return number - 1;
        plus.addEventListener("click",function(){
          const value = output.textContent;
          const number = parseInt(value, 10);
          output.textContent = String(number + 1);
        minus.addEventListener("click",function(){
          const value = output.textContent;
          const number = parseInt(value, 10)
          output.textContent = String(number - 1);
        }

        }
    }
  }
}
