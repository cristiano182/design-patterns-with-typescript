
class Image {}

class JPGImage extends Image{}
class PNGImage extends Image{}
class GIFImage extends Image{}


function createImage(type: any) {

    const supportedImageTypes  = {
        "jpg":JPGImage,
        "png": PNGImage,
        "gif": GIFImage
    }

return new (Image)();

}

export {createImage, Image}