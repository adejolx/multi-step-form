const trimWhitespace = (str: string) => {
  return str.trim();
};

const removeUnderscore = (inputString: string) => {
  return inputString.replace(/_/g, ' ');
};

const makeSentenceCased = (inputString: string) => {
  return (
    inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase()
  );
};

const underscoresToSentenceCase = (inputString: string) => {
  return makeSentenceCased(removeUnderscore(inputString));
};

export { trimWhitespace, underscoresToSentenceCase };
