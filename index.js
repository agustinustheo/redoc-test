// Require Package
const postmanToOpenApi = require('postman-to-openapi')

// EP: Require FileSystem Package
const fs = require('fs');

// EP: Reads the Contents of Current Directory
const files = fs.readdirSync('./')

// EP: Declaring Variable for FilePath
var filePath;

// EP: Get File Name with "postman_collection.json"
for (let i = 0; i < files.length; i++) {
  if (files[i].includes("postman_collection.json")) {
    filePath = files[i];
    console.log('Postman Collection file: ' + files[i])
  }
}

// EP: Console Error if File With "postman_collection.json" is Not in Current Directory
if (filePath === undefined) {
  console.error("File name including 'postman_collection.json' not found in current directory")
}

// Postman Collection Path
const postmanCollection = filePath

// Output OpenAPI Path
const outputFile = './output.yaml'

// Async/await
// Promise callback style
postmanToOpenApi(postmanCollection, outputFile, { defaultTag: 'General' })
    .then(result => {
        console.log(`OpenAPI specs: ${result}`)
    })
    .catch(err => {
        console.log(err)
    })




