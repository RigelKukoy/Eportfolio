export const BASE_PATH = '/Eportfolio';

export function withBasePath(path) {
  if (!path) return path;
  if (/^(https?:)?\/\//.test(path)) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}
