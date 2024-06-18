import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { axiosInstance } from "../services/apiClient";
import Game from "../entities/Game";

// export interface GameDetail {
//   name: string;
//   description_raw: string;
// }

const useDetails = (slug: string) => {
  return useQuery({
    queryKey: ["game", slug],
    queryFn: () =>
      axiosInstance.get<Game>(`games/${slug}`).then((res) => res.data),
    staleTime: ms("24h"),
  });
};
export default useDetails;
