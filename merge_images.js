const loadImages = (sources = []) =>
    new Promise((resolve) => {
      const loadedImages = sources.map(
        (source) =>
          new Promise((resolveImage, rejectImage) => {
            const img = new Image();
            img.onload = () => resolveImage(img);
            img.onerror = () => rejectImage(new Error());
            img.src = `${IMG_URL}${source}`;
          })
      );

      resolve(Promise.all(loadedImages).then((loadedImage) => loadedImage));
    });

const mergeImages = (imagesToMerge, currentCanvas, width = 1000, height = 1000, x = 0, y = 0) => {
    const ctx = currentCanvas.getContext('2d');
    ctx.clearRect(0, 0, width, height);
    imagesToMerge.forEach((imageToMerge) => {
      ctx.drawImage(imageToMerge, x, y, width, height);
    });
  };