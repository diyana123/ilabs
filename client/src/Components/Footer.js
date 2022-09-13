import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { red } from '@material-ui/core/colors';
import './Footer.css';
import { indigo } from "@material-ui/core/colors";
import { Link } from 'react-router-dom';


//
import Box from '@mui/material/Box';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { bgcolor } from '@mui/system';
import { purple } from '@mui/material/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  footerBar: {
    backgroundColor: alpha(theme.palette.common.black, 0.15),
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  root: {
    color: "green",
    "&$selected": {
      color: "red"
    }
  },
  selected: {}
}));

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    // <AppBar position="static">
    //   <Toolbar>
    // {<Typography className={classes.title} variant="h" noWrap>
    //   Copyright @ ilabs all rights received
    // </Typography>}
    //     <BottomNavigation
    //       showLabels
    //       value={value}
    //       onChange={(event, newValue) => {
    //         setValue(newValue);
    //       }}
    //     >
    //       <BottomNavigationAction label="@Privacy Policy" />
    //       <BottomNavigationAction label="|" />
    //       <BottomNavigationAction label="Terms of Service" />
    //       <BottomNavigationAction label="|" />
    //       <BottomNavigationAction label="Help Center" />
    //     </BottomNavigation>
    //   </Toolbar>
    // </AppBar>
    <Box sx={ { width : 1300 , height: 60 ,  backgroundColor: indigo[700],}}>
      <Typography className={classes.title} variant="h6" style={{ padding: 20,  }} noWrap>
        Copyright @ ilabs all rights received
      </Typography>
      <div className='label'>
      <BottomNavigationAction component={Link}
        to="/" label="Home" showLabel />
      <BottomNavigationAction component={Link}
        to="/Privacy" label="@Privacy Policy" showLabel />
      <BottomNavigationAction component={Link}
        to="/Terms"  label="Terms of Service" showLabel />
      <BottomNavigationAction component={Link}
        to="/Help" label="Help Center" showLabel />
      </div>
      {/* <BottomNavigation 
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      > */}
      {/* <BottomNavigationAction label="@Privacy Policy"/>
        <BottomNavigationAction label="Terms of Service"/>
        <BottomNavigationAction label="Help Center"/> */}
      {/* </BottomNavigation> */}
    </Box>
  );
}


