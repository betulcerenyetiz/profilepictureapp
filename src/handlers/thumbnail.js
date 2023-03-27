import PhotoManipulator from 'react-native-photo-manipulator';

const ThumbnailPhoto = async (imageData, maxLength) => {
  const imageDataUri = imageData.uri;
  console.log('imageData', imageData);
  console.log('maxLength', maxLength);

  let targetRatio;
  if (imageData.width > imageData.height) {
    targetRatio = maxLength / imageData.width;
  } else {
    targetRatio = maxLength / imageData.height;
  }
  const cropRegion = {
    x: 0,
    y: 0,
    width: imageData.width,
    height: imageData.height,
  };

  const targetSize = {
    width: imageData.width * targetRatio,
    height: imageData.height * targetRatio,
  };

  const thumbnailImage = await PhotoManipulator.crop(
    imageDataUri,
    cropRegion,
    targetSize,
  );
  console.log('thumbnailImage', thumbnailImage);

  return thumbnailImage;
};
export default ThumbnailPhoto;
