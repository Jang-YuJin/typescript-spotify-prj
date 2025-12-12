import { styled } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react'

const EmptyPlaylistContainer = styled('div')({
    width: '100%',
    backgroundColor: '#212121',
    marginTop: '15px',
    padding: '15px',
    borderRadius: '10px'
});

const CreatePlaylistDescTop = styled('div')({
    fontWeight: '700',
    width: '100%',
    fontSize: 'larger'
});

const CreatePlaylistDescBottom = styled('div')({
    width: '100%',
    fontSize: 'larger'
});

const CreatePlaylistBtn = styled(Button)(({theme}) => ({
    fontSize: 'larger',
    color: theme.palette.background.paper,
    backgroundColor: theme.palette.text.primary,
    marginTop: '20px',
    padding: '5px 10px',
    borderRadius: '30px',
    fontWeight: '700',
    '&:hover': {
        backgroundColor: theme.palette.text.secondary
    }
}));

const EmptyPlaylist = () => {
  return (
    <EmptyPlaylistContainer>
        <CreatePlaylistDescTop>Create your first playlist</CreatePlaylistDescTop>
        <CreatePlaylistDescBottom>It's easy, we'll help you</CreatePlaylistDescBottom>
        <CreatePlaylistBtn>Create palylist</CreatePlaylistBtn>
    </EmptyPlaylistContainer>
  )
}

export default EmptyPlaylist
