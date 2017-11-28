const aws = require('aws-sdk')
const uuidv1 = require('uuid/v1')

aws.config.region =   process.env.AWS_REGION 
aws.config.accessKeyId = process.env.AWS_ACCESS_KEY_ID
aws.config.secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY

module.exports = {
    get : _getSignedUrl
}
    
function _getSignedUrl (req, res) {
    const s3 = new aws.S3();
    const S3_BUCKET = process.env.S3_BUCKET
    const fileName = uuidv1() + req.query['file-name'];
    const fileType = req.query['file-type'];
    const s3Params = {
      Bucket: S3_BUCKET,
      Key: fileName,
      Expires: 60,
      ContentType: 'image/png',
      ACL: 'public-read'
    };
    
    //function return url for you
    s3.getSignedUrl('putObject', s3Params, (err, data) => {
      if(err){
        console.log(err);
        return res.end();
      }
      const returnData = {
        signedRequest: data,
        url: `https://${S3_BUCKET}.s3.amazonaws.com/${encodeURIComponent(fileName)}`,
      };
      res.write(JSON.stringify(returnData));
      res.end();
    })
}
