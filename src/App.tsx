import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sort: string,
  searchText: string,
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({ genre: null, platform: null, sort: '', searchText: '' });

  const onSelectGenre = (genre: Genre) => {
    setGameQuery(gameQuery => ({...gameQuery, genre }));
  }

  const onSelectPlatform = (platform: Platform) => {
    setGameQuery(gameQuery => ({...gameQuery, platform}));
  }
  const onSelectedOrder = (sort: string) => {
    setGameQuery(gameQuery => ({...gameQuery, sort}));
  }
  const onSearch = (searchText: string) => {
    setGameQuery(gameQuery => ({...gameQuery, searchText}));
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
          <NavBar onSearch={onSearch}/>
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
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery}/>
            <Flex marginBottom={5}>
              <Box marginRight={5}>
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={onSelectPlatform}
              /></Box>
              <SortSelector
                selectedSort={gameQuery.sort}
                onSelectedOrder={onSelectedOrder}
              />
            </Flex>
          </Box>
          <GameGrid
            gameQuery={gameQuery}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
