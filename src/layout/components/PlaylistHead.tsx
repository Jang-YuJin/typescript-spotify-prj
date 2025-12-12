import React from 'react'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Box, styled, Typography } from '@mui/material';

const PlaylistHeadContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
});

const PlayListAddBtn = styled('div')(({theme}) => ({
    borderRadius: '30px',
    width: '50px',
    height: '100%',
    color: theme.palette.primary.main,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    fontSize: 'x-large',
    '&:hover': {
        backgroundColor: 'rgba(30, 215, 96, 0.1)'
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}));

const PlaylistHead = () => {
  return (
    <PlaylistHeadContainer>
      <Box sx={{display: 'flex', flexDirection: 'row'}}><BookmarkIcon sx={{mr:2}}></BookmarkIcon><Typography variant='h2' fontWeight={700}>Your Library</Typography></Box>
      <Box><PlayListAddBtn>+</PlayListAddBtn></Box>
    </PlaylistHeadContainer>
  )
}

export default PlaylistHead
