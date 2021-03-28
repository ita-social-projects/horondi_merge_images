export const mergeImages = (imagesToMerge, currentCanvas, width = 1000, height = 1000, x = 0, y = 0) => {
  const ctx = currentCanvas.getContext('2d');
  ctx.clearRect(0, 0, width, height);
  imagesToMerge.forEach((imageToMerge) => {
    ctx.drawImage(imageToMerge, x, y, width, height);
  });
};