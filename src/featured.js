import React from 'react';
import "./App.css"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Card from './card';
import MainCard from './main-card';
import Grid from '@material-ui/core/Grid';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/featured">
            <Featured />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );

function Home() {

  const useStyles = makeStyles((theme) => ({
    root: {
      
      margin: theme.spacing(1),
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }
  }));
  
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={5}>
          <h1 style={{marginBottom: '22px', marginTop: '81px', fontSize: "62px"}}>cocktail synposioum</h1>
          <h2 style={{marginBottom: '92px'}}>a minimal tech blog to simplify your human experience.</h2>
        </Grid>
        <nav>
          <Button id="button" component={Link} to={'/'} color="secondary">HOME</Button>
          <Button id="button" component={Link} to={'/users'} color="secondary">USERS</Button>
          <Button id="button" component={Link} to={'/featured'} color="secondary">FEATURED</Button>
          <Button id="button" component={Link} to={'/explore'} color="secondary">EXPLORE</Button>
        </nav>
        </Grid>

      <container>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}><MainCard /></Paper>
            </Grid>
            <Grid item xs={10} sm={6}>
              <Paper className={classes.paper}><Card /></Paper>
            </Grid>
            <Grid item xs={10} sm={6}>
              <Paper className={classes.paper}><Card /></Paper>
            </Grid>
            <Grid item xs={10} sm={6}>
              <Paper className={classes.paper}><Card /></Paper>
            </Grid>
            <Grid item xs={10} sm={6}>
              <Paper className={classes.paper}><Card /></Paper>
            </Grid>
          </Grid>
        </div>
      </container>
    </div>
  );
}};

function Featured() {
  return <h2>Featured</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function Explore() {
  return <h2>Exmplore</h2>;
}
