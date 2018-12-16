import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators';


export default class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handlerInputChange = this.handlerInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handlerBtnClick = this.handlerBtnClick.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <div style={{ marginTop: '10px', marginLeft: '10px'}}>
        <div>
          <Input
            value={this.state.inputValue} placehodler='input info.'
            style={{ width: '300px'}}
            onChange={this.handlerInputChange}/>
          <Button type="primary" onClick={this.handlerBtnClick}>Submit</Button>
        </div>
        <List
          bordered
          style={{ marginTop: '10px', width: '300px'}}
          dataSource={this.state.list}
          renderItem={(item, index) => (<List.Item onClick={this.handlerItemDelete.bind(this, index)}>{item}</List.Item>)}/>
      </div>
    )
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
