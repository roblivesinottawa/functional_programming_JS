// if the function reads external files, it is not a pure function - thr file's contents can change

const charactersCount = (text) => `Character count: ${text.length}`;

analyzeFile = (filename) => {
  let fileContent = open(filename);
  return charactersCount(fileContent);
};
