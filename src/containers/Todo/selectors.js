import get from 'lodash/get';

export const getTodoItems = () => state => get(state, 'todo.items'); // eslint-disable-line