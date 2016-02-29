
/* global __dirname */
var http = require('http');
var process = require('process');
var spawn = require('child_process').spawn;
var path = require('path');
var backend = require('git-http-backend');

var port = 8000;
var directory = process.cwd();

var server = http.createServer(function (req, res) {

    var repo = req.url.split('/')[1];
    var dir = path.join(directory, repo);

    req.pipe(backend(req.url, function (err, service) {
        if (err) return res.end(err + '\n');

        res.setHeader('content-type', service.type);
        console.log(service.action, repo, service.fields);

        var ps = spawn(service.cmd, service.args.concat(dir));
        ps.stdout.pipe(service.createStream()).pipe(ps.stdin);

    })).pipe(res);
});

server.listen(port, function () {
    console.log('Serving git repos in current directory on port ' + port);
	console.log('Repo directory: ' + directory);
});