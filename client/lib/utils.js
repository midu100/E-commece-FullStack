const generateSlug = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-")     // Replace spaces with -
    .replace(/--+/g, "-");    // Replace multiple - with single -
};

module.exports = generateSlug;