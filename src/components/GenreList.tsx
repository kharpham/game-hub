import {
  Box,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageUrl";

const GenreList = () => {
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
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} marginY="10px">
            <HStack>
              <Image
                boxSize="32px"
                src={getCroppedImageUrl(genre.image_background)}
                borderRadius="8px"
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
