import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import composeAll from '1-liners/composeAll';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withRoot from 'components/withRoot';
import { Switch, Route } from 'react-router-dom';

import Todo from '../Todo/loadable';
import NotFoundPage from '../NotFoundPage/loadable';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
  appBarSpacer: theme.mixins.toolbar,
  tableContainer: {
    height: 320,
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
});

function App(props) {

  const { classes } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h5" color="inherit" noWrap>
            Todos
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <Switch>
          <Route exact path="/" component={Todo} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </main>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default composeAll([
  withStyles(styles),
  withRoot
])(App);
