const express = require('express');

const app = express();

app.get("/", (req, res)=> {
    res.send("I'am an endpoint.");
});

app.listen(7777, ()=> {
    console.log('Listening on port number 7777.');
})