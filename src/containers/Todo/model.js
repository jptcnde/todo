import * as reducers from './reducers';
import * as selectors from './selectors';


export default {
  name: 'app',
  state: {
    settings: {},
  },
  reducers,
  selectors
};