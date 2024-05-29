import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const onSelectGenre = (genre: Genre) => {
    setSelectedGenre(_ => genre);
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
          <PlatformSelector/>
          <GameGrid selectedGenre={selectedGenre}/>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
