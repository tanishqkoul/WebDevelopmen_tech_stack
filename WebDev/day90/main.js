const express = require("express")
const app = express()
const port = 3000
const blog = require("./routes/blog")
const fs = require("fs")

app.use(express.static("public"))
app.use("/blog", blog)

// Middleware one logger for our application
app.use((req,res,next)=>{
    console.log(req.headers)
    req.Tanishq = "Hi i am Tanishq bhai"
    const currentTime = new Date().toLocaleString(); // Get current time as a string
    fs.appendFileSync("logs.txt", `${currentTime} is a ${req.method}\n`); // Log with time
    console.log(`${currentTime} is a ${req.method}\n`); // Log with time
    next();
    // res.send("Send by middleware one")
    next()
})

// Middleware 2
app.use((req, res, next) => {
    console.log('m2')
    req.Tanishq = "I am Rohan bhai";
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello about!' + req.Tanishq)
})

app.get('/contact', (req, res) => {
    res.send('Hello contact!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})