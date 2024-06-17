import { Box, Heading, Spinner, Text } from '@chakra-ui/react'
import useDetails from '../hooks/useDetails'
import { useParams } from 'react-router-dom';

const GameDetailPage = () => {
  const {id} = useParams();
  const {data, isLoading, error} = useDetails(id!);
  
  if (isLoading) return <Spinner/>;
  console.log(data);
  if (error) throw Error;
  return (
    <Box>
      <Heading>{data?.name}</Heading>
      <Text>{data?.description_raw}</Text>
    </Box>
  )
}

export default GameDetailPage