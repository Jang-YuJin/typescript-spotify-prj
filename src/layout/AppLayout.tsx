import { Box, styled, Typography } from '@mui/material'
import { NavLink, Outlet } from 'react-router'
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import SearchIcon from '@mui/icons-material/Search';
import PlaylistHead from './components/PlaylistHead';
import Playlist from './components/Playlist';

const Layout = styled('div')({
  display: 'flex',
  height: '100vh',
  padding: '8px'
});

const Sidebar = styled('div')(({theme}) => ({
  width: '331px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}));

const ContentBox = styled(Box)(({theme}) => ({
  borderRadius: '8px',
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  width: '100%',
  padding: '8px',
  marginBottom: '8px',
  marginRight: '8px'
}));

const ContentBoxBotton = styled(Box)(({theme}) => ({
  borderRadius: '8px',
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  width: '100%',
  height: '100%',
  padding: '8px',
  marginBottom: '8px',
  marginRight: '8px'
}));

const NavList = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0
});

const StyledNavLink = styled(NavLink)(({theme}) => ({
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  margin: '20px 0',
  color: theme.palette.text.secondary,
  '&:hover': {
    color: theme.palette.text.primary
  },
  '&.active': {
    color: theme.palette.text.primary
  },
}));

const AppLayout = () => {
  return (
    <Layout>
      <Sidebar>
        <ContentBox>
          <NavList>
            <StyledNavLink to={'/'}><HomeFilledIcon sx={{mr:2}}></HomeFilledIcon><Typography variant='h2' fontWeight={700}>Home</Typography></StyledNavLink>
            <StyledNavLink to={'/search'}><SearchIcon sx={{mr:2}}></SearchIcon><Typography variant='h2' fontWeight={700}>Search</Typography></StyledNavLink>
          </NavList>
        </ContentBox>

        <ContentBoxBotton>
          <PlaylistHead></PlaylistHead>
          <Playlist></Playlist>
        </ContentBoxBotton>
      </Sidebar>
      <Outlet></Outlet>
    </Layout>
  )
}

export default AppLayout
