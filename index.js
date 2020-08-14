const express = require('express')
const app = express();
const path = require('path');
const { static } = require('express');
const port = 3300;

app.use(static(path.join(__dirname, 'public/')))
// app.get('/', (req, res) => {
//     res.send('Simple express Js blog api');
// })
app.use('/api/articles/', require('./Routes/api/routes'));

app.listen(port, ()=>{
    console.log(`Server Running on http://localhost:${port}`)
});