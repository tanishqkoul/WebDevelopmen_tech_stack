const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.send('blog Home page')
})

router.get('/about', (req,res)=>{
    res.send('about blog')
})

router.get('/blogpost/:slug',(req,res)=>{
    res.send(`fetch the blogPost for ${req.params.slug}`)
})

module.exports = router