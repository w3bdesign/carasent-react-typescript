import useSWR from 'swr';

interface IUser {
  name: string;
  image: string;
}

interface IDataResponse {
  user?: IUser;
  isLoading: boolean;
  isError: { error: Error };
}

/**
 * Hook for retreieving a single character from API
 * @function useGetSingleCharacter
 * @param {number} id - ID value of character to retrieve
 *
 * @returns {IDataResponse} - Rendered hook
 */
const useGetSingleCharacter = (id: number): IDataResponse => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL
    ? process.env.NEXT_PUBLIC_API_URL
    : 'https://rickandmortyapi.com/api'; // Midlertidig fallback for bruk i Docker

  const fetcher = (url: RequestInfo) =>
    fetch(url).then((response) => response.json());

  const { data, error, isLoading } = useSWR(
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
