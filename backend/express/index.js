const express = require('express')
const app = express()
const port = 8080

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

app.get('/admin', (req, res) => {
    res.send("Hello from express admin endpoint")
});

app.post('/echo', (req, res) => {
    var name = req.body.param
    res.send(name)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})