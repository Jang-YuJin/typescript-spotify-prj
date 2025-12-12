import { Route, Routes } from 'react-router';
import './App.css';
import React, { Suspense } from 'react';
import Loading from './common/components/Loading';
const AppLayout = React.lazy(() => import('./layout/AppLayout'))
const HomePage = React.lazy(() => import('./pages/homePage/HomePage'))
const SearchPage = React.lazy(() => import('./pages/searchPage/SearchPage'))
const SearchWithKeywordPage = React.lazy(() => import('./pages/searchWithKeywordPage/SearchWithKeywordPage'))
const PlaylistDetailPage = React.lazy(() => import('./pages/playlistDetailPage/PlaylistDetailPage'))
const PlaylistPage = React.lazy(() => import('./pages/playlistPage/PlaylistPage'))
//0. 사이드바(플레이리스트, 메뉴)
//1. 홈페이지 /
//2. 서치페이지 /search
//3. 서치 결과페이지  /search/:keyword
//4. 플레이리스트 디테일페이지  /playlist/:id
//5. (모바일) 플레이리스트 페이지 /playlist
function App() {
  return (
    <Suspense fallback={<Loading></Loading>}>
      <Routes>
        <Route path='/' element={<AppLayout></AppLayout>}>
          <Route index element={<HomePage></HomePage>}></Route>
          <Route path='search' element={<SearchPage></SearchPage>}></Route>
          <Route path='search/:keyword' element={<SearchWithKeywordPage></SearchWithKeywordPage>}></Route>
          <Route path='playlist/:id' element={<PlaylistDetailPage></PlaylistDetailPage>}></Route>
          <Route path='playlist' element={<PlaylistPage></PlaylistPage>}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
