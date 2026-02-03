const btn1 = document.getElementById("btn1");
const ivb = document.getElementById("inputvaluebase");
const btn2 = document.getElementById("btn2");
const result = document.getElementById("result");
const invalue = document.getElementById("invalue")
btn1.addEventListener("click",()=>{
    result.textContent = "ボタン押した？";
});
btn2.addEventListener("click",()=>{
    invalue.textContent = ivb.value;
})