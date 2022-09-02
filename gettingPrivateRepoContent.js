var open = require('open');
var https = require("https");
var owner ='garudaidr';
var repos = 'jagad';
var userAgent = 'elliotpark410';
// had to create another privateAccessToken, I wonder if this will be a recurring problem
var privateAccessToken = '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';
var path = 'output.yaml'

var options = {
    host :"api.github.com",
    path: "/repos/" + owner + "/" + repos + "/contents/docs" + path,
    method : 'GET',
    headers: {
      'User-Agent': userAgent,
      'Authorization': 'token ' +  privateAccessToken
    }
  }

var request = https.request(options, function(response){
    var body = '';
    response.on('data',function(chunk){
        body+=chunk;
    });
    response.on('end',function(){
        var json = JSON.parse(body);
        console.log(json);
        console.log(json.download_url);
        var downloadURL = json.download_url;
        redoclyPreview(downloadURL)
    });

});
request.on('error', function(e) {
    console.error('and the error is '+ e);
});
request.end();


function redoclyPreview(url) {
    open('https://redocly.github.io/redoc/?nocors&url=' + url)
}