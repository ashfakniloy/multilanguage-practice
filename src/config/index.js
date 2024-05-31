export const API_URL = "https://jsonplaceholder.typicode.com";

export const languages = [
  {
    name: "bangla",
    display_name: "বাংলা",
    locale: "bn",
  },
  {
    name: "english",
    display_name: "English",
    locale: "en",
  },
];

export const locales = languages.map((language) => language.locale);
export const defaultLocale = "bn";

// // export const localePrefix = "always"; // Default
// export const localePrefix = "never";
export const localePrefix = "as-needed";
