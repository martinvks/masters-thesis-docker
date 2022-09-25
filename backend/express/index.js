const express = require('express')
const app = express()
const port = 8080

app.use(express.static('public'))
app.use(express.urlencoded())

app.post('/echo', function (req, res) {
    var name = req.body.param
    res.send(name)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})