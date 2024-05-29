import { Badge } from '@chakra-ui/react'
import React from 'react'

interface Props {
    criticScore: number,
}

const CriticScore = ({criticScore}: Props) => {
  let color = criticScore >= 90 ? "green.300" : criticScore >= 75 ? "yellow" : "red";
  return (
    <Badge fontSize='14px' paddingX='10px' borderRadius='4px' color={color}>{criticScore}</Badge>
  )
}

export default CriticScore