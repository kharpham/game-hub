import useGenres from "../hooks/useGenres";
export default (genreId?: number) => {
  const { data } = useGenres();
  const chosenGenre = data?.results.find((p) => p.id === genreId);
  return chosenGenre;
};
