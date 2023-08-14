let acc = document.querySelector(".acc");
let panel = document.querySelector(".panel");
acc.addEventListener('click', function(){
  acc.classList.toggle("active");
  if(panel.style.maxHeight){
    panel.style.maxHeight = null;
  }else{
    panel.style.maxHeight= panel.scrollHeight + "px"
  }
})
console.log(acc)
