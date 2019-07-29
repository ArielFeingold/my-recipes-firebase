import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import NavigationDrawer from '../NavigationDrawer'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Hidden from '@material-ui/core/Hidden';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



export default function NavigationBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const {isAuth} = props


  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            My Recipes
          </Typography>
          <Hidden only='xs'>
            <div>
            Links
            </div>
          </Hidden>
          <Hidden smUp>
            <NavigationDrawer links="drawer links" />
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}


  // <div>
  //   <ul>
  //     <li>
  //       <Link to={ROUTES.SIGN_IN}>Sign In</Link>
  //     </li>
  //     <li>
  //       <Link to={ROUTES.LANDING}>Landing</Link>
  //     </li>
  //     <li>
  //       <Link to={ROUTES.HOME}>Home</Link>
  //     </li>
  //     <li>
  //       <Link to={ROUTES.ACCOUNT}>Account</Link>
  //     </li>
  //     <li>
  //       <Link to={ROUTES.ADMIN}>Admin</Link>
  //     </li>
  //   </ul>
  // </div>
// );
