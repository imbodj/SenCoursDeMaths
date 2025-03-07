const removeTrailingSlashIfPossible = (string) => string.endsWith("/") ? string.substring(0, string.length - 1) : string;
const normalizeString = (string) => string.normalize("NFD").replace(new RegExp("\\p{Diacritic}", "gu"), "").toLowerCase();

export { normalizeString as n, removeTrailingSlashIfPossible as r };
//# sourceMappingURL=utils-B9tdQQnS.mjs.map
