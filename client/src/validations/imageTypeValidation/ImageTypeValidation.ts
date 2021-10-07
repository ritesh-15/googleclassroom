const ImageTypeValidation = () => {
  const validateImageType = (type: string): boolean => {
    const regx = /^image*\/(png|jpe|jpeg)$/;
    return regx.test(type);
  };

  return { validateImageType };
};

export default ImageTypeValidation;
