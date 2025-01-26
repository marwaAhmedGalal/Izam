import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import HomeIcon from '@mui/icons-material/Home';
import '../style/navBar.css'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '100px',
  backgroundColor: 'white',
  '&:hover': {
    backgroundColor: 'white',
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'gray'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const commonIconStyle = {
  color: 'gray',
};

const iconGroupStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '20px',
  padding: '0 10px',
};

const groupSpacing = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '60px',
  padding: '0 20px',
};
const borderStyle = {
  borderRight: '1px solid gray',
  paddingRight: '40px'

};
export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Setting and privacy</MenuItem>
      <MenuItem onClick={handleMenuClose}>Language</MenuItem>
      <MenuItem onClick={handleMenuClose}>Help</MenuItem>
      <MenuItem onClick={handleMenuClose} sx={{ color: "red" }}>Logout</MenuItem>

    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'right',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'right',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={0} color="error">
            <AccountCircle sx={commonIconStyle} />
          </Badge>
        </IconButton>

        <p>name</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={0} color="error">
            <HomeIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={0} color="error">
            <WorkOutlineIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={0} color="error">
            <PeopleOutlineIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>

      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <ChatBubbleOutlineIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>

      <MenuItem >Setting and privacy</MenuItem>
      <MenuItem >Language</MenuItem>
      <MenuItem >Help</MenuItem>
      <MenuItem sx={{ color: "red" }}>Logout</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#1e1d1d' }}>
        <Toolbar>

          <IconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
             <Typography
            variant="h6"
            noWrap
            component="div"
            color='white'
          >
            I<span className='zColor'>z</span>am
          </Typography>
          </IconButton>
          
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={commonIconStyle} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '20px' }}>
            <Box sx={{ ...groupSpacing, ...borderStyle }}>
              <IconButton size="large" aria-label="show 17 new notifications">
                <Badge badgeContent={0} color="error">
                  <HomeIcon sx={commonIconStyle} />
                </Badge>
              </IconButton>
              <IconButton size="large" aria-label="show 17 new notifications">
                <Badge badgeContent={0} color="error">
                  <WorkOutlineIcon sx={commonIconStyle} />
                </Badge>
              </IconButton>
              <IconButton size="large" aria-label="show 17 new notifications">
                <Badge badgeContent={0} color="error">
                  <PeopleOutlineIcon sx={commonIconStyle} />
                </Badge>
              </IconButton>
            </Box>
            <Box sx={groupSpacing}>
              <IconButton size="large" aria-label="show 4 new mails">
                <Badge badgeContent={4} color="error">
                  <ChatBubbleOutlineIcon sx={commonIconStyle} />
                </Badge>
              </IconButton>
              <IconButton size="large" aria-label="show 17 new notifications">
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon sx={commonIconStyle} />
                </Badge>
              </IconButton>
            </Box>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
            >
              <AccountCircle sx={commonIconStyle} />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            >
              <AccountCircle/>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}