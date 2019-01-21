import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect as connectRedux } from 'react-redux';
import composeAll from '1-liners/composeAll';
import cls from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Input from '@material-ui/core/Input';
import { Field, connect, Formik } from 'formik';

const styles = {
  root: {
    width: '100%',
    textAlign: 'center'
  },
  todoEntryField: {
    width: '75%'
  },
  selectAll: {
    
  }
};


class TodoForm extends Component {
  initialValues = {
    title: ''
  }
  
  onSubmit = (values) => {
    const { addTodo } = this.props;
    addTodo(values); // { todoEntry }
  }

  renderField = ({ field, form: { submitForm } }) => {
    const { classes: { todoEntryField } } = this.props;
    return (
      <Input
        onKeyDown={(e) => e.keyCode === 13 && submitForm()}
        placeholder="What needs to be done?"
        className={todoEntryField} 
        inputProps={field} 
      />
    );
  }


  render() {
    const { 
      classes,
      className 
    } = this.props;

    return (
      <div className={cls(classes.root, className)}>
        <Formik
          initialValues={this.initialValues}
          onSubmit={this.onSubmit}
        >
        {() => (<Field name="title" render={this.renderField}/>)}
        </Formik>
      </div>


    );
  }
}

TodoForm.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  addTodo: PropTypes.func.isRequired,
};

TodoForm.defaultProps = {
  className: ''
};

const mapDispatch = ({ todo: { addTodo } }) => ({
  addTodo
});

export default composeAll([
  withStyles(styles),
  connect,
  connectRedux(null, mapDispatch)
])(TodoForm);