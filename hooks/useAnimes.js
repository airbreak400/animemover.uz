import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function(searchQuery) {
    const { data, error } = useSWR(`https://api.robloxers.ru/api/animes/${searchQuery}`, fetcher);

    return {
        animes: data,
        isLoading: !error && !data,
        isError: error
    }
}