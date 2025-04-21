export const urlTextHandler = (str) => {
  return str.replace(/%/g, "-").replace(/\s+/g, "-").toLowerCase().trim();
};
