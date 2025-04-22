// Helper function to convert slug back to the original title format
export const urlTextHandler = (str) => {
  return str.replace(/%/g, "-").replace(/\s+/g, "-").toLowerCase().trim();
};
export const capitalizeWords = (str) => {
  return str
    .replace(/[-_]/g, " ") // Replace hyphens and underscores with spaces
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const slugify = (str) => {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

// Function to format the slug to its original title format
export const formatToOriginal = (slug) => {
  return slug
    .replace(/-/g, " ") // Replace hyphens with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()) // Capitalize the first letter of each word
    .replace(/[^\w\s]/g, "") // Remove any non-alphanumeric characters (optional, depending on your case)
    .trim(); // Trim any extra spaces
};
