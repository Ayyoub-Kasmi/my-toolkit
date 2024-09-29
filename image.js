const sharp = require("sharp");

const imageToWebp = (path, outputPath) => {
  sharp(path)
    .resize(300, 200)
    .webp({ quality: 100 })
    .toFile(outputPath, function (err) {
      console.log(err);
    });
};

module.exports = { imageToWebp }
