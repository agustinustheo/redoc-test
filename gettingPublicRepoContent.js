var https = require("https");
var open = require('open');

var owner ='elliotpark410';
var repos = 'practice-redoc-test';
var path = 'output.yaml';

var preview;



var options = {
    host :"api.github.com",
    path: "/repos/" + owner + "/" + repos + "/contents/" + path,
    method : 'GET',
    headers: {
      'User-Agent':'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)'
    }
  }

var request = https.request(options, function(response){
    var body = '';
    response.on('data',function(chunk){
        body+=chunk;
    });
    response.on('end',function(){
        var json = JSON.parse(body);
        // console.log(json);
        console.log(json.download_url);
        var downloadURL = json.download_url;
        redoclyPreview(downloadURL)
    });

});
request.on('error', function(e) {
    console.error('and the error is '+e);
});
request.end();



let redoclyPreview = function (url) {
    preview = 'https://redocly.github.io/redoc/?nocors&url=' + url;
    open(preview)
    console.log('preview link: ' + preview)
}

