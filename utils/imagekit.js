// SDK initialization

var ImageKit = require("imagekit");

exports.initImageKit = function () {

    var imagekit = new ImageKit({
        publicKey : process.env.PUBLIC_KEY_IMAGEKIT,
        privateKey : process.env.PRIVATE_KEY_IMAGEKIT,
        urlEndpoint : process.env.ENDPOINTURL_IMAGEKIT,
    });

    return imagekit
}
