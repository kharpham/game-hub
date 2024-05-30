import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  const onSelectGenre = (genre: Genre) => {
    setSelectedGenre(_ => genre);
  }
  const onSelectPlatform = (platform: Platform) => {
    setSelectedPlatform(_ => platform);
  }
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, //1024px
        }}
        templateColumns={{
          base: '1fr',
          lg: '200px 1fr',
        }}
      >
        <GridItem area="nav">
          <NavBar/>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" padding='10px'>
            <GenreList selectedGenre={selectedGenre} onSelectGenre={onSelectGenre}/>
          </GridItem>
        </Show>

        <GridItem area="main">
          <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={onSelectPlatform}/>
          <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform}/>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
