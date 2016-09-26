import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
import request from 'request';
import bodyParser from 'body-parser';

/*eslint-disable no-console */

const port = 3333;
const app = express();

app.use(bodyParser());
app.use(compression());
app.use(express.static('dist'));

app.post('/', function(req, res){
    request({
        url: 'http://testtask.callway.com.ua/api/addItem', //URL to hit
        headers: { 'content-type': 'application/json' },
        method: 'POST', //Specify the method
        body: JSON.stringify(req.body)
    }, function(error, response, body){
        if(error) {
            console.log(error);
            res.send(error);
        } else {
            res.sendStatus(200);
        }
    });

});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
