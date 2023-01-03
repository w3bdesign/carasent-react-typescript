import useSWR from "swr";

const useGetSingleCharacter = (id: number) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL
    ? process.env.NEXT_PUBLIC_API_URL
    : "https://rickandmortyapi.com/api"; // Midlertidig fallback for bruk i Docker

  const fetcher = (url: RequestInfo | URL) => fetch(url).then((r) => r.json());

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
