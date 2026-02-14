import sharp from 'sharp';

export  const convertToWebP = async (buffer) => {
  try {
    const webpBuffer = await sharp(buffer)
      .webp({ quality: 80 }) 
      .toBuffer();
    return webpBuffer;
  } catch (error) {
    console.error('WebP conversion error:', error);
    throw new Error('Failed to convert image to WebP');
  }
};
