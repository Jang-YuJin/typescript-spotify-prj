import React, { useEffect } from 'react'
import { Navigate, useParams } from 'react-router';
import useGetPlaylist from '../../hooks/useGetPlaylist';
import './PlaylistDetailPage.style.css'
import { Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import useGetPlaylistItems from '../../hooks/useGetPlaylistItems';
import DesktopPlaylistItem from './components/DesktopPlaylistItem';
import { useInView } from 'react-intersection-observer';
import Loading from '../../common/components/Loading';
import axios from 'axios';
import ErrorMessage from '../../common/components/ErrorMessage';
import EmptyPlaylistWithSearch from './components/EmptyPlaylistWithSearch';

const PlaylistDetailPage = () => {
  const {id} = useParams<{id: string}>();

  if(id === undefined){
    return <Navigate to={'/'}></Navigate>;
  }

  const {data: playlist, isLoading: isPlaylistLoading, error: playlistError} = useGetPlaylist({playlistId: id});
  const {data: playlistItems, isLoading: isPlaylistItemsLoading, error: playlistItemsError, hasNextPage, isFetchingNextPage, fetchNextPage} = useGetPlaylistItems({playlistId: id, limit: 10, offset: 0});
  const isUnauthorized = (axios.isAxiosError(playlistError) && playlistError.response?.status === 401) || (axios.isAxiosError(playlistItemsError) && playlistItemsError.response?.status === 401);
  const { ref, inView } = useInView();

  useEffect(() => {
    if(inView && hasNextPage && !isFetchingNextPage){
      fetchNextPage();
    }
  }, [inView])

  if(isPlaylistLoading || isPlaylistItemsLoading){
    return <Loading></Loading>;
  }

  if(isUnauthorized){
    return <div>다시 로그인 하세요.</div>
  }

  if(playlistError || playlistItemsError){
    return <ErrorMessage errorMessage={playlistError?.message || playlistItemsError?.message || '에러가 발생했습니다. 관리자에게 문의바랍니다.'}></ErrorMessage>
  }

  return (
    <div className='playlistDetailContainer'>
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

    {playlist?.tracks?.total === 0
    ? <EmptyPlaylistWithSearch></EmptyPlaylistWithSearch>
    : <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Album</TableCell>
            <TableCell>Date added</TableCell>
            <TableCell>Duration</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {playlistItems?.pages.map((page, pageIndex) => page.items.map((item, itemIndex) => {
            return <DesktopPlaylistItem item={item} key={pageIndex * 10 + itemIndex + 1} index={pageIndex * 10 + itemIndex + 1}></DesktopPlaylistItem>
          }))}
          <TableRow sx={{ height: "5px" }} ref={ref} />
            {isFetchingNextPage && <Loading />}
        </TableBody>
      </Table>}
    </div>
  )
}

export default PlaylistDetailPage
