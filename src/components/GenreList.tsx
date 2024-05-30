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
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageUrl";

interface Props {
  onSelectGenre: (genre: Genre) => void,
  selectedGenre: Genre | null,
}

const GenreList = ({onSelectGenre, selectedGenre}: Props) => {
  const { data, error, isLoading } = useGenres();
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
      <Heading fontSize='2xl' marginY={3}>Genres</Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} marginY="10px">
            <HStack>
              <Image
                objectFit='cover'
                boxSize="32px"
                src={getCroppedImageUrl(genre.image_background)}
                borderRadius="8px"
              />
              <Button whiteSpace='normal' textAlign='left' fontSize="lg" variant='link' onClick={() => onSelectGenre(genre)} fontWeight={genre.id === selectedGenre?.id ? 'bold': 'null'}>{genre.name}</Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
