import { Box, Button, Text } from '@chakra-ui/react';
import { useState } from 'react'

interface Props {
    children: string;
}

const ExpandableText = ({children}: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;
  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>
  return (
    <Text>
        {expanded ? children :children.substring(0, 200) + "..."}
        <Button size='xs' colorScheme='yellow' fontWeight="bold" marginStart={2} onClick={() => setExpanded(e => !e)}>{expanded ? "Show less" : "Show more" }</Button>
    </Text>
  )
}

export default ExpandableText