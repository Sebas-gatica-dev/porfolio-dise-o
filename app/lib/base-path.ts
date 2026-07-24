export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string) {
  if (!path.startsWith("/")) {
    throw new Error(`Expected an absolute application path, received: ${path}`);
  }

  return `${basePath}${path}`;
}
