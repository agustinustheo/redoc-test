var https = require("https");
var owner ='garudaidr';
var repos = 'jagad';
var userAgent = 'elliotpark410';
var privateAccessToken = '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';

var options = {
    host :"api.github.com",
    path: "/repos/" + owner + "/" + repos + "/contents/docs",
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
    });

});
request.on('error', function(e) {
    console.error('and the error is '+e);
});
request.end();