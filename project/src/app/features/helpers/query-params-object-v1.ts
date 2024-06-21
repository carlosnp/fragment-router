/**
 * Parsea los paramatros de un url
 * @param searchString 
 * @returns 
 */
export const parseQueryParamsV1 = (searchString: string): Record<string, string | string[]> => {
  const params = new URLSearchParams(searchString);
  const queryParams: Record<string, string | string[]> = {};

  params.forEach((value, key) => {
    queryParams[key] = Array.isArray(queryParams[key])
      ? [...(queryParams[key] as string[]), value]
      : value;
  });

  return queryParams;
}