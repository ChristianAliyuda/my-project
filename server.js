const express = require('express')
const app = expre()

app.get('/', (req, res) => res.send('hope doing well'))

var server = app.listen(process.env.PORT || 4000, () => {
    console.log("Listening on port " + server.address().port + "...");
});
