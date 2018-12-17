import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from './store';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getTodoList } from './store/actionCreators';
import TodoListUI from './TodoListUI';


export default class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handlerInputChange = this.handlerInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handlerBtnClick = this.handlerBtnClick.bind(this);
    this.handlerItemDelete = this.handlerItemDelete.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        handlerInputChange={this.handlerInputChange}
        handlerBtnClick={this.handlerBtnClick}
        handlerItemDelete={this.handlerItemDelete}
        list={this.state.list}/>
    )
  }

  componentDidMount() {
    const action = getTodoList();
    store.dispatch(action);
  }

  handlerInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handlerBtnClick() {
    const action = getAddItemAction();
    store.dispatch(action);
  }

  handlerItemDelete(index) {
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }
}
