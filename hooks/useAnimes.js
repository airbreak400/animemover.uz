import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function(searchQuery) {
    const { data, error } = useSWR(`http://89.44.194.174:5000/api/animes/${searchQuery}`, fetcher);

    return {
        animes: data,
        isLoading: !error && !data,
        isError: error
    }
}