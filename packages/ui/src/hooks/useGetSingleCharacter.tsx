import useSWR, { Fetcher } from 'swr';

interface DataPayload<T> {
  [key: string]: T;
}

interface DataResponse<T> {
  user?: DataPayload<T>;
  isLoading: boolean;
  isError: { error: Error };
}

/**
 * Hook for retreieving a single character from API
 * @function useGetSingleCharacter
 * @param {number} id - ID value of character to retrieve
 *
 * @returns {DataResponse<T>} - Rendered hook
 */
const useGetSingleCharacter = <T,>(id: number): DataResponse<T> => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL
    ? process.env.NEXT_PUBLIC_API_URL
    : 'https://rickandmortyapi.com/api'; // Midlertidig fallback for bruk i Docker

  const fetcher: Fetcher<DataPayload<T>> = (url: RequestInfo) =>
    fetch(url).then((response) => response.json());

  const { data, error, isLoading } = useSWR<DataPayload<T>>(
    `${API_URL}/character/${id}`,
    fetcher
  );

  return {
    user: data,
    isLoading,
    isError: error,
  };
};

export default useGetSingleCharacter;
