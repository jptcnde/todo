import { init } from '@rematch/core';
import selectPlugin from '@rematch/select';
import * as models from './containers/models';

const store = init({
 models,
 plugins: [selectPlugin()]
});

export const { select: selector } = store;

export default store;
