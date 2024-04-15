console.log("Tanishq is the  best")

// let boxes = documnet.getElemnetByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "red"

// document.getElementById("redbox").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "green";

console.log(document.querySelectorAll('.box'));

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "green";
    e.style.color = "white"
})