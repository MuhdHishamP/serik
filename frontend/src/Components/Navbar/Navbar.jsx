import React, { useContext } from 'react'
import { useEffect, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import logo from '../../Assets/logo.png'
import { Link } from 'react-router-dom';
import "./Navbar.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
// import { useDispatch } from 'react-redux';

// import { searchByName } from '../users/userSlice';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
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
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export const Navbar = ()=> {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =useState(null);
  const navigate = useNavigate();
  const {getTotalitem}=useContext(ShopContext)

  const handleCartClick = () => {
    
        navigate('/cart');
    
    }
    


//   const dispatch= useDispatch();
//   const [searchQuery, setSearchQuery] = useState('');
 


//   const handleSearchChange = (event)=>{
//     setSearchQuery(event.target.value);
//     // console.log("query",event.target.value)

//   }
//  useEffect(()=>{
//   dispatch(searchByName(searchQuery));

//  },[searchQuery,dispatch]);

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
 

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem className='nav_menu2'>
      <IconButton
          size="small"
          aria-label="About page"
          color="inherit"
        >
           <Link  style={{textDecoration:'none'}} to="/">Shop</Link>
        </IconButton>
      </MenuItem>
      <MenuItem>
      <IconButton
          size="small"
          aria-label="About page"
          color="inherit"
        >
           <Link  style={{textDecoration:'none'}} to="/women">Women</Link>
        </IconButton>
      </MenuItem>
      <MenuItem>
     
      <IconButton
          size="small"
          aria-label="About page"
          color="inherit"
        >
           <Link  style={{textDecoration:'none'}} to="/men">Men</Link>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="small"
          aria-label="About page"
          color="inherit"
        >
           <Link  style={{textDecoration:'none'}} to="/kids">Kids</Link>
        </IconButton>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <div className='nav_login_cart'>
            <IconButton onClick={handleCartClick}>
                <ShoppingCartIcon fontSize='large'/>
            </IconButton>
            <div className='nav_cart_count'>{getTotalitem()}</div>
            </div>
      
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'white', color: 'white' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
           <img src={logo} style={{ width: 40, height: 40 }} />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' },color:'black' }}
          >
            SERIK
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            //   value={searchQuery}
            //   onChange={handleSearchChange}
            color='black'
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

            <ul className='nav_menu'>
                <li><Link  style={{textDecoration:'none'}} to="/">Shop</Link></li>
                <li> <Link  style={{textDecoration:'none'}} to="/women">Women</Link></li>
                <li> <Link  style={{textDecoration:'none'}} to="/men">Men</Link></li>
                <li> <Link  style={{textDecoration:'none'}} to="/kids">Kids</Link></li>

            </ul>
            
        
            {/* <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              color="inherit"
            >
             <Link  style={{textDecoration:'none'}} to="/cart"></Link>
               <AccountCircle />
            </IconButton> */}
            <div className='nav_login_cart'>
            <IconButton onClick={handleCartClick}>
            <ShoppingCartIcon fontSize='large'/>
           
            </IconButton>
            <div className='nav_cart_count'>{getTotalitem()}

            </div>
            </div>

          
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="black"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    
    </Box>
  );
}