import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import useSearchItemsByKeyword from '../../../hooks/useSearchItemsByKeyword';
import { SEARCH_TYPE } from '../../../models/search';
import SearchResultList from './SearchResultList';
import Loading from '../../../common/components/Loading';

const EmptyPlaylistWithSearch = () => {
  const [keyword, setKeyword] = useState<string>('');
  const {data, error, isLoading} = useSearchItemsByKeyword({
    q: keyword,
    type: [SEARCH_TYPE.Track]
  });
  console.log('ddd: ', data);

  const handleSearchKeyword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value)
  };

  

  return (
    <div>
      <Typography variant='h1' my={'10px'}>Let's find something for your playlist</Typography>
      <TextField value={keyword} onChange={handleSearchKeyword}></TextField>
      {isLoading ? <Loading></Loading> : ''}
      { data?.pages[0].tracks?.items.length !== undefined && data?.pages[0].tracks?.items.length > 0 
      ? data?.pages.map((item) => {
        if(!item.tracks) return;
        return <SearchResultList list={item.tracks?.items}></SearchResultList>
      })
      : <div>'{keyword}'에 대한 검색결과가 없습니다.</div>}
    </div>
  )
}

export default EmptyPlaylistWithSearch
