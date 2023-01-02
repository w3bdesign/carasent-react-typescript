import useSWR from "swr";

const useGetSingleCharacter = (id: number) => {
  const fetcher = (url: RequestInfo | URL) => fetch(url).then((r) => r.json());

  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/character/${id}`,
    fetcher
  );

  return {
    user: data,
    isLoading,
    isError: error,
  };
};

export default useGetSingleCharacter;
