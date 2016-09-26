/*SERVER*/
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import url from 'url';
import bodyParser from 'body-parser';
import request from 'request';
import open from 'open';

/*REACT,REDUX*/
import  React from 'react';
import  ReactDOM from 'react-dom';
let     configureStore = require('../src/store/configureStore');
        configureStore = configureStore.default;


import {Provider} from 'react-redux';
import App from '../src/components/App';
import { renderToString } from 'react-dom/server';

/*VIMEO*/
import { Vimeo } from 'vimeo';
const CLIENT_ID = '7007746d711d82efa2f7b9b80711cb2b3a6f881c';
const CLIENT_SECRET = 'CBbcNWzP7F7CwWV2njndfUHRRqXqLHWlcGPGekY14IpDF7bSWgYP1tLCyip4D7duYK2cEvB4f/qZPDZ4D9AEsbZDqzrcH9n8cTE/hJOnNY6mMyeGJ4L/eDfbJZTE78MV';
const redirect_uri = "http://localhost:8000/";
let state = "12345";
const VIMEO_AUTH_ADDRESS = `https://api.vimeo.com/oauth/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${redirect_uri}&state=${state}`;
const lib = new Vimeo(CLIENT_ID, CLIENT_SECRET);

const port = 8000;
const app = express();
const compiler = webpack(config);

app.use(bodyParser.json({ type: 'application/*+json' }));
app.use('/', express.static(__dirname));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));


app.get('/', function(req, res) {

    let queryObject = url.parse(req.url,true).query;
    let code =  queryObject.code;
        state =  queryObject.state;

    console.log(state);

    let preloadedState = {};

            if(code){// IF WE CAME FROM VIMEO

                /*************************if new user*****************************************/

            let queryObject = url.parse(req.url,true).query;



            lib.accessToken(code, redirect_uri, function (err, token) {

                if (err) {
                    console.log("error\n" + err);
                    res.redirect(VIMEO_AUTH_ADDRESS);

                } else if (token.access_token) {

                    lib.access_token = token.access_token;

                    lib.request({
                        path : '/me/videos'
                    }, function (error, body, status_code, headers) {
                        if (error) {
                            console.log(error);
                            res.redirect(VIMEO_AUTH_ADDRESS);
                        } else {
                            preloadedState.videosReducer = body.data;
                            console.log("preloaded state 2",preloadedState);

                                 lib.request({
                                 path : '/me'
                                 }, function (error, body, status_code, headers) {
                                 if (error) {
                                 console.log(error);
                                     res.redirect(VIMEO_AUTH_ADDRESS);
                                 } else {
                                 preloadedState.userReducer = body;
                                 console.log("preloaded state 2",preloadedState);
                                 handleRender(preloadedState, res);
                                 }
                                 });
                        }
                    });


                }
            });

                /******************************************************************/

            } else {// IF NO

                res.redirect(VIMEO_AUTH_ADDRESS);

            }


    function handleRender(preloadedState, res) {

        const store = configureStore(preloadedState);

        const html = renderToString(
            <Provider store={store}>
            <App />
            </Provider>
        );

                 preloadedState = store.getState();
        res.send(renderFullPage(html, preloadedState));

    }


    function renderFullPage(html, preloadedState) {
        return `
                <!DOCTYPE html>
                    <html lang="en">
                        <head>
                        <meta charset="utf-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1">
                        <meta name="description" content="">
                        <meta name="author" content="">
                        <link rel="shortcut icon" href="../../assets/ico/favicon.ico">

                        <title>Front-End Challenge</title>

                        <!-- Just for debugging purposes. Don't actually copy this line! -->
                    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->

                        <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
                    <!--[if lt IE 9]>
                    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
                    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
                    <![endif]-->
                    </head>
                  <body>
                    <div id="root">${html}</div>
                    <script>
                      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
                    </script>
                    <script src="/bundle.js"></script>
                  </body>
                </html>
                `
    }

});

app.listen('8000', function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Listen 8000");
    }
});
