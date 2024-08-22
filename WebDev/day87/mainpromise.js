import fs from "fs/promises";

let a = await fs.readFile("Tanishq2.txt")

let b = await fs.appendFile("Tanishq2.txt","\n\n\ TEE is AAMMAAZZIINNGG")
console.log(a.toString(), b)