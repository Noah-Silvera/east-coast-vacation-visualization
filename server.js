
const express = require('express');
const path = require('path');
const port = process.env.PORT || 4000;
const app = express();

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));

// send the user to index html page inspite of the url
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.use(express.static(__dirname + '/dist'));

app.use('/static/',
express.static(path.join(__dirname, 'src', 'static')));


app.listen(port);

console.log(`Hosting on locahost:${port}`)