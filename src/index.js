import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './todolist';
import {Provider} from 'react-redux'  //链接store,内部所有组件都可以获取store里面的内容
import store from './store'

const App =(  //jsx 语法
  <Provider store={store}>
    <TodoList/>
  </Provider>
)

ReactDOM.render(App, document.getElementById('root'));


