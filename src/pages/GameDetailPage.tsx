import { GridItem, Heading, SimpleGrid, Spinner} from '@chakra-ui/react'
import useDetails from '../hooks/useDetails'
import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import GameTrailer from '../components/GameTrailer';
import GameScreenshot from '../components/GameScreenshot';

const GameDetailPage = () => {
  const {id} = useParams();
  const {data: game, isLoading, error} = useDetails(id!);
  
  if (isLoading) return <Spinner/>;
  if (error || !game) throw Error;
  return (
    <SimpleGrid columns={{base: 1, md: 2}} spacing={5}>
      <GridItem>
      <Heading>{game?.name}</Heading>
      <ExpandableText>
        {game?.description_raw || ""}
      </ExpandableText>
      <GameAttributes game={game}></GameAttributes>
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id}/>
        <GameScreenshot gameId={game.id}/>
      </GridItem>
    </SimpleGrid> 
  )
}

export default GameDetailPage