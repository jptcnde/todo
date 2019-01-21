import * as reducers from './reducers';
import * as selectors from './selectors';
import effects from './effects';


export default {
  name: 'todo',
  state: {
    items: [],
    selected: null
  },
  reducers,
  selectors,
  effects
};