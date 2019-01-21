import React, { lazy, Suspense, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import composeAll from '1-liners/composeAll';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withRoot from 'components/withRoot';
import { Switch, Route } from 'react-router-dom';
import ProgressIndicator from '../../components/ProgressIndicator';

const Todo  = lazy(() => import('../Todo'));
const NotFoundPage  = lazy(() => import('../NotFoundPage'));

const styles = theme => ({
  appBar: {
    position: 'relative'
  },
  title: {
    flexGrow: 1,
  },
  content: {
    padding: theme.spacing.unit * 3,
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
    <Fragment>
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h5" color="inherit" noWrap>
            Todos
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <Suspense fallback={<ProgressIndicator />}>
          <Switch>
            <Route exact path="/" component={Todo} />
            <Route path="" component={NotFoundPage} />
          </Switch>
        </Suspense> 
      </main>
    </Fragment>
  );
}

App.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default composeAll([
  withStyles(styles),
  withRoot
])(App);
