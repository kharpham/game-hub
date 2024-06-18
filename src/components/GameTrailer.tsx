import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}
const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);
  if (isLoading) return null;
  if (error) return null;
  const first = data?.results[0];
  if (!first) return null; 
  return <video width="100%" src={first.data[480]} poster={first.preview} controls></video>;
};

export default GameTrailer;
