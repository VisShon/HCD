const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, '../frontend/build')));
app.get('*',  (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});
app.listen(process.env.PORT || 3000,() =>{console.log(`listening on port${port}`)});