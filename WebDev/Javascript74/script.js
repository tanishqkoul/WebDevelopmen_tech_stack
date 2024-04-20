let button = document.getElementById("btn")
// list of all mouse events
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

button.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked Enjot YOur click Tanishq. You are a great doveloper . you are a billonare</b>"
})

button.addEventListener(contextmenu,()=>{
    alert("Dont try to hack us by right click")
})

button.addEventListener(keyDown,(e)=>{
   console.log(e, e.key, e.keyCode)
})
