const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello, world 123'))

var server = app.listen(process.env.PORT || 4000, () => {
    console.log("Listening on port " + server.address().port + "...");
});
