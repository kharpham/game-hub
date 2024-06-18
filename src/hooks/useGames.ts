import { useInfiniteQuery } from "@tanstack/react-query";
import useGameQueryStore from "../store";
import APIClient from "../services/apiClient";
import ms from "ms";
import Game from "../entities/Game";

const apiClient = new APIClient<Game>("/games");
const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
          page_size: 24,
        },
      }),
    staleTime: ms("24h"), // 24 hours,
    getNextPageParam: (lastPage, allPage) => {
      return lastPage.next ? allPage.length + 1 : undefined;
    },
    initialPageParam: 1,
  });
};

export default useGames;
