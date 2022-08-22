import { createStore } from 'redux';
import reducerCombinado from './index';

const store = createStore(reducerCombinado);

store.subscribe(() => {
  console.log(store.getState());
});
