const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

// http://127.0.0.1:3000/welcome?name=moon
app.get('/', (req, res) => res.send('Hello, NodeJS!'));
app.get('/welcome', (req, res) => {
    var user_name = req.param('name')
    res.send('Hi, there. Welcome to the NodeJS service.['+user_name+']');
});
app.get('/check', (req, res) => res.send('Example app listening on port 3000'));
app.listen(port, () => console.log('Example app listening on port 3000'))