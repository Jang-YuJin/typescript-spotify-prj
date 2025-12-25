import React from 'react'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Box, Button, styled, Typography } from '@mui/material';

const PlaylistHeadContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
});

const PlaylistHead = () => {
  return (
    <PlaylistHeadContainer>
      <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><BookmarkIcon sx={{mr:2}}></BookmarkIcon><Typography variant='h2' fontWeight={700}>Your Library</Typography></Box>
      <Box><Button>+</Button></Box>
    </PlaylistHeadContainer>
  )
}

export default PlaylistHead
