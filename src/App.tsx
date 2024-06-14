import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sort: string,
  searchText: string,
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({ genreId: undefined, platformId: undefined, sort: '', searchText: '' });
 

  const onSelectGenre = (genre: Genre) => {
    setGameQuery(gameQuery => ({...gameQuery, genreId: genre.id }));
  }

  const onSelectPlatform = (platform: Platform) => {
    setGameQuery(gameQuery => ({...gameQuery, platformId: platform.id}));
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
              selectedGenreId={gameQuery.genreId}
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
                selectedPlatformId={gameQuery.platformId}
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
