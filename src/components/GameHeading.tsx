import { Heading } from "@chakra-ui/react"
import useLookUpGenre from "../hooks/useLookUpGenre";
import useLookUpPlatform from "../hooks/useLookUpPlatform";
import useGameQueryStore from "../store";



const GameHeading = () => {
  const genreId = useGameQueryStore(s => s.gameQuery.genreId);
  const platformId = useGameQueryStore(s => s.gameQuery.platformId);
  const genre = useLookUpGenre(genreId);
  const platform = useLookUpPlatform(platformId);
  const heading = `${genre?.name || ""} ${platform?.name || ""} Games`;  
  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>
        {heading}
    </Heading>
  )
}

export default GameHeading