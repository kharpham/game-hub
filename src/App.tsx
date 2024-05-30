import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({ genre: null, platform: null });

  const onSelectGenre = (genre: Genre) => {
    setGameQuery(gameQuery => ({...gameQuery, genre }));
  }

  const onSelectPlatform = (platform: Platform) => {
    setGameQuery(gameQuery => ({...gameQuery, platform}));
  }
  
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, //1024px
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" padding="10px">
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={onSelectGenre}
            />
          </GridItem>
        </Show>

        <GridItem area="main">
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={onSelectPlatform}
          />
          <GameGrid
            gameQuery={gameQuery}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
