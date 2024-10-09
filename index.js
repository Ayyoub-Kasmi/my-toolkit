const ImageHandler = require('./image')

const images = []

images.forEach(image => {
  const imageName = image.split('.')[0]

  ImageHandler.imageToWebp(`images/${image}`, `output/${imageName}.webp`)
})

