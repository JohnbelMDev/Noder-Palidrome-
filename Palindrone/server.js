const http = require('http');
const fs = require('fs')
const url = require('url');
const figlet = require('figlet')
const querystring = require('querystring');
const server = http.createServer(function (req, res) {
  // t
    const string = querystring.parse(url.parse(req.url).query);
    const page = url.parse(req.url).pathname;
    // const string = querystring.parse(url.parse(req.url).query);
    console.log(page);
    if (page == '/') {
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data);
            res.end();
        });
    } else if (page == '/css/style.css') {
        fs.readFile('css/style.css', function (err, data) {
          res.writeHead(200, {
              'Content-Type': 'text/css'
          });
          res.write(data);
          res.end();
        });
    } else if (page == '/js/main.js') {
        fs.readFile('js/main.js', function (err, data) {
            res.writeHead(200, {
                'Content-Type': 'text/javascript'
            });
            res.write(data);
            res.end();
        });
    } else if (page == "/api") {
        if ('word' in string) {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            let checkWord = string['word'];
            let reverse = checkWord.split('').reverse().join('');
            if (checkWord === reverse) {
                var answer = "yes";
            } else {
                var answer = "no";
            }
            const objToJson = {
                result: answer
            }
            res.end(JSON.stringify(objToJson));
        }
    } else {
        figlet('404!!', function (err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            res.write(data);
            res.end();
        });
    }
});
server.listen(8000);
