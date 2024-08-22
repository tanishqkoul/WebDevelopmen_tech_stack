const fs = require("fs")
// const fs = require("fs/promises")
console.log(fs)
console.log("starting")
fs.writeFileSync("Tanishq.txt", "Tanishq is a great Man")

fs.writeFile('Tanishq2.txt', "Tanishq is a billonare\n",()=>{
    console.log("done")
    fs.readFile("Tanishq2.txt",(e,d)=>{
        console.log(e,d.toString())
    })
})

fs.appendFile("Tanishq2.txt", "Anchal and tanishq are great together",(e,d)=>{
    console.log(d)
})

console.log("Ending")