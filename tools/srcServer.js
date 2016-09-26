import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import request from 'request';
import bodyParser from 'body-parser';
import cors from 'cors';

/* eslint-disable no-console */

const port = 3333;
const app = express();
const compiler = webpack(config);



app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));


// parse various different custom JSON types as JSON
app.use(bodyParser());

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
  res.sendFile(path.join( __dirname, '../src/index.html'));
});


app.listen(`${port}`, function(){
    console.log('running on 3333...');
});

