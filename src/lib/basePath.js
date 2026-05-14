// Empty by default → works on Vercel and `next dev`.
// GitHub Pages build sets NEXT_PUBLIC_BASE_PATH=/Eportfolio so assets resolve under the project subpath.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function withBasePath(path) {
  if (!path) return path;
  if (/^(https?:)?\/\//.test(path)) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}
