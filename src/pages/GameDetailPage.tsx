import { Box, Heading, Spinner} from '@chakra-ui/react'
import useDetails from '../hooks/useDetails'
import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';

const GameDetailPage = () => {
  const {id} = useParams();
  const {data, isLoading, error} = useDetails(id!);
  
  if (isLoading) return <Spinner/>;
  if (error) throw Error;
  return (
    <Box>
      <Heading>{data?.name}</Heading>
      <ExpandableText>
        {data?.description_raw || ""}
      </ExpandableText>

    </Box>
  )
}

export default GameDetailPage