console.log("Tanishq is a hacker")
console.log("Anchal is a hacker")


setTimeout(()=>{
    console.log("I am inside set time out")
} ,0);

setTimeout(()=>{
    console.log("I am inside set time out 2")
} ,0);

console.log("the End")

const fn =() =>{
    console.log("nothing")
}

const callback = (arg,fn)=>{
    console.log(arg)
    fn()
}

const laodScript = (src, callback)=>{
    let sc = documnet.createElement("script");
    sc.src = src;
    sc.onload = callback("Tanishq", fn);
    document.head.append(sc) 
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )