const AWS = require("aws-sdk"); // from AWS SDK
const fs = require("fs"); // from node.js
const path = require("path"); // from node.js

// configuration
const config = {
    s3BucketName: process.env.BUCKET_NAME,
    folderPath: './dist' // path relative script's location
};

// initialize S3 client
const s3Config = {
    signatureVersion: 'v4',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey:  process.env.AWS_SECRET_ACCESS_KEY
}
const s3 = new AWS.S3(s3Config);
console.log('s3 config ',s3Config)
// resolve full folder path
const distFolderPath = path.join(__dirname, config.folderPath);

// get of list of files from 'dist' directory
fs.readdir(distFolderPath, (err, files) => {

    if(!files || files.length === 0) {
        console.log(`provided folder '${distFolderPath}' is empty or does not exist.`);
        console.log('Make sure your project was compiled!');
        return;
    }

    // for each file in the directory
    for (const fileName of files) {

        // get the full path of the file
        const filePath = path.join(distFolderPath, fileName);

        // ignore if directory
        if (fs.lstatSync(filePath).isDirectory()) {
            continue;
        }

        // read file contents
        fs.readFile(filePath, (error, fileContent) => {
            // if unable to read file contents, throw exception
            if (error) { throw error; }

            // upload file to S3
            s3.putObject({
                Bucket: config.s3BucketName,
                Key: fileName,
                Body: fileContent
            }, (err,res) => {
                if (err) {
                    return console.log("Error uploading file ", err)
                }
                console.log(`Successfully uploaded '${fileName}'!`);
            });

        });
    }
});