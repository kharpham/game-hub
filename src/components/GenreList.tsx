import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { Genre } from "../entities/Genre";
import getCroppedImageUrl from "../services/imageUrl";
import useGameQueryStore from "../store";

const GenreList = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const { data, error, isLoading } = useGenres();
  const results = data?.results;
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  if (error) {
    return null;
  }
  if (isLoading) {
    return (
      <List>
        {skeletons.map((skeleton) => (
          <ListItem key={skeleton} marginY="10px">
            <HStack>
              <Skeleton boxSize="32px" borderRadius="8px" />
              <SkeletonText noOfLines={1} spacing="4" skeletonHeight="20px" />
            </HStack>
          </ListItem>
        ))}
      </List>
    );
  }
  return (
    <>
      <Heading fontSize="2xl" marginY={3}>
        Genres
      </Heading>
      <List>
        {results?.map((genre: Genre) => (
          <ListItem key={genre.id} marginY="10px">
            <HStack>
              <Image
                objectFit="cover"
                boxSize="32px"
                src={getCroppedImageUrl(genre.image_background)}
                borderRadius="8px"
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontSize="lg"
                variant="link"
                onClick={() => setGenreId(genre.id)}
                fontWeight={genre.id === genreId ? "bold" : "null"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
