import ms from "ms";
import Platforms from "../data/Platforms";
import APIClient from "../services/apiClient";
import { useQuery } from "@tanstack/react-query";
import Platform from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");
// const usePlatforms = () => ({data: Platforms, isLoading: false, error: null});
const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: () => apiClient.getAll(),
    staleTime: ms("24h"), // 24 hours
    initialData: Platforms,
  });
};

export default usePlatforms;
