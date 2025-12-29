import React from 'react'
import { Navigate, useParams } from 'react-router';
import useGetPlaylist from '../../hooks/useGetPlaylist';
import './PlaylistDetailPage.style.css'
import { Grid, Typography } from '@mui/material';

const PlaylistDetailPage = () => {
  const {id} = useParams<{id: string}>();

  if(id === undefined){
    return <Navigate to={'/'}></Navigate>;
  }

  const {data: playlist} = useGetPlaylist({playlistId: id});
  console.log('ddd: ', playlist);
  return (
    <Grid className='playlistHeadContainer' container spacing={2}>
      <Grid size={{md: 3, sm: 12, xs: 12}} display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <img className='playlistHeadImg' src={playlist?.images?.[0] ? playlist.images[0].url : '/Spotify_Primary_Logo_RGB_Green.png'}></img>
      </Grid>
      <Grid size={{md: 9, sm: 12, xs: 12}}>
        <Grid size={12} style={{ minHeight: '100%' }} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
              <div>{playlist?.public ? '공개 플레이리스트' : '비공개 플레이리스트'}</div>
              <span className='playlistHeadName'>{playlist?.name}</span>
              <div className='playlistHeadinfoContainer'>
                <img className='playlistHeadLogoImg' src={'/Spotify_Primary_Logo_RGB_Green.png'}></img>
                {`${playlist?.owner?.display_name} || ${playlist?.tracks?.total}곡`}
              </div>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default PlaylistDetailPage
