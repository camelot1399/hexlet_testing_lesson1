export const capitalize = (text) => {
  if (text.length === 0) {
    return text;
  }

  const firstChar = text[0].toUpperCase();
  const restChars = text.slice(1);

  return firstChar + restChars;
};
