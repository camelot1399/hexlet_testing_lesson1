export const capitalize = (text) => {
  if (!!text.length) {
    return text;
  }

  const firstChar = text[0].toUpperCase();
  const restChars = text.slice(1);

  return firstChar + restChars;
};
