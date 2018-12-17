import React, { Component } from 'react';
import { Input, Button, List } from 'antd';

export default class TodoListUI extends Component {
  render() {
    return (
      <div style={{ marginTop: '10px', marginLeft: '10px'}}>
        <div>
          <Input
            value={this.props.inputValue} placehodler='input info.'
            style={{ width: '300px'}}
            onChange={this.props.handlerInputChange}/>
          <Button type="primary" onClick={this.props.handlerBtnClick}>Submit</Button>
        </div>
        <List
          bordered
          style={{ marginTop: '10px', width: '300px'}}
          dataSource={this.props.list}
          renderItem={(item, index) => (<List.Item onClick={(index) => {this.props.handlerItemDelete(index)}}>{item}</List.Item>)}/>
      </div>
    )
  }
}
