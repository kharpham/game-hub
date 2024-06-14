import { useInfiniteQuery} from "@tanstack/react-query";
import { GameQuery } from "../App"; 
import APIClient from "../services/apiClient";
import { Platform } from "./usePlatforms";


export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
const apiClient = new APIClient<Game>("/games");
const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery({
    queryKey: ["games", gameQuery],
    queryFn: ({pageParam = 1}) =>
      apiClient
        .getAll({
          params: {
            genres: gameQuery.genreId,
            parent_platforms: gameQuery.platformId,
            ordering: gameQuery.sort,
            search: gameQuery.searchText,
            page: pageParam, 
            page_size: 24,
          },
        }),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours,
    getNextPageParam: (lastPage, allPage) => {
      return lastPage.next  ? allPage.length + 1 : undefined;
    },
    initialPageParam: 1,

  });

export default useGames;
