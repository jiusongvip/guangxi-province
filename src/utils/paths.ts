export function homeAnchor(hash: string, pathname: string): string {
  const clean = hash.startsWith("#") ? hash : `#${hash}`;
  return pathname === "/" || pathname === "/index.html" ? clean : `/${clean}`;
}
