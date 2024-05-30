import image from '../assets/no_image.webp'
const getCroppedImageUrl = (url: string) => {
  if (!url) return image;
  const target = 'media/'
  // Extract the index right after 'media/'
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index, );
}

export default getCroppedImageUrl;