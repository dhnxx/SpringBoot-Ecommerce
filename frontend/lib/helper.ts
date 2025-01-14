export const toTitleCase = (str: string) =>
  str
    .toLowerCase()
    .split(/[\s-]+/) // Split by spaces or hyphens
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export const toFullName = (firstName: string, lastName: string) =>
  `${firstName} ${lastName}`;
