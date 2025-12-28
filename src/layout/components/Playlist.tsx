import React, { useEffect, useState } from 'react'
import EmptyPlaylist from './EmptyPlaylist'
import useGetCurrentUserPlaylists from '../../hooks/useGetCurrentUserPlaylists'
import PlaylistCard from './PlaylistCard';
import './Playlist.style.css'
import useGetCurrentUserProfile from '../../hooks/useGetCurrentUserProfile';
import { useInView } from 'react-intersection-observer';
import Loading from '../../common/components/Loading';

const Playlist = () => {
  const { ref, inView } = useInView();
  const {data, hasNextPage, isFetchingNextPage, fetchNextPage} = useGetCurrentUserPlaylists({limit: 15, offset: 0});
  const {data: user} = useGetCurrentUserProfile();
console.log('ddd', data)
  const [selected, setSelected] = useState('');

  const selectClick = (id: string | undefined) => {
    if(id === selected){
      return ;
    }

    if(id === undefined){
      setSelected('');
    } else{
      setSelected(id);
    }
  };

  useEffect(() => {
    if(inView && hasNextPage && !isFetchingNextPage){
      console.log('useEffect')
      fetchNextPage();
    }
  }, [inView])

  if(!user){
    return <EmptyPlaylist></EmptyPlaylist>
  }

  return (
    <div className='playlistContainer'>
      {data?.pages[0].total !== 0
      ? <div>
          {data?.pages.map((page) => 
            page.items.map((item) => {
              return <PlaylistCard key={item.id} image={item.images?.[0].url} ownerName={item.owner?.display_name} name={item.name} id={item.id} type={item.type} isSelected={item.id === selected} onClick={() => selectClick(item.id)}></PlaylistCard>
            })
          )}
          <div ref={ref}>{isFetchingNextPage && <Loading></Loading>}</div>
        </div>
      : <EmptyPlaylist></EmptyPlaylist>}
      
    </div>
  )
}

export default Playlist
