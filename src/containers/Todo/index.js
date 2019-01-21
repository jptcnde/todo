import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import composeAll from '1-liners/composeAll';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import TodoInput from './TodoForm';
import TodoList from './TodoList';

import styles from './styles';

import { selector } from '../../store';

const { todo } = selector;

class Todo extends PureComponent {
  componentDidMount() {
    const { loadTodo } = this.props;

    loadTodo();
  }

  render() {
    const { classes, items } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <TodoInput />
          <TodoList items={items} />
        </Paper>
      </div>
    );
  }
}

Todo.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  loadTodo: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapDispatch = ({ todo: { getData: loadTodo }}) => ({
  loadTodo
});

const mapState = (state) => ({
  items: todo.getTodoItems(state),
});

export default composeAll([
  withStyles(styles),
  connect(mapState, mapDispatch)
])(Todo);