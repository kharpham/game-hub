import usePlatforms from "../hooks/usePlatforms";
export default (platformId?: number) => {
  const { data } = usePlatforms();
  const chosenPlarform = data?.results.find((p) => p.id === platformId);
  return chosenPlarform;
};