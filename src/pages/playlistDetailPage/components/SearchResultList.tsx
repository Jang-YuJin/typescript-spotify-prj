import React from 'react'
import { Track } from '../../../models/track'
import { Typography } from '@mui/material';

interface SearchResultListProps {
    list: Track[];
}

const SearchResultList = ({list}: SearchResultListProps) => {
  console.log('list: ', list);
  return (
    <div>
      {list.map((track) => <Typography variant='h2'>{track.name}</Typography>)}
    </div>
  )
}

export default SearchResultList
