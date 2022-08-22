//criando redux
const store = Redux.createStore(reducer);
//buscando o estado dentro de um redux store
const currentState = store.getState();
//definindo a action
let action = {
  type: 'LOGIN'
};
