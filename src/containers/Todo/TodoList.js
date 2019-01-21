import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import composeAll from '1-liners/composeAll';

import cls from 'classnames';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import More from '@material-ui/icons/MoreVert';
import Popover from '@material-ui/core/Popover';

import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
  root: {
    width: '100%'
  }
};

class TodoList extends PureComponent {
  state = {
    isActionMenuOpen: false,
    itemOpenedEl: null,
  }

  handleActionMenuOpen = (e) => {
    e.persist();
    const { currentTarget: itemOpenedEl } = e;
    this.setState({ 
      isActionMenuOpen: true,
      itemOpenedEl 
    });
  }

  handleActionMenuClose = () => {
    this.setState({ isActionMenuOpen: false });
  }

  handleView = () => {

  }

  handleEdit = () => {

  }

  handleDelete = () => {
    const { itemOpenedEl: { id } } = this.state;
    const { removeTodo } = this.props; 
    this.setState({ isActionMenuOpen: false }, () => {
      removeTodo(id);
    });
    
  }

  render() {
    const { classes, className, items } = this.props;

    const { isActionMenuOpen, itemOpenedEl } = this.state;
    return (
      <Fragment>
        <List className={cls(classes.root, className)}>
          {items.map(({ id, title }) => (
            <ListItem key={id}>
              <ListItemText>{title}</ListItemText>
              <ListItemSecondaryAction>
                <IconButton
                  id={id} 
                  onClick={this.handleActionMenuOpen}
                  aria-label="More">
                  <More />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>

        <Popover
          id="simple-popper"
          open={isActionMenuOpen}
          anchorEl={itemOpenedEl}
          onClose={this.handleActionMenuClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <List>
            <ListItem button>
              <ListItemText inset primary="View" />
            </ListItem>
            <ListItem button>
              <ListItemText inset primary="Edit" />
            </ListItem>
            <ListItem button onClick={this.handleDelete}>
              <ListItemText inset primary="Delete" />
            </ListItem>
          </List>
        </Popover>
      </Fragment>

    );
  }
}
TodoList.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  removeTodo: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};

TodoList.defaultProps = {
  className: ''
};

const mapDispatch = ({ todo: { removeTodo } }) => ({
  removeTodo
});

export default composeAll([
  withStyles(styles),
  connect(null, mapDispatch)
])(TodoList);
