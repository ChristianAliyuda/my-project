const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello, from kamran'))

var server = app.listen(process.env.PORT || 4000, () => {
    console.log("Listening on port " + server.address().port + "...");
});
