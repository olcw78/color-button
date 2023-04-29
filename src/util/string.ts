export const replaceCamelCaseWithSpaces = (str: string) => {
  const res = [];
  for (let i = 0; i < str.length; i++) {
    const ch = str.charAt(i);
    if (i !== 0 && ch === ch.toUpperCase()) {
      res.push(" " + ch);
      continue;
    }

    res.push(ch);
  }

  return res.join("");
};
