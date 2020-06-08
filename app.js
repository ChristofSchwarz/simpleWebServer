var express = require('express');
var path = require('path');
const app = express();
app.use(express.static('public'));

app.listen(5656, () => {
    console.log('Listening on http://localhost:5656 ...');
    console.log('Press Ctrl+C to stop.');
})
