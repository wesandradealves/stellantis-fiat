const images = new RegExp(/\.(jpe?g|tiff?|png|webp|bmp|avif)$/i);
const videos = new RegExp(/\.(webm|mkv|gif|mp4|flv|m4p|m4v)$/i);

const regex = {
    images,
    videos,
    testImage: (filename: string): boolean => images.test(filename),
    testVideo: (filename: string): boolean => videos.test(filename),
}

export default regex;