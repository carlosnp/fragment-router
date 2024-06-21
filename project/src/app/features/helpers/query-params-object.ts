interface QueryParams {
  [key: string]: number | string | undefined; 
}
export const parseQueryParams = (searchString: string): Record<string, string | string[]> => {
  const params = new URLSearchParams(searchString);
  const queryParams: Record<string, string | string[]> = {};

  for (const [key, value] of params.entries()) {
    queryParams[key] = Array.isArray(queryParams[key])
      ? [...(queryParams[key] as string[]), ...value]  // Flatten using spread syntax
      : value;
  }

  return queryParams;
}