// initial counter reading
let display = document.getElementById("display"),
     on = document.getElementById("on"),
     off = document.getElementById("off");
  
    let model = new Proxy(
  { value: 0 },
  {
    set(obj, prop, newval) {
      obj[prop] = newval;
    if (prop === "value") {
        display.innerText = obj[prop];
      }
    }
  }
);
var decrement = ()=>{
   model.value -= 1;
}  
var increment = ()=>{
  model.value += 1;
}


let callReset=()=>{
   display.innerHTML=0;
}

callReset()