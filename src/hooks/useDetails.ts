import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { axiosInstance } from "../services/apiClient";

export interface GameDetail {
  name: string;
  description_raw: string;
}

const useDetails = (slug: string) => {
    return useQuery({
        queryKey: ["game"],
        queryFn: () => axiosInstance.get<GameDetail>(`games/${slug}`).then((res) => res.data),
        staleTime: ms('24h'),
    });
}
export default useDetails;
