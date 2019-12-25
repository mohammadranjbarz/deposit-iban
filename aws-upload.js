const AWS = require("aws-sdk"); // from AWS SDK
const fs = require("fs"); // from node.js
const path = require("path"); // from node.js
const rootFolderName = 'dist'
// configuration
const config = {
    s3BucketName: process.env.BUCKET_NAME,
    folderPath: `./${rootFolderName}` // path relative script's location
};

// initialize S3 client
const s3Config = {
    signatureVersion: 'v4',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
}
const s3 = new AWS.S3(s3Config);
console.log('s3 config ', s3Config)
// resolve full folder path
const distFolderPath = path.join(__dirname, config.folderPath);

uploadDirectoryFiles(distFolderPath)

function uploadDirectoryFiles(distFolderPath) {
    const files = fs.readdirSync(distFolderPath)
    if (!files || files.length === 0) {
        console.log(`provided folder '${distFolderPath}' is empty or does not exist.`);
        console.log('Make sure your project was compiled!');
        return;
    }
    for (const fileName of files) {
        // get the full path of the file
        const filePath = path.join(distFolderPath, fileName);
        // ignore if directory
        if (fs.lstatSync(filePath).isDirectory()) {
            uploadDirectoryFiles(filePath)
            continue;
        }
        // read file contents
        uploadFile(filePath, fileName)
    }

}

function uploadFile(filePath, fileName) {
    const relativeFilePath = `${__dirname}/${rootFolderName}/`
    const fileKey = filePath.replace(relativeFilePath, '')
    console.log({fileName, filePath, fileKey})
    const fileContent = fs.readFileSync(filePath)
    // upload file to S3
    s3.putObject({
        Bucket: config.s3BucketName,
        Key: fileKey,
        Body: fileContent
    }, (err, res) => {
        if (err) {
            return console.log("Error uploading file ", err)
        }
        console.log(`Successfully uploaded '${fileKey}'!`, {res});
    });

}